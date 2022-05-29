/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GridBotEntity } from '../models/GridBotEntity';
import type { GridBotProfitsEntity } from '../models/GridBotProfitsEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GridBotsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create AI Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns GridBotEntity Create AI Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1GridBotsAi(
requestBody: any,
): CancelablePromise<Array<GridBotEntity>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/grid_bots/ai',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Create Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1GridBotsManual(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/grid_bots/manual',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get AI settings (Permission: BOTS_READ, Security: SIGNED)
     * @param pair 
     * @param marketCode Market code from /accounts/market_list
     * @returns any Get AI settings (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBotsAiSettings(
pair: string,
marketCode: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots/ai_settings',
            query: {
                'pair': pair,
                'market_code': marketCode,
            },
        });
    }

    /**
     * Grid bots list (Permission: BOTS_READ, Security: SIGNED)
     * @param state Filter by bot state
     * @param sortBy Sort column
     * @param sortDirection Sort direction
     * @param limit 
     * @param offset 
     * @param from Param for a filter by created date
     * @param base Base currency
     * @param quote Quote currency
     * @param formData 
     * @returns any Grid bots list (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBots(
state?: 'enabled' | 'disabled',
sortBy?: 'current_profit' | 'profit' | 'bot_id' | 'pair' | 'created_at' | 'updated_at',
sortDirection?: 'desc' | 'asc',
limit: number = 10,
offset?: number,
from?: string,
base?: string,
quote?: string,
formData?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots',
            query: {
                'state': state,
                'sort_by': sortBy,
                'sort_direction': sortDirection,
                'limit': limit,
                'offset': offset,
                'from': from,
                'base': base,
                'quote': quote,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Grid Bot Market Orders (Permission: BOTS_READ, Security: SIGNED)
     * @param id 
     * @returns any Grid Bot Market Orders (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBotsIdMarketOrders(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots/{id}/market_orders',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Grid Bot Profits (Permission: BOTS_READ, Security: SIGNED)
     * @param id 
     * @returns GridBotProfitsEntity Grid Bot Profits (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBotsIdProfits(
id: number,
): CancelablePromise<GridBotProfitsEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots/{id}/profits',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Edit Grid Bot (AI) (Permission: BOTS_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns any Edit Grid Bot (AI) (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public patchVer1GridBotsIdAi(
id: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ver1/grid_bots/{id}/ai',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Edit Grid Bot (Manual) (Permission: BOTS_WRITE, Security: SIGNED)
     * @param id 
     * @param requestBody 
     * @returns any Edit Grid Bot (Manual) (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public patchVer1GridBotsIdManual(
id: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/ver1/grid_bots/{id}/manual',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Show Grid Bot (Permission: BOTS_READ, Security: SIGNED)
     * @param id 
     * @returns any Show Grid Bot (Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBotsId(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param id 
     * @returns void 
     * @throws ApiError
     */
    public deleteVer1GridBotsId(
id: number,
): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ver1/grid_bots/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Disable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param id 
     * @returns any Disable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1GridBotsIdDisable(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/grid_bots/{id}/disable',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Enable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @param id 
     * @returns any Enable Grid Bot (Permission: BOTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1GridBotsIdEnable(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/grid_bots/{id}/enable',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get required balances to start bot(Permission: BOTS_READ, Security: SIGNED)
     * @param id 
     * @returns any Get required balances to start bot(Permission: BOTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1GridBotsIdRequiredBalances(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/grid_bots/{id}/required_balances',
            path: {
                'id': id,
            },
        });
    }

}