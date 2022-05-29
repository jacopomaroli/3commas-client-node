/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderType } from './OrderType';
import type { ReduceFundsStep } from './ReduceFundsStep';
import type { TakeProfitStep } from './TakeProfitStep';

export type SmartTradeV2Entity = {
    id?: number;
    version?: number;
    account?: {
id?: number;
type?: string;
name?: string;
market?: string;
link?: string;
};
    pair?: string;
    instant?: boolean;
    status?: {
type?: string;
title?: string;
};
    leverage?: {
enabled?: boolean;
type?: string;
value?: number;
};
    position?: {
type?: string;
editable?: boolean;
units?: {
value?: string;
editable?: boolean;
};
price?: {
value?: string;
value_without_commission?: string;
editable?: boolean;
};
total?: {
value?: string;
};
order_type?: OrderType;
status?: {
type?: string;
title?: string;
};
};
    take_profit?: {
enabled?: boolean;
steps?: Array<TakeProfitStep>;
};
    stop_loss?: {
enabled?: boolean;
};
    reduce_funds?: {
steps?: Array<ReduceFundsStep>;
};
    market_close?: {
id?: number;
type?: string;
status?: {
type?: string;
title?: string;
basic_type?: string;
};
units?: {
value?: string;
};
price?: {
value?: string;
value_without_commission?: string;
};
total?: {
value?: string;
};
filled?: {
units?: string;
total?: string;
price?: string;
value?: string;
};
};
    note?: string;
    note_raw?: string;
    skip_enter_step?: boolean;
    data?: {
editable?: boolean;
current_price?: {
quote_volume?: string;
last?: string;
};
target_price_type?: string;
base_order_finished?: boolean;
missing_funds_to_close?: number;
liquidation_price?: string | null;
average_enter_price?: string | null;
average_close_price?: string | null;
average_enter_price_without_commission?: string | null;
average_close_price_without_commission?: string | null;
panic_sell_available?: boolean;
add_funds_available?: boolean;
force_start_available?: boolean;
force_process_available?: boolean;
cancel_available?: boolean;
finished?: boolean;
base_position_step_finished?: boolean;
created_at?: string;
updated_at?: string;
closed_at?: string | null;
type?: string;
};
    profit?: {
volume?: string;
usd?: string;
percent?: string;
roe?: number | null;
};
    margin?: {
amount?: string | null;
total?: string | null;
};
    is_position_not_filled?: boolean;
};