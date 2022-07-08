const chai = require('chai')
// const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs/promises')
const path = require('path')
const { TypeScriptGenerator } = require('@asyncapi/modelina')
const { parse } = require('./parser')
const parser = require('@asyncapi/parser')

const upperFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const lowerFirst = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

const preprocess = (args, lastKey = '', lastSchemaID = '') => {
  // args.inputModel.models
  const { propertyName, model } = args
  if (propertyName === 'additionalProperties') {
    return ''
  }
  const schemaId = model.originalInput['x-parser-schema-id']
  if (schemaId !== undefined) {
    if (schemaId.startsWith('<anonymous-schema-')) {
      const newSchemaId = lowerFirst(lastSchemaID + upperFirst(lastKey))
      model.originalInput['x-parser-schema-id'] = newSchemaId
      lastSchemaID = newSchemaId
    } else {
      lastSchemaID = schemaId
    }
  }
  return args.content
}

const generator = new TypeScriptGenerator({
  modelType: 'interface',
  presets: [
    {
      interface: {
        property: preprocess
      }
    }
  ],
  processorOptions: {
    foobar: ''
  }
})

const { expect } = chai

// chai.use(sinonChai)
// chai.use(chaiAsPromised)
// chai.should()

const expectedTSDefs = `
interface TestSchema {
  name?: string;
}
`.trim()

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

  const items = getItems(rootIdxs).map(x => x.modelName)
  const root = {
    idx: -1,
    children: walk(rootIdxs, [-1])
  }
  const flat = flattenTree(root)
  const deduped = dedupTree(flat)
  const res = getItems(deduped)
  return res
}

describe('parser', function () {
  describe('When parser is invoked', function () {
    before(function () {
    })
    after(function () {
    })
    it('Generates valid typescript definitions', async function () {
      // const specs = await fs.readFile('tools/asyncapi.yml', 'utf8')
      const specs = await fs.readFile('tools/3commas_asyncapidoc.yml', 'utf8')
      const doc = await parse(specs)
      // delete doc._json.openapi
      // delete doc._json.paths
      // delete doc._json.tags
      const doc3 = await parser.parse(doc._json, {
        genererateIdInSchema: true
      })
      // const doc2 = await parser.parse(specs, { path: `${path.resolve(__dirname)}${path.sep}` })
      const interfaceModel = await generator.generate(doc3)
      const orderedModel = getOrderedModel(interfaceModel)
      const TSRes = orderedModel.map(x => x.result).join('\n')
      console.log(TSRes)
      expect(TSRes).to.equal(expectedTSDefs)
    })
  })
})
