/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortfolioEntryEntity } from './PortfolioEntryEntity';

export type PortfolioEntity = {
    name?: string;
    id?: string;
    created_at?: string;
    portfolio_entries?: PortfolioEntryEntity;
};