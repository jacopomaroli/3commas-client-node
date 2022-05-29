/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PongEntity } from '../models/PongEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Test connectivity to the Rest API (Permission: NONE, Security: NONE)
     * @returns PongEntity Test connectivity to the Rest API (Permission: NONE, Security: NONE)
     * @throws ApiError
     */
    public getVer1Ping(): CancelablePromise<PongEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ver1/ping',
        });
    }

}