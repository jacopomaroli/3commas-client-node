/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountEntity } from '../models/AccountEntity';
import type { MarketListItem } from '../models/MarketListItem';
import type { QuoteBaseString } from '../models/QuoteBaseString';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Transfer coins between accounts (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Transfer coins between accounts (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsTransfer(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/transfer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Transfers history (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId Sender or Recipient account ID (possible values in /transfer_data)
     * @param currency Currency code(example: USDT)
     * @param page Page number
     * @param perPage Elements per page
     * @returns any Transfers history (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsTransferHistory(
accountId: number,
currency: string,
page: number = 1,
perPage: number = 10,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/transfer_history',
            query: {
                'account_id': accountId,
                'currency': currency,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Data for transfer between accounts (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @returns any Data for transfer between accounts (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsTransferData(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/transfer_data',
        });
    }

    /**
     * Add exchange account  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns AccountEntity Add exchange account  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsNew(
requestBody: any,
): CancelablePromise<AccountEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/new',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Edit exchange account
     * @param requestBody 
     * @returns AccountEntity Edit exchange account
     * @throws ApiError
     */
    public postVer1AccountsUpdate(
requestBody: any,
): CancelablePromise<AccountEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * User connected exchanges(and EthereumWallet) list (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param page 
     * @param perPage Page size, from 1 to 100
     * @returns AccountEntity User connected exchanges(and EthereumWallet) list (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1Accounts(
page?: number,
perPage?: number,
): CancelablePromise<Array<AccountEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts',
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * Supported markets list (Permission: NONE, Security: NONE)
     * @returns MarketListItem Supported markets list (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1AccountsMarketList(): CancelablePromise<Array<MarketListItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/market_list',
        });
    }

    /**
     * All market pairs (Permission: NONE, Security: NONE)
     * @param prettyDisplayType deprecated. mandatory use market_code instead
     * @param marketCode market_code from account model
     * @returns QuoteBaseString All market pairs (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1AccountsMarketPairs(
prettyDisplayType?: string,
marketCode?: string,
): CancelablePromise<Array<QuoteBaseString>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/market_pairs',
            query: {
                'pretty_display_type': prettyDisplayType,
                'market_code': marketCode,
            },
        });
    }

    /**
     * Currency rates and limits with leverage data (Permission: NONE, Security: NONE)
     * @param marketCode market_code from account model
     * @param pair Pair
     * @returns any Currency rates and limits with leverage data (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1AccountsCurrencyRatesWithLeverageData(
marketCode: string,
pair: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/currency_rates_with_leverage_data',
            query: {
                'market_code': marketCode,
                'pair': pair,
            },
        });
    }

    /**
     * Currency rates and limits (Permission: NONE, Security: NONE)
     * @param pair Pair
     * @param limitType Type of limits - bot or smart_trade
     * @param prettyDisplayType deprecated. use market_code instead
     * @param marketCode market_code from account model. If you are retrieving data for pairs, you must also include market_code
     * @returns any Currency rates and limits (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1AccountsCurrencyRates(
pair: string,
limitType?: string,
prettyDisplayType?: string,
marketCode?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/currency_rates',
            query: {
                'limit_type': limitType,
                'pretty_display_type': prettyDisplayType,
                'market_code': marketCode,
                'pair': pair,
            },
        });
    }

    /**
     * User Deposit Data (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param currency 
     * @param network 
     * @param accountId 
     * @returns any User Deposit Data (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsAccountIdDepositData(
currency: string,
network: string,
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}/deposit_data',
            path: {
                'account_id': accountId,
            },
            query: {
                'currency': currency,
                'network': network,
            },
        });
    }

    /**
     * Deposit/withdraw networks info (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId 
     * @param purpose Filter currencies with deposit/withdraw enabled
     * @returns any Deposit/withdraw networks info (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsAccountIdNetworksInfo(
accountId: number,
purpose?: 'deposit' | 'withdraw',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}/networks_info',
            path: {
                'account_id': accountId,
            },
            query: {
                'purpose': purpose,
            },
        });
    }

    /**
     * Convert dust coins to BNB (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @param requestBody 
     * @returns any Convert dust coins to BNB (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdConvertDustToBnb(
accountId: number,
requestBody?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/convert_dust_to_bnb',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Active trade entities (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId 
     * @returns any Active trade entities (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsAccountIdActiveTradingEntities(
accountId: number,
): CancelablePromise<{
data?: {
active_bots_count?: number;
active_deals_count?: number;
active_smart_trades_count?: number;
active_grid_bots_count?: number;
};
}> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}/active_trading_entities',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Sell all to USD  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @returns any Sell all to USD  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdSellAllToUsd(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/sell_all_to_usd',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Sell all to BTC  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @returns any Sell all to BTC  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdSellAllToBtc(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/sell_all_to_btc',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * balance history data (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param dateFrom 
     * @param accountId 
     * @param dateTo 
     * @returns any balance history data (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsAccountIdBalanceChartData(
dateFrom: string,
accountId: number,
dateTo?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}/balance_chart_data',
            path: {
                'account_id': accountId,
            },
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
            },
        });
    }

    /**
     * Load balances for specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId 
     * @returns any Load balances for specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdLoadBalances(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/load_balances',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Rename exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @param requestBody 
     * @returns any Rename exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdRename(
accountId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/rename',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Information about all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId 
     * @returns any Information about all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdPieChartData(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/pie_chart_data',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Information about all user balances on specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param accountId 
     * @returns any Information about all user balances on specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdAccountTableData(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/account_table_data',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @returns any Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1AccountsAccountIdRemove(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/accounts/{account_id}/remove',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * Information about account leverage (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param pair 
     * @param accountId 
     * @returns any Information about account leverage (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1AccountsAccountIdLeverageData(
pair: string,
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}/leverage_data',
            path: {
                'account_id': accountId,
            },
            query: {
                'pair': pair,
            },
        });
    }

    /**
     * Single Account Info (Permission: ACCOUNTS_READ, Security: SIGNED)
 * You can send 'summary' instead of {account_id} to get summary account info
     * @param accountId 
     * @returns any Single Account Info (Permission: ACCOUNTS_READ, Security: SIGNED)
 * You can send 'summary' instead of {account_id} to get summary account info
     * @throws ApiError
     */
    public getVer1AccountsAccountId(
accountId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
        });
    }

}