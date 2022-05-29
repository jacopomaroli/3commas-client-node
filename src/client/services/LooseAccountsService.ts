/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LooseAccountsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Create Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1LooseAccounts(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/loose_accounts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Available currencies (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @param contains 
     * @param limit 
     * @param offset 
     * @returns any Available currencies (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1LooseAccountsAvailableCurrencies(
contains?: string,
limit?: number,
offset?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/loose_accounts/available_currencies',
            query: {
                'contains': contains,
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * Update Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param accountId 
     * @param requestBody 
     * @returns any Update Loose Account (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public putVer1LooseAccountsAccountId(
accountId: number,
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/ver1/loose_accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}