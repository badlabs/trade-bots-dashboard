export * from './robot.data-models'
export * from './robot.model'
export * from './robot.responses'

export type OrderDetails = {
  operation: OperationTypes
  ticker: string
  lots: number
  price: number
}

export enum OperationTypes {
  buy = 'buy',
  sell = 'sell',
  buyOrCancel = 'buy_or_cancel',
  sellOrCancel = 'sell_or_cancel'
}
