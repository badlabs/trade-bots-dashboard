/**
 * Model D_Currency
 *
 */
 export type D_Currency = {
  name: string
  ticker: string
}

/**
 * Model D_Security
 *
 */
export type D_Security = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model D_FollowedSecurity
 *
 */
export type D_FollowedSecurity = {
  security_ticker: string
  followed_since: Date
}

/**
 * Model D_PortfolioPosition
 *
 */
export type D_PortfolioPosition = {
  security_ticker: string
  amount: number
  buy_price: number | null
  buy_date: Date
}

/**
 * Model D_TransactionHistoryNote
 *
 */
export type D_TransactionHistoryNote = {
  security_ticker: string
  transaction_type: string
  amount: number
  price: number
  date: Date
}
