/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GridLineEntity } from './GridLineEntity';
import type { LeverageType } from './LeverageType';

export type GridBotEntity = {
    id?: number;
    account_id?: number;
    account_name?: string;
    is_enabled?: boolean;
    grids_quantity?: string;
    created_at?: string;
    updated_at?: string;
    strategy_type?: string;
    upper_stop_loss_enabled?: boolean;
    lower_stop_loss_enabled?: boolean;
    lower_price?: string;
    lower_stop_loss_price?: string;
    lower_stop_loss_action?: string;
    upper_price?: string;
    upper_stop_loss_price?: string;
    upper_stop_loss_action?: string;
    quantity_per_grid?: string;
    leverage_type?: LeverageType;
    leverage_custom_value?: string;
    name?: string;
    pair?: string;
    start_price?: string;
    grid_price_step?: string;
    current_profit?: string;
    current_profit_usd?: string;
    total_profits_count?: string;
    bought_volume?: string;
    sold_volume?: string;
    profit_percentage?: string;
    current_price?: string;
    investment_base_currency?: string;
    investment_quote_currency?: string;
    grid_lines?: GridLineEntity;
};