/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DealEntity } from '../models/DealEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DealsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * User deals (Permission: BOTS_READ, Security: SIGNED)
     * @param limit Limit records. Max: 1_000
     * @param offset Offset records
     * @param from Param for a filter by created date
     * @param accountId Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
     * @param botId Bot show deals on. Return all if not specified
     * @param scope active - active deals, finished - finished deals, completed - successfully completed, cancelled - cancelled deals, failed - failed deals, any other value or null (default) - all deals
     * @param order 
     * @param orderDirection 
     * @param base Base currency
     * @param quote Quote currency
     * @returns DealEntity User deals (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1Deals(
limit: number = 50,
offset?: number,
from?: string,
accountId?: number,
botId?: number,
scope?: string,
order: 'created_at' | 'updated_at' | 'closed_at' | 'profit' | 'profit_percentage' = 'created_at',
orderDirection: 'asc' | 'desc' = 'desc',
base?: string,
quote?: string,
): CancelablePromise<Array<DealEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/deals',
            query: {
                'limit': limit,
                'offset': offset,
                'from': from,
                'account_id': accountId,
                'bot_id': botId,
                'scope': scope,
                'order': order,
                'order_direction': orderDirection,
                'base': base,
                'quote': quote,
            },
        });
    }

    /**
     * Convert to smart trade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns any Convert to smart trade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdConvertToSmartTrade(
dealId: number,
requestBody?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/convert_to_smart_trade',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update max safety orders (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns any Update max safety orders (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdUpdateMaxSafetyOrders(
dealId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/update_max_safety_orders',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Panic sell deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @returns any Panic sell deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdPanicSell(
dealId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/panic_sell',
            path: {
                'deal_id': dealId,
            },
        });
    }

    /**
     * Cancel deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @returns any Cancel deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdCancel(
dealId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/cancel',
            path: {
                'deal_id': dealId,
            },
        });
    }

    /**
     * Update deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns DealEntity Update deal (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public patchVer1DealsDealIdUpdateDeal(
dealId: number,
requestBody?: any,
): CancelablePromise<DealEntity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ver1/deals/{deal_id}/update_deal',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * DEPRECATED, Update take profit condition. Deal status should be bought (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns any DEPRECATED, Update take profit condition. Deal status should be bought (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdUpdateTp(
dealId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/update_tp',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Info about specific deal (Permission: BOTS_READ, Security: SIGNED)
     * @param dealId 
     * @returns DealEntity Info about specific deal (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1DealsDealIdShow(
dealId: number,
): CancelablePromise<DealEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/deals/{deal_id}/show',
            path: {
                'deal_id': dealId,
            },
        });
    }

    /**
     * Cancel manual safety orders (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns any Cancel manual safety orders (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdCancelOrder(
dealId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/cancel_order',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deal safety orders (Permission: BOTS_READ, Security: SIGNED)
     * @param dealId 
     * @returns any Deal safety orders (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1DealsDealIdMarketOrders(
dealId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/deals/{deal_id}/market_orders',
            path: {
                'deal_id': dealId,
            },
        });
    }

    /**
     * Adding manual safety order (Permission: BOTS_WRITE, Security: SIGNED)
     * @param dealId 
     * @param requestBody 
     * @returns any Adding manual safety order (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1DealsDealIdAddFunds(
dealId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/deals/{deal_id}/add_funds',
            path: {
                'deal_id': dealId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Info required to add funds correctly: available amounts, exchange limitations etc  (Permission: BOTS_READ, Security: SIGNED)
     * @param dealId 
     * @returns any Info required to add funds correctly: available amounts, exchange limitations etc  (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1DealsDealIdDataForAddingFunds(
dealId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/deals/{deal_id}/data_for_adding_funds',
            path: {
                'deal_id': dealId,
            },
        });
    }

}