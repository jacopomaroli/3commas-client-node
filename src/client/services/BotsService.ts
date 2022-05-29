/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BotEntity } from '../models/BotEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BotsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * account_trade_info_smart_sell
     * @param accountId 
     * @returns any get AccountTradeInfoSmartSell(s)
     * @throws ApiError
     */
    public getVer1BotsAccountTradeInfoSmartSell(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/account_trade_info_smart_sell',
            query: {
                'account_id': accountId,
            },
        });
    }

    /**
     * account_trade_info
     * @param accountId 
     * @returns any get AccountTradeInfo(s)
     * @throws ApiError
     */
    public getVer1BotsAccountTradeInfo(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/account_trade_info',
            query: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Available strategy list for bot (Permission: BOTS_READ, Security: SIGNED)
     * @param accountId id from GET /ver1/accounts
     * @param type 
     * @param strategy 
     * @returns any Available strategy list for bot (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1BotsStrategyList(
accountId?: number,
type?: 'simple' | 'composite',
strategy?: 'long' | 'short',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/strategy_list',
            query: {
                'account_id': accountId,
                'type': type,
                'strategy': strategy,
            },
        });
    }

    /**
     * Black List for bot pairs (Permission: BOTS_READ, Security: SIGNED)
     * @returns any Black List for bot pairs (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1BotsPairsBlackList(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/pairs_black_list',
        });
    }

    /**
     * Create or Update pairs BlackList for bots (Permission: BOTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Create or Update pairs BlackList for bots (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsUpdatePairsBlackList(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/update_pairs_black_list',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Create bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsCreateBot(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/create_bot',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * User bots (Permission: BOTS_READ, Security: SIGNED)
     * @param limit Limit records. Max: 100
     * @param offset Offset records
     * @param from Param for a filter by created date
     * @param accountId Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
     * @param scope 
     * @param strategy 
     * @param sortBy 
     * @param sortDirection 
     * @param quote Quote currency
     * @returns BotEntity User bots (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1Bots(
limit: number = 50,
offset?: number,
from?: string,
accountId?: number,
scope?: 'enabled' | 'disabled',
strategy?: 'long' | 'short',
sortBy: 'profit' | 'created_at' | 'updated_at' = 'created_at',
sortDirection: 'asc' | 'desc' = 'desc',
quote?: string,
): CancelablePromise<Array<BotEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots',
            query: {
                'limit': limit,
                'offset': offset,
                'from': from,
                'account_id': accountId,
                'scope': scope,
                'strategy': strategy,
                'sort_by': sortBy,
                'sort_direction': sortDirection,
                'quote': quote,
            },
        });
    }

    /**
     * Get bot stats (Permission: BOTS_READ, Security: SIGNED)
     * @param accountId Account to show on. Null - show for all. Gather this from GET /ver1/accounts
     * @param botId Bots to show on. Null - show for all
     * @returns any Get bot stats (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1BotsStats(
accountId?: number,
botId?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/stats',
            query: {
                'account_id': accountId,
                'bot_id': botId,
            },
        });
    }

    /**
     * POST /bots/:id/copy_and_create. Permission: BOTS_WRITE, Security: SIGNED
     * @param botId 
     * @param requestBody 
     * @returns any POST /bots/:id/copy_and_create. Permission: BOTS_WRITE, Security: SIGNED
     * @throws ApiError
     */
    public postVer1BotsBotIdCopyAndCreate(
botId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/copy_and_create',
            path: {
                'bot_id': botId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Edit bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @param requestBody 
     * @returns any Edit bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public patchVer1BotsBotIdUpdate(
botId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ver1/bots/{bot_id}/update',
            path: {
                'bot_id': botId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Disable bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @returns any Disable bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdDisable(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/disable',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Enable bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @returns any Enable bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdEnable(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/enable',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Start new deal asap (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @param requestBody 
     * @returns any Start new deal asap (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdStartNewDeal(
botId: number,
requestBody?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/start_new_deal',
            path: {
                'bot_id': botId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @returns any Delete bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdDelete(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/delete',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Panic sell all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @returns any Panic sell all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdPanicSellAllDeals(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/panic_sell_all_deals',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Cancel all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
     * @param botId 
     * @returns any Cancel all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1BotsBotIdCancelAllDeals(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/bots/{bot_id}/cancel_all_deals',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Bot deals stats (Permission: BOTS_READ, Security: SIGNED)
     * @param botId 
     * @returns any Bot deals stats (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1BotsBotIdDealsStats(
botId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/{bot_id}/deals_stats',
            path: {
                'bot_id': botId,
            },
        });
    }

    /**
     * Bot info (Permission: BOTS_READ, Security: SIGNED)
     * @param botId 
     * @param includeEvents 
     * @returns any Bot info (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1BotsBotIdShow(
botId: number,
includeEvents?: boolean,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/bots/{bot_id}/show',
            path: {
                'bot_id': botId,
            },
            query: {
                'include_events': includeEvents,
            },
        });
    }

}