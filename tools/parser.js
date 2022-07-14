const fs = require('fs/promises')
const path = require('path')
const yaml = require('js-yaml')

const getElem = (obj, path) => path.substring(path.charAt(0) === '/' ? 1 : 0).split('/').reduce((o, i) => o[i], obj)

const isStr = x => typeof x === 'string' || x instanceof String

const isRef = x => isStr(x) && x.indexOf('#') === -1

function isObject (item) {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep (target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

function addProps (obj, arr, val) {
  if (typeof arr === 'string') { arr = arr.substring(arr.charAt(0) === '/' ? 1 : 0).split('/') }

  obj[arr[0]] = obj[arr[0]] || {}

  const tmpObj = obj[arr[0]]

  if (arr.length > 1) {
    arr.shift()
    addProps(tmpObj, arr, val)
  } else { obj[arr[0]] = val }

  return obj
}

const getElemRefDeps = (elem, doc) => {
  const res = {}
  for (const [key, obj] of Object.entries(elem)) {
    if (obj === null || typeof obj === 'string' || obj instanceof String) {
      continue
    }
    if (!Object.keys(obj).length) continue
    const elemRefDeps = getElemRefDeps(obj, doc)
    for (const { elem, propPath } of elemRefDeps) {
      res[propPath] = elem
    }
    if (!obj.$ref) continue
    const [baseFile, propPath] = obj.$ref.split('#')
    const elem = getElem(doc, propPath)
    res[propPath] = elem
  }
  return Object.keys(res).map(propPath => ({ propPath, elem: res[propPath] }))
}

const walk = async (fullDoc, doc, root) => {
  const res = {}
  for (const [key, obj] of Object.entries(doc)) {
    if (typeof obj === 'string' || obj instanceof String) {
      if (key !== '$ref') {
        res[key] = obj
        continue
      }
      const [baseFile, propPath] = obj.split('#')
      if (baseFile) {
        const subdocStr = await fs.readFile(path.resolve(__dirname, baseFile), 'utf8')
        const subDoc = await parse(subdocStr)
        // Object.assign(root, subDoc._json)
        const elem = getElem(subDoc._json, propPath)
        addProps(root, propPath, elem)
        const elemRefDeps = getElemRefDeps(elem, subDoc._json)
        for (const { elem, propPath } of elemRefDeps) {
          addProps(root, propPath, elem)
        }
        res[key] = `#${propPath}`
      } else {
        const elem = getElem(fullDoc, propPath)
        // res = elem
        // Object.assign(res, elem)
        res[key] = obj
      }
    } else if (typeof obj === 'boolean') {
      res[key] = obj
    } else if (typeof obj === 'number') {
      res[key] = obj
    } else if (obj === null) {
      res[key] = obj
    } else if (Array.isArray(obj)) {
      res[key] = []
      for (const x of obj) {
        if (x === null || typeof x === 'string' || x instanceof String) {
          res[key].push(x)
          continue
        }
        if (!Object.keys(x).length) {
          res[key].push(x)
          continue
        }
        const subRes = await walk(fullDoc, x, root || res)
        res[key].push(subRes)
      }
    } else {
      const subRes = await walk(fullDoc, obj, root || res)
      // res[key] = Object.assign({}, res[key], subRes)
      res[key] = mergeDeep(res[key] || {}, subRes)
    }
  }
  return res
}

const parse = async (docStr) => {
  const docIn = yaml.load(docStr)
  const doc = await walk(docIn, docIn)
  return { _json: doc }
}

const getOrderedModel = (interfaceModel) => {
  const uniq = x => [...new Set(x)]

  const primitiveTypes = ['boolean', 'string', 'integer', 'number']

  const getType = x => x.type === 'array' ? x.items.$ref : x.type || x.$ref

  const getNonPrimitiveDeps = (model) => {
    if (model.model.type !== 'object') return []
    return uniq(Object.values(model.model.properties).map(getType)).filter(x => !primitiveTypes.includes(x))
  }

  const getRootIndexes = (idxPool, interfaceModel) => {
    return idxPool.filter(x => getNonPrimitiveDeps(interfaceModel[x]).length === 0)
  }

  const getChildren = (model) => {
    return idxPool.filter(x => Object.values(interfaceModel[x].model.properties).map(getType).some(z => z === model.model.$id))
  }

  const walk = (idxs, walked) => {
    const res = []
    for (const idx of idxs) {
      const model = interfaceModel[idx]
      const children = getChildren(model)
      const children2 = children.filter(x => !walked.includes(x))
      const subWalked = [...walked, idx]
      res.push({
        idx,
        children: walk(children2, subWalked)
      })
    }
    return res
  }

  const flattenTree = (parent) => {
    const res = []
    for (const child of parent.children) {
      res.push(child.idx)
      res.push(...flattenTree(child))
    }
    return res
  }

  const dedupTree = (idxs) => {
    return uniq(idxs.reverse()).reverse()
  }

  const getItems = (idxs) => {
    return idxs.map(x => interfaceModel[x])
  }

  let idxPool = [...Array(interfaceModel.length).keys()]
  const rootIdxs = getRootIndexes(idxPool, interfaceModel)
  idxPool = idxPool.filter(x => !rootIdxs.includes(x))

  // const items = getItems(rootIdxs).map(x => x.modelName)
  const root = {
    idx: -1,
    children: walk(rootIdxs, [-1])
  }
  const flat = flattenTree(root)
  const deduped = dedupTree(flat)
  const res = getItems(deduped)
  return res
}

const fixSchema = (doc) => {
  for (const schema of Object.values(doc._json.components.schemas)) {
    if (!schema.properties) continue
    for (const property of Object.values(schema.properties)) {
      if (property.type === 'string' && typeof property.const !== 'undefined') {
        property.enum = [property.const]
        delete property.const
      }
    }
  }
}

module.exports = {
  parse,
  getOrderedModel,
  fixSchema
}
