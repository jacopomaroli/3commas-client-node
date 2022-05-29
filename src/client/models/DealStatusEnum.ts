/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Values: created, base_order_placed, bought, cancelled, completed, failed, panic_sell_pending, panic_sell_order_placed, panic_sold, cancel_pending, stop_loss_pending, stop_loss_finished, stop_loss_order_placed, switched, switched_take_profit, ttp_activated, ttp_order_placed, liquidated, bought_safety_pending, bought_take_profit_pending, settled
 */
export enum DealStatusEnum {
    CREATED = 'created',
    BASE_ORDER_PLACED = 'base_order_placed',
    BOUGHT = 'bought',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PANIC_SELL_PENDING = 'panic_sell_pending',
    PANIC_SELL_ORDER_PLACED = 'panic_sell_order_placed',
    PANIC_SOLD = 'panic_sold',
    CANCEL_PENDING = 'cancel_pending',
    STOP_LOSS_PENDING = 'stop_loss_pending',
    STOP_LOSS_FINISHED = 'stop_loss_finished',
    STOP_LOSS_ORDER_PLACED = 'stop_loss_order_placed',
    SWITCHED = 'switched',
    SWITCHED_TAKE_PROFIT = 'switched_take_profit',
    TTP_ACTIVATED = 'ttp_activated',
    TTP_ORDER_PLACED = 'ttp_order_placed',
    LIQUIDATED = 'liquidated',
    BOUGHT_SAFETY_PENDING = 'bought_safety_pending',
    BOUGHT_TAKE_PROFIT_PENDING = 'bought_take_profit_pending',
    SETTLED = 'settled',
}