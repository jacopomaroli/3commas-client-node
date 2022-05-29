/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BotType } from './BotType';
import type { LeverageType } from './LeverageType';
import type { OrderVolumeEnum } from './OrderVolumeEnum';
import type { Percentage } from './Percentage';
import type { ProfitCurrencyEnum } from './ProfitCurrencyEnum';
import type { QuoteBaseString } from './QuoteBaseString';
import type { StopLossType } from './StopLossType';
import type { StrategyType } from './StrategyType';
import type { TakeProfitType } from './TakeProfitType';

export type BotEntity = {
    id?: number;
    account_id?: number;
    is_enabled?: boolean;
    max_safety_orders?: number;
    active_safety_orders_count?: number;
    pairs?: Array<QuoteBaseString>;
    strategy_list?: string;
    max_active_deals?: number;
    active_deals_count?: number;
    'deletable?'?: boolean;
    created_at?: string;
    updated_at?: string;
    trailing_enabled?: boolean;
    tsl_enabled?: boolean;
    /**
     * Deal start delay in seconds
     */
    deal_start_delay_seconds?: number;
    stop_loss_timeout_enabled?: boolean;
    stop_loss_timeout_in_seconds?: number;
    disable_after_deals_count?: number;
    deals_counter?: number;
    allowed_deals_on_same_pair?: number;
    easy_form_supported?: boolean;
    /**
     * Close bot deals after given number of seconds
     */
    close_deals_timeout?: number;
    url_secret?: string;
    name?: string;
    take_profit?: Percentage;
    base_order_volume?: string;
    safety_order_volume?: string;
    safety_order_step_percentage?: string;
    take_profit_type?: TakeProfitType;
    type?: BotType;
    martingale_volume_coefficient?: string;
    martingale_step_coefficient?: string;
    stop_loss_percentage?: string;
    cooldown?: string;
    btc_price_limit?: string;
    strategy?: StrategyType;
    min_volume_btc_24h?: string;
    profit_currency?: ProfitCurrencyEnum;
    min_price?: string;
    max_price?: string;
    stop_loss_type?: StopLossType;
    safety_order_volume_type?: OrderVolumeEnum;
    base_order_volume_type?: OrderVolumeEnum;
    account_name?: string;
    trailing_deviation?: string;
    finished_deals_profit_usd?: string;
    finished_deals_count?: string;
    leverage_type?: LeverageType;
    leverage_custom_value?: string;
    /**
     * Values: limit, market
     */
    start_order_type?: string;
    /**
     * Sum of active deals profits
     */
    active_deals_usd_profit?: string;
};