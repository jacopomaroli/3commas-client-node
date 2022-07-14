const chai = require('chai')
// const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs/promises')
const path = require('path')
const { TypeScriptGenerator } = require('@asyncapi/modelina')
const { parse, getOrderedModel, fixSchema } = require('./parser')
const parser = require('@asyncapi/parser')

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const interfaceProperty = (args) => {
  const { propertyName } = args
  if (propertyName === 'additionalProperties') {
    return ''
  }
  if (propertyName === 'message') {
    console.log('here')
  }
  if (args.model?.originalInput?.properties?.[propertyName]?.oneOf) {
    const refModels = args.model.originalInput.properties[propertyName].oneOf.map(x => x['x-parser-schema-id'])
    // args.content = args.content.replace(capitalizeFirstLetter(args.property.$ref), refModels.join(' | '))
    args.content = args.content.replace(/: .*;/, `: ${refModels.join(' | ')};`)
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
    foobar: '',
    interpreterOptions: {
      allowInheritance: false
    }
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

const emptyDir = async (directory) => {
  const files = await fs.readdir(directory)

  for (const file of files) {
    await fs.unlink(path.join(directory, file))
  }
}

describe('parser', function () {
  describe('When parser is invoked', function () {
    before(function () {
    })
    after(function () {
    })
    it('should render `interface` type', async function () {
      const doc = {
        $id: 'Address',
        type: 'object',
        properties: {
          street_name: { type: 'string' },
          city: { type: 'string', description: 'City description' },
          state: { type: 'string' },
          house_number: { type: 'number' },
          marriage: { type: 'boolean', description: 'Status if marriage live in given house' },
          members: { oneOf: [{ type: 'string' }, { type: 'number' }, { type: 'boolean' }] },
          tuple_type: { type: 'array', items: [{ type: 'string' }, { type: 'number' }], additionalItems: false },
          tuple_type_with_additional_items: { type: 'array', items: [{ type: 'string' }, { type: 'number' }], additionalItems: true },
          array_type: { type: 'array', items: { type: 'string' } }
        },
        patternProperties: {
          '^S(.?*)test&': {
            type: 'string'
          }
        },
        required: ['street_name', 'city', 'state', 'house_number', 'array_type']
      }
      const expected = `interface Address {
  streetName: string;
  city: string;
  state: string;
  houseNumber: number;
  marriage?: boolean;
  members?: string | number | boolean;
  tupleType?: [string, number];
  tupleTypeWithAdditionalItems?: [string, number, ...(object | string | number | Array<unknown> | boolean | null)[]];
  arrayType: Array<string>;
  additionalProperties?: Map<String, object | string | number | Array<unknown> | boolean | null>;
  sTestPatternProperties?: Map<String, string>;
}`
      const interfaceGenerator = new TypeScriptGenerator({ modelType: 'interface' })
      const inputModel = await interfaceGenerator.process(doc)
      const model = inputModel.models.Address

      const interfaceModel = await interfaceGenerator.render(model, inputModel)
      expect(interfaceModel.result).to.equal(expected)
      expect(interfaceModel.dependencies).to.eql([])
    })
    it.only('Generates valid typescript definitions', async function () {
      // const specs = await fs.readFile('tools/asyncapi2.yml', 'utf8')
      const specs = await fs.readFile('tools/3commas_asyncapidoc.yml', 'utf8')
      const expectedTSDefsFile = await fs.readFile('tools/expected.d.ts', 'utf8')
      const expectedTSDefs = expectedTSDefsFile.replace(/\r\n/g, '\n')
      const doc = await parse(specs)
      fixSchema(doc)
      const doc3 = await parser.parse(doc._json, {
        genererateIdInSchema: true
      })
      // const doc2 = await parser.parse(specs, { path: `${path.resolve(__dirname)}${path.sep}` })
      const interfaceModel = await generator.generateCompleteModels(doc3, {
        moduleSystem: 'ESM'
      })
      await emptyDir('tools/result')
      for (const model of interfaceModel) {
        await fs.writeFile(`tools/result/${model.modelName}.d.ts`, model.result, 'utf8')
      }
      const orderedModel = getOrderedModel(interfaceModel)
      const TSRes = orderedModel.map(x => x.result).join('\n') + '\n'
      await fs.writeFile('tools/result.d.ts', TSRes, 'utf8')
      console.log(TSRes)
      expect(expectedTSDefs).to.equal(TSRes)
    })
  })
})
