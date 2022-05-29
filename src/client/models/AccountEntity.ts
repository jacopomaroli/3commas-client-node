/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortfolioEntity } from './PortfolioEntity';

export type AccountEntity = {
    id?: number;
    auto_balance_period?: number;
    auto_balance_portfolio_id?: number | null;
    auto_balance_portfolio?: PortfolioEntity;
    auto_balance_currency_change_limit?: number | null;
    autobalance_enabled?: boolean;
    hedge_mode_available?: boolean;
    hedge_mode_enabled?: boolean;
    is_locked?: boolean;
    smart_trading_supported?: boolean;
    /**
     * DEPRECATED. use smart_trading_supported instead
     */
    smart_selling_supported?: boolean;
    available_for_trading?: any;
    stats_supported?: boolean;
    trading_supported?: boolean;
    market_buy_supported?: boolean;
    market_sell_supported?: boolean;
    conditional_buy_supported?: boolean;
    bots_allowed?: boolean;
    bots_ttp_allowed?: boolean;
    bots_tsl_allowed?: boolean;
    gordon_bots_available?: boolean;
    multi_bots_allowed?: boolean;
    created_at?: string;
    updated_at?: string;
    last_auto_balance?: string | null;
    /**
     * Sell all to USD/BTC possibility
     */
    fast_convert_available?: boolean;
    grid_bots_allowed?: boolean;
    api_key_invalid?: boolean;
    deposit_enabled?: boolean;
    supported_market_types?: Array<string>;
    api_key?: string;
    name?: string;
    /**
     * Values: time, currency_change
     */
    auto_balance_method?: number | null;
    auto_balance_error?: string | null;
    customer_id?: string | null;
    subaccount_name?: string | null;
    lock_reason?: string | null;
    btc_amount?: string;
    usd_amount?: string;
    day_profit_btc?: string;
    day_profit_usd?: string;
    day_profit_btc_percentage?: string;
    day_profit_usd_percentage?: string;
    /**
     * Month period
     */
    btc_profit?: string;
    /**
     * Month period
     */
    usd_profit?: string;
    /**
     * Month period
     */
    usd_profit_percentage?: string;
    /**
     * Month period
     */
    btc_profit_percentage?: string;
    total_btc_profit?: string;
    total_usd_profit?: string;
    pretty_display_type?: string;
    exchange_name?: string;
    market_code?: string;
    address?: string;
};