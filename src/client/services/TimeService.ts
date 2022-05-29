/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimeEntity } from '../models/TimeEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TimeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Test connectivity to the Rest API and get the current server time (Permission: NONE, Security: NONE)
     * @returns TimeEntity Test connectivity to the Rest API and get the current server time (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1Time(): CancelablePromise<TimeEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/time',
        });
    }

}