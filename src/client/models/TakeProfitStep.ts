/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TakeProfitStep = {
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
value?: number;
value_without_commission?: number;
editable?: boolean;
};
total?: {
value?: number;
};
order_type?: string;
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
    note?: string;
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
liquidation_price?: number;
average_enter_price?: number;
average_close_price?: number;
average_enter_price_without_commission?: number;
average_close_price_without_commission?: number;
panic_sell_available?: boolean;
add_funds_available?: boolean;
force_start_available?: boolean;
force_process_available?: boolean;
cancel_available?: boolean;
finished?: boolean;
base_position_step_finished?: boolean;
created_at?: string;
updated_at?: string;
closed_at?: string;
type?: string;
};
    profit?: {
volume?: number;
usd?: number;
percent?: number;
roe?: number;
};
    margin?: {
amount?: number;
total?: number;
};
    is_position_not_filled?: boolean;
};