import dotenv from 'dotenv'
import chai from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'

import { ThreeCommasClient, ThreeCommasClientConfig, WSEventType, AccountEntity } from '../../src/index'
const { expect } = chai

dotenv.config({ path: '.env' })

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.should()

const THREECOMMAS_API_KEY:string = process.env.THREECOMMAS_API_KEY!
const THREECOMMAS_API_SECRET:string = process.env.THREECOMMAS_API_SECRET!

describe('Basic check', function () {
  describe('When the main object is initialized', function () {
    before(function () {
      const config : ThreeCommasClientConfig = { apiKey: THREECOMMAS_API_KEY, apiSecret: THREECOMMAS_API_SECRET }
      this.threeCommasClient = new ThreeCommasClient(config)
    })
    after(function () {
      this.threeCommasClient.wsClient.close()
    })
    it('Executes REST requests with no errors', async function () {
      const accounts = await this.threeCommasClient.RESTClient.accounts.getVer1Accounts()
      expect(accounts).to.be.an('array')
      const account: AccountEntity = accounts[0]
      expect(account.id).to.be.a('number')
    })
    it.only('Subscribes successfully to ws events', async function () {
      await this.threeCommasClient.waitForWsReady()
      const waitForSub = () => new Promise<void>((resolve) => {
        this.threeCommasClient.subscribe(WSEventType.ConfirmSubscription, function () {
          resolve()
        })
        this.threeCommasClient.subscribe(WSEventType.SmartTrades, function () { })
      })
      return waitForSub().should.eventually.be.fulfilled
    })
  })
})
