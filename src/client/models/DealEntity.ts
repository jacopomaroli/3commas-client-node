/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DealStatusEnum } from './DealStatusEnum';
import type { LeverageTypeBitmex } from './LeverageTypeBitmex';
import type { OrderVolumeEnum } from './OrderVolumeEnum';
import type { Percentage } from './Percentage';
import type { ProfitCurrencyEnum } from './ProfitCurrencyEnum';
import type { QuoteBaseString } from './QuoteBaseString';
import type { StopLossType } from './StopLossType';
import type { StrategyType } from './StrategyType';
import type { StringFloatNegative } from './StringFloatNegative';
import type { StringFloatPositive } from './StringFloatPositive';
import type { SymbolString } from './SymbolString';
import type { TakeProfitType } from './TakeProfitType';

export type DealEntity = {
    id?: number;
    type?: DealEntity.type;
    bot_id?: number;
    max_safety_orders?: number;
    deal_has_error?: boolean;
    /**
     * DEPRECATED
     */
    from_currency_id?: number;
    /**
     * DEPRECATED
     */
    to_currency_id?: number;
    account_id?: number;
    active_safety_orders_count?: number;
    created_at?: string;
    updated_at?: string;
    closed_at?: string;
    'finished?'?: boolean;
    current_active_safety_orders_count?: number;
    /**
     * DEPRECATED
     */
    current_active_safety_orders?: number;
    /**
     * completed safeties (not including manual)
     */
    completed_safety_orders_count?: number;
    /**
     * completed manual safeties
     */
    completed_manual_safety_orders_count?: number;
    'cancellable?'?: boolean;
    'panic_sellable?'?: boolean;
    trailing_enabled?: boolean;
    tsl_enabled?: boolean;
    stop_loss_timeout_enabled?: boolean;
    stop_loss_timeout_in_seconds?: number;
    active_manual_safety_orders?: number;
    pair?: QuoteBaseString;
    status?: DealStatusEnum;
    localized_status?: string;
    take_profit?: Percentage;
    base_order_volume?: string;
    safety_order_volume?: string;
    safety_order_step_percentage?: string;
    leverage_type?: LeverageTypeBitmex;
    leverage_custom_value?: string;
    bought_amount?: string;
    bought_volume?: string;
    bought_average_price?: string;
    base_order_average_price?: string;
    sold_amount?: string;
    sold_volume?: StringFloatPositive;
    sold_average_price?: StringFloatNegative;
    take_profit_type?: TakeProfitType;
    final_profit?: StringFloatNegative;
    /**
     * Percentage
     */
    martingale_coefficient?: string;
    martingale_volume_coefficient?: Percentage;
    martingale_step_coefficient?: Percentage;
    stop_loss_percentage?: StringFloatNegative;
    error_message?: string;
    profit_currency?: ProfitCurrencyEnum;
    stop_loss_type?: StopLossType;
    safety_order_volume_type?: OrderVolumeEnum;
    base_order_volume_type?: OrderVolumeEnum;
    from_currency?: SymbolString;
    to_currency?: SymbolString;
    current_price?: string;
    take_profit_price?: string;
    stop_loss_price?: string;
    final_profit_percentage?: string;
    actual_profit_percentage?: string;
    bot_name?: string;
    account_name?: string;
    usd_final_profit?: string;
    actual_profit?: string;
    actual_usd_profit?: string;
    failed_message?: string;
    reserved_base_coin?: string;
    reserved_second_coin?: string;
    trailing_deviation?: string;
    /**
     * Highest price met in case of long deal, lowest price otherwise
     */
    trailing_max_price?: string;
    /**
     * Highest price met in TSL in case of long deal, lowest price otherwise
     */
    tsl_max_price?: string;
    strategy?: StrategyType;
    /**
     * Sum of reserved in active deals funds in QUOTE
     */
    reserved_quote_funds?: number;
    /**
     * Sum of reserved in active deals funds in BASE
     */
    reserved_base_funds?: number;
};

export namespace DealEntity {

    export enum type {
        DEAL_SHORT_DEAL = 'Deal::ShortDeal',
        DEAL = 'Deal',
    }


}