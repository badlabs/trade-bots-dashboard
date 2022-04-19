import { D_Currency, D_PortfolioPosition, D_Security } from "./robot.models"

export type CheckAuthResponse = {
  status: 'Authorized' | 'Not Authorized'
  auth: boolean
}

export type GetPortfolioResponse = D_PortfolioPosition[]
export type UpdatePortfolioResponse = D_PortfolioPosition[]
export type GetCurrenciesResponse = D_Currency[]
export type UpdateCurrenciesResponse = D_Currency[]
export type GetSecuritiesResponse = D_Security[]
export type UpdateSecuritiesResponse = D_Security[]
