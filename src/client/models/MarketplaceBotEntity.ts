/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MarketplaceItem } from './MarketplaceItem';
import type { Profit } from './Profit';

export type MarketplaceBotEntity = {
    id?: number;
    type?: string;
    name?: string;
    strategy?: string;
    secret?: string;
    marketplace_item?: MarketplaceItem;
    profit?: Profit;
    currencies?: Array<string>;
    /**
     * Bot's copies count
     */
    copies?: number;
    is_favorite?: boolean;
};