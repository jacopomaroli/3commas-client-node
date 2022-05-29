/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmartTradeV2Entity } from '../models/SmartTradeV2Entity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SmartTradesV2Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get smart trade history (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @param accountId 
     * @param pair 
     * @param type 
     * @param page 
     * @param perPage 
     * @param status 
     * @param orderBy 
     * @param orderDirection 
     * @param from Param for a filter by created date
     * @param base Base currency
     * @param quote Quote currency
     * @returns SmartTradeV2Entity Get smart trade history (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getV2SmartTrades(
accountId?: number,
pair?: string,
type?: 'simple_buy' | 'simple_sell' | 'smart_sell' | 'smart_trade' | 'smart_cover' | 'smart_buy',
page: number = 1,
perPage: number = 10,
status?: 'all' | 'active' | 'finished' | 'successfully_finished' | 'cancelled' | 'failed',
orderBy: 'created_at' | 'updated_at' | 'closed_at' | 'status' | 'profit' | 'profit_percentage' = 'status',
orderDirection: 'asc' | 'desc' = 'desc',
from?: string,
base?: string,
quote?: string,
): CancelablePromise<Array<SmartTradeV2Entity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/smart_trades',
            query: {
                'account_id': accountId,
                'pair': pair,
                'type': type,
                'page': page,
                'per_page': perPage,
                'status': status,
                'order_by': orderBy,
                'order_direction': orderDirection,
                'from': from,
                'base': base,
                'quote': quote,
            },
        });
    }

    /**
     * Create smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Create smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTrades(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get smart trade v2 by id (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @param id 
     * @returns SmartTradeV2Entity Get smart trade v2 by id (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getV2SmartTradesId(
id: number,
): CancelablePromise<SmartTradeV2Entity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/smart_trades/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Cancel smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public deleteV2SmartTradesId(
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/smart_trades/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns SmartTradeV2Entity Update smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public patchV2SmartTradesId(
id: number,
requestBody: any,
): CancelablePromise<SmartTradeV2Entity> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v2/smart_trades/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reduce funds for smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns any Reduce funds for smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdReduceFunds(
id: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/reduce_funds',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Average for smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns any Average for smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdAddFunds(
id: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/add_funds',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Close by market smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @returns any Close by market smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdCloseByMarket(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/close_by_market',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Force start smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @returns any Force start smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdForceStart(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/force_start',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Process smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @returns any Process smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdForceProcess(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/force_process',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Set note to smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns any Set note to smart trade v2 (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesIdSetNote(
id: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{id}/set_note',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get smart trade v2 trades (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @param smartTradeId 
     * @returns any Get smart trade v2 trades (Permission: SMART_TRADE_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getV2SmartTradesSmartTradeIdTrades(
smartTradeId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v2/smart_trades/{smart_trade_id}/trades',
            path: {
                'smart_trade_id': smartTradeId,
            },
        });
    }

    /**
     * Panic close trade by market (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param smartTradeId 
     * @param id 
     * @returns any Panic close trade by market (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postV2SmartTradesSmartTradeIdTradesIdCloseByMarket(
smartTradeId: number,
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market',
            path: {
                'smart_trade_id': smartTradeId,
                'id': id,
            },
        });
    }

    /**
     * Cancel trade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
     * @param smartTradeId 
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public deleteV2SmartTradesSmartTradeIdTradesId(
smartTradeId: number,
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v2/smart_trades/{smart_trade_id}/trades/{id}',
            path: {
                'smart_trade_id': smartTradeId,
                'id': id,
            },
        });
    }

}