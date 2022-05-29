import { createHmac } from 'crypto'
import WebSocket from 'ws'

import { OpenAPI, Client } from './client'
import type { OpenAPIConfig } from './client'
import type { ApiRequestOptions } from './client/core/ApiRequestOptions'

export * from './client'

type Headers = Record<string, string>

export enum WSEventType {
  Open = 'Open',
  Ready = 'Ready',
  Welcome = 'Welcome',
  Ping = 'Ping',
  ConfirmSubscription = 'ConfirmSubscription',
  SmartTrades = 'SmartTrades',
  Deals = 'Deals'
}

export enum WSEventTypeRawMap {
  Open = 'open',
  Ready = 'ready',
  Welcome = 'welcome',
  Ping = 'ping',
  ConfirmSubscription = 'confirm_subscription',
  SmartTrades = 'SmartTrades',
  Deals = 'Deals'
}

export enum RawWSEventTypeMap {
  'open' = WSEventType.Open,
  'ready' = WSEventType.Ready,
  'welcome' = WSEventType.Welcome,
  'ping' = WSEventType.Ping,
  'confirm_subscription' = WSEventType.ConfirmSubscription,
  'SmartTrades' = WSEventType.SmartTrades,
  'Deals' = WSEventType.Deals
}

export type WsSubscribers = Record<keyof typeof WSEventType, Function[]>

export type ThreeCommasClientConfig = {
  apiKey: string;
  apiSecret: string;
  wsURL?: string;
  openAPIConfig?: OpenAPIConfig;
};

export const ThreeCommasClientDefaultConfig: ThreeCommasClientConfig = {
  apiKey: '',
  apiSecret: '',
  wsURL: 'wss://ws.3commas.io/websocket',
  openAPIConfig: OpenAPI
}

export class ThreeCommasClient {
  threeCommasClientConfig: ThreeCommasClientConfig
  RESTClient: Client
  wsClient: WebSocket
  wsClientReady: boolean = false
  wsSubscribers: WsSubscribers = {
    Open: [],
    Ready: [],
    Welcome: [],
    Ping: [],
    ConfirmSubscription: [],
    SmartTrades: [],
    Deals: []
  }

  constructor (threeCommasClientConfig: ThreeCommasClientConfig) {
    this.threeCommasClientConfig = threeCommasClientConfig
    this.threeCommasClientConfig = { ...ThreeCommasClientDefaultConfig, ...this.threeCommasClientConfig }
    this.threeCommasClientConfig.openAPIConfig = { ...OpenAPI, ...this.threeCommasClientConfig.openAPIConfig }
    this.threeCommasClientConfig.openAPIConfig.HEADERS = this.signRequest

    this.RESTClient = new Client(this.threeCommasClientConfig.openAPIConfig)
    this.wsClient = new WebSocket(this.threeCommasClientConfig.wsURL!)

    this.wsClient.on('open', () => {
      this.wsClientReady = true
      this.dispatch(WSEventType.Ready, {})
    })

    this.wsClient.on('message', this.wsClientMessageHandler)
  }

  generateSignature (url: string): string {
    return createHmac('sha256', this.threeCommasClientConfig.apiSecret).update(url).digest('hex')
  }

  getQueryParams (query: Record<string, any> | undefined) {
    if (typeof query === 'undefined') {
      return {}
    }
    // remove undefined/empty keys
    const queryParams = Object.keys(query).reduce((acc, key) => (
      typeof query[key] === 'undefined' || query[key] === '' ? acc : { ...acc, ...{ [key]: query[key] } }
    ), {})
    return queryParams
  }

  signRequest = (options: ApiRequestOptions): Promise<Headers> => {
    const queryParams = this.getQueryParams(options.query)
    const queryParamsStr = (new URLSearchParams(queryParams)).toString()
    const url = new URL(`${this.threeCommasClientConfig.openAPIConfig!.BASE}${options.url}?${queryParamsStr}`)
    const sig = this.generateSignature(`${url.pathname}${url.search || '?'}`)
    const headers: Headers = {
      ...options.headers,
      ...{
        APIKEY: this.threeCommasClientConfig.apiKey,
        Signature: sig
      }
    }
    return Promise.resolve(headers)
  }

  channel2ChannelIdentifier (channel: string): string {
    return `${channel}Channel`
  }

  channel2ChannelUrl (channel: string): string {
    return '/' + channel.split(/(?=[A-Z])/).join('_').toLocaleLowerCase()
  }

  Raw2WSEventType (channel: string): WSEventType {
    return RawWSEventTypeMap[channel as keyof typeof RawWSEventTypeMap] as unknown as WSEventType
  }

  WSEventType2Raw (channel: WSEventType): string {
    return WSEventTypeRawMap[channel]
  }

  subscribe (wsChannel: WSEventType, handler: Function) {
    if ([WSEventType.Ready, WSEventType.ConfirmSubscription].includes(wsChannel)) {
      this.wsSubscribers[wsChannel].push(handler)
      return handler
    }
    const channel = this.WSEventType2Raw(wsChannel)
    const channelIdentifier = this.channel2ChannelIdentifier(channel)
    const channelUrl = this.channel2ChannelUrl(channel)
    const sig = this.generateSignature(channelUrl)
    const identifier = {
      channel: channelIdentifier,
      users: [
        {
          api_key: this.threeCommasClientConfig.apiKey,
          signature: sig
        }
      ]
    }
    const msg = {
      identifier: JSON.stringify(identifier),
      command: 'subscribe'
    }
    const msgStr = JSON.stringify(msg)
    this.wsClient.send(msgStr)
    this.wsSubscribers[wsChannel].push(handler)
    return handler
  }

  unsubscribe (wsChannel: WSEventType, handler: Function) {
    const subscriberIndex = this.wsSubscribers[wsChannel].findIndex((subscriber: Function) => subscriber === handler)
    if (subscriberIndex > -1) {
      this.wsSubscribers[wsChannel].splice(subscriberIndex, 1)
    }
  }

  dispatch (wsChannel: WSEventType, payload: any) {
    for (const handler of this.wsSubscribers[wsChannel]) {
      handler(payload)
    }
  }

  wsClientMessageHandler = (msgBuf: Buffer) => {
    const msgStr: string = msgBuf.toString()
    const msgObj = JSON.parse(msgStr)
    const wsChannel: WSEventType = this.Raw2WSEventType(msgObj.type)
    this.dispatch(wsChannel, msgObj)
  }

  async waitForWsReady () {
    if (this.wsClientReady) {
      return
    }
    return new Promise((resolve) => {
      this.subscribe(WSEventType.Ready, resolve)
    })
  }
}
