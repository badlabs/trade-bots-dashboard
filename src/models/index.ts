export * from './robot.model'
export * from './robot.responses'

export type OrderDetails = {
  operation: OperationType
  ticker: string
  lots: number
  price: number
}

export type OperationType = 'limit_buy' | 'market_buy' | 'limit_sell' | 'market_sell' | 'buy_or_cancel' | 'sell_or_cancel'

