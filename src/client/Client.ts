/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { AccountsService } from './services/AccountsService';
import { BotsService } from './services/BotsService';
import { DealsService } from './services/DealsService';
import { GridBotsService } from './services/GridBotsService';
import { LooseAccountsService } from './services/LooseAccountsService';
import { MarketplaceService } from './services/MarketplaceService';
import { PingService } from './services/PingService';
import { SmartTradesV2Service } from './services/SmartTradesV2Service';
import { TimeService } from './services/TimeService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Client {

    public readonly accounts: AccountsService;
    public readonly bots: BotsService;
    public readonly deals: DealsService;
    public readonly gridBots: GridBotsService;
    public readonly looseAccounts: LooseAccountsService;
    public readonly marketplace: MarketplaceService;
    public readonly ping: PingService;
    public readonly smartTradesV2: SmartTradesV2Service;
    public readonly time: TimeService;
    public readonly users: UsersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = NodeHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.3commas.io/public/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accounts = new AccountsService(this.request);
        this.bots = new BotsService(this.request);
        this.deals = new DealsService(this.request);
        this.gridBots = new GridBotsService(this.request);
        this.looseAccounts = new LooseAccountsService(this.request);
        this.marketplace = new MarketplaceService(this.request);
        this.ping = new PingService(this.request);
        this.smartTradesV2 = new SmartTradesV2Service(this.request);
        this.time = new TimeService(this.request);
        this.users = new UsersService(this.request);
    }
}