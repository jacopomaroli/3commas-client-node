const chai = require('chai')
// const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs/promises')
const path = require('path')
const { TypeScriptGenerator } = require('@asyncapi/modelina')
const { parse, getOrderedModel, fixSchema } = require('./parser')
const parser = require('@asyncapi/parser')

const interfaceProperty = (args) => {
  const { propertyName } = args
  if (propertyName === 'additionalProperties') {
    return ''
  }
  return args.content
}

const enumItem = (args) => {
  return args.content.replace(/"/g, '\'')
}

const generator = new TypeScriptGenerator({
  modelType: 'interface',
  presets: [
    {
      interface: {
        property: interfaceProperty
      },
      enum: {
        item: enumItem
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

// const expectedTSDefs = `
// interface TestSchema {
//   name?: string;
// }
// `.trim()

describe('parser', function () {
  describe('When parser is invoked', function () {
    before(function () {
    })
    after(function () {
    })
    it('Generates valid typescript definitions', async function () {
      // const specs = await fs.readFile('tools/asyncapi.yml', 'utf8')
      const specs = await fs.readFile('tools/3commas_asyncapidoc.yml', 'utf8')
      const expectedTSDefsFile = await fs.readFile('tools/expected.d.ts', 'utf8')
      const expectedTSDefs = expectedTSDefsFile.replace(/\r\n/g, '\n')
      const doc = await parse(specs)
      fixSchema(doc)
      const doc3 = await parser.parse(doc._json, {
        genererateIdInSchema: true
      })
      // const doc2 = await parser.parse(specs, { path: `${path.resolve(__dirname)}${path.sep}` })
      const interfaceModel = await generator.generate(doc3)
      const orderedModel = getOrderedModel(interfaceModel)
      const TSRes = orderedModel.map(x => x.result).join('\n') + '\n'
      console.log(TSRes)
      expect(TSRes).to.equal(expectedTSDefs)
    })
  })
})
