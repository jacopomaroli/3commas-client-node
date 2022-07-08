import fs from 'fs/promises'
import chai from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'

import { ThreeCommasClient, ThreeCommasClientConfig, WSEventType, AccountEntity } from '../../src/index'
const { expect } = chai

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.should()

describe('Basic check', function () {
  this.timeout(99999999)
  describe('When the main object is initialized', function () {
    before(function () {
      const config : ThreeCommasClientConfig = { apiKey: 'THREECOMMAS_API_KEY', apiSecret: 'THREECOMMAS_API_SECRET' }
      this.threeCommasClient = new ThreeCommasClient(config)
    })
    after(function () {
      this.threeCommasClient.wsClient.close()
    })
    it.only('Subscribes successfully to ws events', async function () {
      const wsDealsChannelEvent = await fs.readFile('test/assets/wsDealsChannelEvent.txt', 'utf8')
      this.threeCommasClient.wsClientMessageHandler(wsDealsChannelEvent)
      const waitForEvent = () => new Promise<void>((resolve) => {
        this.threeCommasClient.subscribe(WSEventType.Deals, function (deal: any) {
          console.log(deal)
          resolve()
        })
      })
      return waitForEvent().should.eventually.be.fulfilled
    })
  })
})
