/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FormFieldType } from './FormFieldType';

export type MarketListItem = {
    market_name?: string;
    market_url?: string;
    market_icon?: string;
    help_link?: string;
    nomics_id?: string;
    market_code?: string;
    form_fields?: {
required?: Array<FormFieldType>;
optional?: Array<FormFieldType>;
};
    connection_type?: string;
};