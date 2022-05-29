/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReduceFundsStep = {
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
    data?: {
cancelable?: boolean;
panic_sell_available?: boolean;
};
};