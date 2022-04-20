export * from './robot.data-models'
export * from './robot.model'
export * from './robot.responses'

export type OrderDetails = {
  operation: OperationType
  ticker: string
  lots: number
  price: number
}

export type OperationType = 'buy' | 'sell' | 'buy_or_cancel' | 'sell_or_cancel'

