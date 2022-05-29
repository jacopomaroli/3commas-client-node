/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MarketplaceBotEntity } from './MarketplaceBotEntity';

/**
 * Marketplace presets (Permission: NONE, Security: SIGNED)
 */
export type IndexEntity = {
    bots?: Array<MarketplaceBotEntity>;
    total?: number;
    page?: number;
};