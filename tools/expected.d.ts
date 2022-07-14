enum UnsubscribeCommand {
  UNSUBSCRIBE = 'unsubscribe',
}
interface Unsubscribe {
  identifier: string;
  command: UnsubscribeCommand;
}
enum Type {
  CONFIRM_SUBSCRIPTION = 'confirm_subscription',
}
enum DealMessageDecoratorDealMessageDecoratorProp {
  DEAL = 'Deal',
  SMART_TRADE = 'SmartTrade',
}
enum DealEntityType {
  DEAL_COLON_COLON_SHORT_DEAL = 'Deal::ShortDeal',
  DEAL = 'Deal',
}
enum DealStatusEnum {
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
type SmartTradeV2EntityTakeProfit = string | object;
interface TakeProfitStepAccount {
  id?: number;
  type?: string;
  name?: string;
  market?: string;
  link?: string;
}
interface TakeProfitStepStatus {
  type?: string;
  title?: string;
}
interface TakeProfitStepLeverage {
  enabled?: boolean;
  type?: string;
  value?: number;
}
interface TakeProfitStepPositionUnits {
  value?: string;
  editable?: boolean;
}
interface TakeProfitStepPositionPrice {
  value?: number;
  valueWithoutCommission?: number;
  editable?: boolean;
}
interface TakeProfitStepPositionTotal {
  value?: number;
}
interface TakeProfitStepPositionStatus {
  type?: string;
  title?: string;
}
interface TakeProfitStepPosition {
  type?: string;
  editable?: boolean;
  units?: TakeProfitStepPositionUnits;
  price?: TakeProfitStepPositionPrice;
  total?: TakeProfitStepPositionTotal;
  orderType?: string;
  status?: TakeProfitStepPositionStatus;
}
interface TakeProfitStepStopLoss {
  enabled?: boolean;
}
interface TakeProfitStepDataCurrentPrice {
  quoteVolume?: string;
  last?: string;
}
interface TakeProfitStepData {
  editable?: boolean;
  currentPrice?: TakeProfitStepDataCurrentPrice;
  targetPriceType?: string;
  baseOrderFinished?: boolean;
  missingFundsToClose?: number;
  liquidationPrice?: number;
  averageEnterPrice?: number;
  averageClosePrice?: number;
  averageEnterPriceWithoutCommission?: number;
  averageClosePriceWithoutCommission?: number;
  panicSellAvailable?: boolean;
  addFundsAvailable?: boolean;
  forceStartAvailable?: boolean;
  forceProcessAvailable?: boolean;
  cancelAvailable?: boolean;
  finished?: boolean;
  basePositionStepFinished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  type?: string;
}
interface TakeProfitStepProfit {
  volume?: number;
  usd?: number;
  percent?: number;
  roe?: number;
}
interface TakeProfitStepMargin {
  amount?: number;
  total?: number;
}
interface TakeProfitStep {
  id?: number;
  version?: number;
  account?: TakeProfitStepAccount;
  pair?: string;
  instant?: boolean;
  status?: TakeProfitStepStatus;
  leverage?: TakeProfitStepLeverage;
  position?: TakeProfitStepPosition;
  takeProfit?: TakeProfitStepTakeProfit;
  stopLoss?: TakeProfitStepStopLoss;
  note?: string;
  skipEnterStep?: boolean;
  data?: TakeProfitStepData;
  profit?: TakeProfitStepProfit;
  margin?: TakeProfitStepMargin;
  isPositionNotFilled?: boolean;
}
interface TakeProfitStepTakeProfit {
  enabled?: boolean;
  steps?: Array<TakeProfitStep>;
}
enum LeverageTypeBitmex {
  CUSTOM = 'custom',
  CROSS = 'cross',
  NOT_SPECIFIED = 'not_specified',
  ISOLATED = 'isolated',
}
enum TakeProfitType {
  BASE = 'base',
  TOTAL = 'total',
}
enum ProfitCurrencyEnum {
  QUOTE_CURRENCY = 'quote_currency',
  BASE_CURRENCY = 'base_currency',
}
enum StopLossType {
  STOP_LOSS = 'stop_loss',
  STOP_LOSS_AND_DISABLE_BOT = 'stop_loss_and_disable_bot',
}
enum OrderVolumeEnum {
  QUOTE_CURRENCY = 'quote_currency',
  BASE_CURRENCY = 'base_currency',
  PERCENT = 'percent',
  XBT = 'xbt',
}
enum StrategyType {
  SHORT = 'short',
  LONG = 'long',
}
enum SmartTradeMessageDecoratorSmartTradeMessageDecoratorProp {
  DEAL = 'Deal',
  SMART_TRADE = 'SmartTrade',
}
interface SmartTradeV2EntityAccount {
  id?: number;
  type?: string;
  name?: string;
  market?: string;
  link?: string;
}
interface SmartTradeV2EntityLeverage {
  enabled?: boolean;
  type?: string;
  value?: number;
}
interface SmartTradeV2EntityPositionUnits {
  value?: string;
  editable?: boolean;
}
interface SmartTradeV2EntityPositionPrice {
  value?: string;
  valueWithoutCommission?: string;
  editable?: boolean;
}
interface SmartTradeV2EntityPositionTotal {
  value?: string;
}
enum OrderType {
  MARKET = 'market',
  LIMIT = 'limit',
}
interface SmartTradeV2EntityPositionStatus {
  type?: string;
  title?: string;
}
interface SmartTradeV2EntityPosition {
  type?: string;
  editable?: boolean;
  units?: SmartTradeV2EntityPositionUnits;
  price?: SmartTradeV2EntityPositionPrice;
  total?: SmartTradeV2EntityPositionTotal;
  orderType?: OrderType;
  status?: SmartTradeV2EntityPositionStatus;
}
interface SmartTradeV2EntityStopLoss {
  enabled?: boolean;
}
interface ReduceFundsStepStatus {
  type?: string;
  title?: string;
  basicType?: string;
}
interface ReduceFundsStepUnits {
  value?: string;
}
interface ReduceFundsStepPrice {
  value?: string;
  valueWithoutCommission?: string;
}
interface ReduceFundsStepTotal {
  value?: string;
}
interface ReduceFundsStepFilled {
  units?: string;
  total?: string;
  price?: string;
  value?: string;
}
interface ReduceFundsStepData {
  cancelable?: boolean;
  panicSellAvailable?: boolean;
}
interface ReduceFundsStep {
  id?: number;
  type?: string;
  status?: ReduceFundsStepStatus;
  units?: ReduceFundsStepUnits;
  price?: ReduceFundsStepPrice;
  total?: ReduceFundsStepTotal;
  filled?: ReduceFundsStepFilled;
  data?: ReduceFundsStepData;
}
interface SmartTradeV2EntityReduceFunds {
  steps?: Array<ReduceFundsStep>;
}
interface SmartTradeV2EntityMarketCloseStatus {
  type?: string;
  title?: string;
  basicType?: string;
}
interface SmartTradeV2EntityMarketCloseUnits {
  value?: string;
}
interface SmartTradeV2EntityMarketClosePrice {
  value?: string;
  valueWithoutCommission?: string;
}
interface SmartTradeV2EntityMarketCloseTotal {
  value?: string;
}
interface SmartTradeV2EntityMarketCloseFilled {
  units?: string;
  total?: string;
  price?: string;
  value?: string;
}
interface SmartTradeV2EntityMarketClose {
  id?: number;
  type?: string;
  status?: SmartTradeV2EntityMarketCloseStatus;
  units?: SmartTradeV2EntityMarketCloseUnits;
  price?: SmartTradeV2EntityMarketClosePrice;
  total?: SmartTradeV2EntityMarketCloseTotal;
  filled?: SmartTradeV2EntityMarketCloseFilled;
}
interface SmartTradeV2EntityDataCurrentPrice {
  quoteVolume?: string;
  last?: string;
}
interface SmartTradeV2EntityData {
  editable?: boolean;
  currentPrice?: SmartTradeV2EntityDataCurrentPrice;
  targetPriceType?: string;
  baseOrderFinished?: boolean;
  missingFundsToClose?: number;
  liquidationPrice?: string;
  averageEnterPrice?: string;
  averageClosePrice?: string;
  averageEnterPriceWithoutCommission?: string;
  averageClosePriceWithoutCommission?: string;
  panicSellAvailable?: boolean;
  addFundsAvailable?: boolean;
  forceStartAvailable?: boolean;
  forceProcessAvailable?: boolean;
  cancelAvailable?: boolean;
  finished?: boolean;
  basePositionStepFinished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  type?: string;
}
interface SmartTradeV2EntityProfit {
  volume?: string;
  usd?: string;
  percent?: string;
  roe?: number;
}
interface SmartTradeV2EntityMargin {
  amount?: string;
  total?: string;
}
interface SubscriptionStatusMessage {
  dealMessageDecoratorProp?: DealMessageDecoratorDealMessageDecoratorProp;
  id?: number;
  type?: DealEntityType;
  botId?: number;
  maxSafetyOrders?: number;
  dealHasError?: boolean;
  fromCurrencyId?: number;
  toCurrencyId?: number;
  accountId?: number;
  activeSafetyOrdersCount?: number;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  finished?: boolean;
  currentActiveSafetyOrdersCount?: number;
  currentActiveSafetyOrders?: number;
  completedSafetyOrdersCount?: number;
  completedManualSafetyOrdersCount?: number;
  cancellable?: boolean;
  panicSellable?: boolean;
  trailingEnabled?: boolean;
  tslEnabled?: boolean;
  stopLossTimeoutEnabled?: boolean;
  stopLossTimeoutInSeconds?: number;
  activeManualSafetyOrders?: number;
  pair?: string;
  status?: DealStatusEnum;
  localizedStatus?: string;
  takeProfit?: SmartTradeV2EntityTakeProfit;
  baseOrderVolume?: string;
  safetyOrderVolume?: string;
  safetyOrderStepPercentage?: string;
  leverageType?: LeverageTypeBitmex;
  leverageCustomValue?: string;
  boughtAmount?: string;
  boughtVolume?: string;
  boughtAveragePrice?: string;
  baseOrderAveragePrice?: string;
  soldAmount?: string;
  soldVolume?: string;
  soldAveragePrice?: string;
  takeProfitType?: TakeProfitType;
  finalProfit?: string;
  martingaleCoefficient?: string;
  martingaleVolumeCoefficient?: SmartTradeV2EntityTakeProfit;
  martingaleStepCoefficient?: SmartTradeV2EntityTakeProfit;
  stopLossPercentage?: string;
  errorMessage?: string;
  profitCurrency?: ProfitCurrencyEnum;
  stopLossType?: StopLossType;
  safetyOrderVolumeType?: OrderVolumeEnum;
  baseOrderVolumeType?: OrderVolumeEnum;
  fromCurrency?: string;
  toCurrency?: string;
  currentPrice?: string;
  takeProfitPrice?: string;
  stopLossPrice?: string;
  finalProfitPercentage?: string;
  actualProfitPercentage?: string;
  botName?: string;
  accountName?: string;
  usdFinalProfit?: string;
  actualProfit?: string;
  actualUsdProfit?: string;
  failedMessage?: string;
  reservedBaseCoin?: string;
  reservedSecondCoin?: string;
  trailingDeviation?: string;
  trailingMaxPrice?: string;
  tslMaxPrice?: string;
  strategy?: StrategyType;
  reservedQuoteFunds?: number;
  reservedBaseFunds?: number;
  smartTradeMessageDecoratorProp?: SmartTradeMessageDecoratorSmartTradeMessageDecoratorProp;
  version?: number;
  account?: SmartTradeV2EntityAccount;
  instant?: boolean;
  leverage?: SmartTradeV2EntityLeverage;
  position?: SmartTradeV2EntityPosition;
  stopLoss?: SmartTradeV2EntityStopLoss;
  reduceFunds?: SmartTradeV2EntityReduceFunds;
  marketClose?: SmartTradeV2EntityMarketClose;
  note?: string;
  noteRaw?: string;
  skipEnterStep?: boolean;
  data?: SmartTradeV2EntityData;
  profit?: SmartTradeV2EntityProfit;
  margin?: SmartTradeV2EntityMargin;
  isPositionNotFilled?: boolean;
}
interface SubscriptionStatus {
  identifier: string;
  type?: Type;
  message?: SubscriptionStatusMessage;
}
interface TestMessage {
  dealMessageDecoratorProp?: DealMessageDecoratorDealMessageDecoratorProp;
  id?: number;
  type?: DealEntityType;
  botId?: number;
  maxSafetyOrders?: number;
  dealHasError?: boolean;
  fromCurrencyId?: number;
  toCurrencyId?: number;
  accountId?: number;
  activeSafetyOrdersCount?: number;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  finished?: boolean;
  currentActiveSafetyOrdersCount?: number;
  currentActiveSafetyOrders?: number;
  completedSafetyOrdersCount?: number;
  completedManualSafetyOrdersCount?: number;
  cancellable?: boolean;
  panicSellable?: boolean;
  trailingEnabled?: boolean;
  tslEnabled?: boolean;
  stopLossTimeoutEnabled?: boolean;
  stopLossTimeoutInSeconds?: number;
  activeManualSafetyOrders?: number;
  pair?: string;
  status?: DealStatusEnum;
  localizedStatus?: string;
  takeProfit?: SmartTradeV2EntityTakeProfit;
  baseOrderVolume?: string;
  safetyOrderVolume?: string;
  safetyOrderStepPercentage?: string;
  leverageType?: LeverageTypeBitmex;
  leverageCustomValue?: string;
  boughtAmount?: string;
  boughtVolume?: string;
  boughtAveragePrice?: string;
  baseOrderAveragePrice?: string;
  soldAmount?: string;
  soldVolume?: string;
  soldAveragePrice?: string;
  takeProfitType?: TakeProfitType;
  finalProfit?: string;
  martingaleCoefficient?: string;
  martingaleVolumeCoefficient?: SmartTradeV2EntityTakeProfit;
  martingaleStepCoefficient?: SmartTradeV2EntityTakeProfit;
  stopLossPercentage?: string;
  errorMessage?: string;
  profitCurrency?: ProfitCurrencyEnum;
  stopLossType?: StopLossType;
  safetyOrderVolumeType?: OrderVolumeEnum;
  baseOrderVolumeType?: OrderVolumeEnum;
  fromCurrency?: string;
  toCurrency?: string;
  currentPrice?: string;
  takeProfitPrice?: string;
  stopLossPrice?: string;
  finalProfitPercentage?: string;
  actualProfitPercentage?: string;
  botName?: string;
  accountName?: string;
  usdFinalProfit?: string;
  actualProfit?: string;
  actualUsdProfit?: string;
  failedMessage?: string;
  reservedBaseCoin?: string;
  reservedSecondCoin?: string;
  trailingDeviation?: string;
  trailingMaxPrice?: string;
  tslMaxPrice?: string;
  strategy?: StrategyType;
  reservedQuoteFunds?: number;
  reservedBaseFunds?: number;
  smartTradeMessageDecoratorProp?: SmartTradeMessageDecoratorSmartTradeMessageDecoratorProp;
  version?: number;
  account?: SmartTradeV2EntityAccount;
  instant?: boolean;
  leverage?: SmartTradeV2EntityLeverage;
  position?: SmartTradeV2EntityPosition;
  stopLoss?: SmartTradeV2EntityStopLoss;
  reduceFunds?: SmartTradeV2EntityReduceFunds;
  marketClose?: SmartTradeV2EntityMarketClose;
  note?: string;
  noteRaw?: string;
  skipEnterStep?: boolean;
  data?: SmartTradeV2EntityData;
  profit?: SmartTradeV2EntityProfit;
  margin?: SmartTradeV2EntityMargin;
  isPositionNotFilled?: boolean;
}
enum SubscribeCommand {
  SUBSCRIBE = 'subscribe',
}
interface Subscribe {
  identifier: string;
  command: SubscribeCommand;
}
