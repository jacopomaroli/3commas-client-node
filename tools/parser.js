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

module.exports = {
  parse
}
