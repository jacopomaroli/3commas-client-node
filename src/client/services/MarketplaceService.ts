/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndexEntity } from '../models/IndexEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MarketplaceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Marketplace presets (Permission: NONE, Security: SIGNED)
     * @param profitPerDayFrom 
     * @param profitPerDayTo 
     * @param profitPerMonthFrom 
     * @param profitPerMonthTo 
     * @param withAllMarketPairs 
     * @param daysRunningFrom 
     * @param daysRunningTo 
     * @param botType 
     * @param botStrategy 
     * @param cmc 
     * @param sortBy 
     * @param sortDirection 
     * @param page 
     * @param perPage 
     * @param formData 
     * @returns IndexEntity Marketplace presets (Permission: NONE, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1MarketplacePresets(
profitPerDayFrom?: number,
profitPerDayTo?: number,
profitPerMonthFrom?: number,
profitPerMonthTo?: number,
withAllMarketPairs?: boolean,
daysRunningFrom?: number,
daysRunningTo?: number,
botType?: string,
botStrategy?: string,
cmc?: string,
sortBy?: string,
sortDirection?: 'asc' | 'desc',
page: number = 1,
perPage?: number,
formData?: any,
): CancelablePromise<IndexEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/marketplace/presets',
            query: {
                'profit_per_day_from': profitPerDayFrom,
                'profit_per_day_to': profitPerDayTo,
                'profit_per_month_from': profitPerMonthFrom,
                'profit_per_month_to': profitPerMonthTo,
                'with_all_market_pairs': withAllMarketPairs,
                'days_running_from': daysRunningFrom,
                'days_running_to': daysRunningTo,
                'bot_type': botType,
                'bot_strategy': botStrategy,
                'cmc': cmc,
                'sort_by': sortBy,
                'sort_direction': sortDirection,
                'page': page,
                'per_page': perPage,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * All marketplace items (Permission: NONE, Security: NONE)
     * @param limit Limit records. Max: 1_000
     * @param offset Offset records
     * @param scope paid - show only paid signal providers. free - show only free signal providers
     * @param order 
     * @param locale 
     * @returns any All marketplace items (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1MarketplaceItems(
limit: number = 50,
offset?: number,
scope: 'all' | 'paid' | 'free' = 'all',
order: 'subscribers' | 'name' | 'newest' = 'newest',
locale: 'en' | 'ru' | 'zh' | 'zh-CN' | 'es' | 'pt' | 'ko' | 'fr' | 'cs' | 'tr' | 'de' = 'en',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/marketplace/items',
            query: {
                'limit': limit,
                'offset': offset,
                'scope': scope,
                'order': order,
                'locale': locale,
            },
        });
    }

    /**
     * Marketplace Item Signals (Permission: NONE, Security: NONE)
     * @param itemId 
     * @param limit Limit records. Max: 1_000
     * @param offset Offset records
     * @param order 
     * @param orderDirection 
     * @param locale 
     * @returns any Marketplace Item Signals (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1MarketplaceItemIdSignals(
itemId: number,
limit: number = 50,
offset?: number,
order: 'pair' | 'exchange' | 'signal_type' | 'date' = 'date',
orderDirection: 'asc' | 'desc' = 'desc',
locale: 'en' | 'ru' | 'zh' | 'zh-CN' | 'es' | 'pt' | 'ko' | 'fr' | 'cs' | 'tr' | 'de' = 'en',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/marketplace/{item_id}/signals',
            path: {
                'item_id': itemId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'order_direction': orderDirection,
                'locale': locale,
            },
        });
    }

}