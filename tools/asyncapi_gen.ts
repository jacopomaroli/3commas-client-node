import fs from 'fs/promises'

import { TypeScriptGenerator } from '@asyncapi/modelina'
import parser from '@asyncapi/parser'
// import yaml from 'js-yaml'

import { parse } from './parser'

const generator = new TypeScriptGenerator({ modelType: 'interface' })

const doc = {
  $id: 'Address',
  type: 'object',
  properties: {
    street_name: { type: 'string' },
    city: { type: 'string', description: 'City description' },
    house_number: { type: 'number' },
    marriage: { type: 'boolean', description: 'Status if marriage live in given house' },
    pet_names: { type: 'array', items: { type: 'string' } },
    state: { type: 'string', enum: ['Texas', 'Alabama', 'California', 'other'] }
  },
  required: ['street_name', 'city', 'state', 'house_number', 'state']
}

const main = async () => {
  // const interfaceModel = await generator.generate(doc)
  // console.log(interfaceModel[0].result)
  // const threecommasasyncapidocsrc = await fs.readFile('3commas_asyncapidoc_src.yml', 'utf8')
  const threecommasasyncapidocsrc = await fs.readFile('asyncapi.yml', 'utf8')
  // const threecommasopenapidoc = await fs.readFile('3commas_openapidoc.yml', 'utf8')
  // const openapi = yaml.load(threecommasopenapidoc)
  const doc2: any = await parser.parse(threecommasasyncapidocsrc)
  console.log(doc2)
  const doc3: any = await parse(threecommasasyncapidocsrc)
  // const doc3 = {...doc2}
  const interfaceModel2 = await generator.generate(doc3)
  console.log(interfaceModel2.map(x => x.result).join('\n'))
}

main()
