/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Current User Mode (Paper or Real) (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @returns any Current User Mode (Paper or Real) (Permission: ACCOUNTS_READ, Security: SIGNED)
     * @throws ApiError
     */
    public getVer1UsersCurrentMode(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/users/current_mode',
        });
    }

    /**
     * Change User Mode (Paper or Real) (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @param requestBody 
     * @returns any Change User Mode (Paper or Real) (Permission: ACCOUNTS_WRITE, Security: SIGNED)
     * @throws ApiError
     */
    public postVer1UsersChangeMode(
requestBody: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ver1/users/change_mode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}