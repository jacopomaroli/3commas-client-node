# 3commas Client Node:
This is a typescript client for 3commas for node.js. It supports also websockets.  
The client definition is automatically generated from OpenAPI specs using [OpenAPI Typescript Codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

# Quickstart
```
import dotenv from 'dotenv'
import { ThreeCommasClient, ThreeCommasClientConfig, WSEventType, AccountEntity } from '3commas-client-node'

dotenv.config({ path: '.env' })

const THREECOMMAS_API_KEY: string = process.env.THREECOMMAS_API_KEY!
const THREECOMMAS_API_SECRET: string = process.env.THREECOMMAS_API_SECRET!

async function main () {
  const config: ThreeCommasClientConfig = { apiKey: THREECOMMAS_API_KEY, apiSecret: THREECOMMAS_API_SECRET }
  const threeCommasClient = new ThreeCommasClient(config)

  const accounts = await threeCommasClient.RESTClient.accounts.getVer1Accounts()
  const account: AccountEntity = accounts[0]
  console.log(account.id)

  // Websocket support
  await threeCommasClient.waitForWsReady()
  const waitForSub = () => new Promise<void>((resolve) => {
    threeCommasClient.subscribe(WSEventType.ConfirmSubscription, function () {
      resolve()
    })
    threeCommasClient.subscribe(WSEventType.SmartTrades, function () { })
  })

  await waitForSub()
  threeCommasClient.wsClient.close()
}

main()
```

# Patches
https://github.com/asyncapi/parser-js/pull/543
