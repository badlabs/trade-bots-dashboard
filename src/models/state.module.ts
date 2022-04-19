import { TradeBot } from "src/models/robot.model";
import axios from "axios";
import {D_PortfolioPosition, D_Security} from "src/models/robot.data-models";
import {
  GetPortfolioResponse,
  GetSecuritiesResponse,
  UpdatePortfolioResponse,
  UpdateSecuritiesResponse
} from "src/models/robot.responses";

export class BotState {
  private readonly _tradeBot: TradeBot
  private _securities: D_Security[]
  private _portfolio: D_PortfolioPosition[]

  constructor(tradeBot: TradeBot) {
    this._tradeBot = tradeBot
    this._securities = []
    this._portfolio = []
  }

  public get tradeBot(): TradeBot { return this._tradeBot }
  public get securities(): D_Security[] { return this._securities }
  public get portfolio(): D_PortfolioPosition[] { return this._portfolio }

  public async getSecurities(): Promise<GetSecuritiesResponse> {
    const req = `${this.tradeBot.restUrl}/api/state/securities`
    const { data: freshSecurities }: { data: GetSecuritiesResponse } =
      await axios.get(req, { headers: this.tradeBot.authHeader })
    this._securities = freshSecurities
    return freshSecurities
  }

  public async updateSecurities(): Promise<UpdateSecuritiesResponse> {
    const req = `${this.tradeBot.restUrl}/api/state/securities`
    const { data: freshSecurities }: { data: UpdateSecuritiesResponse } =
      await axios.post(req,{}, { headers: this.tradeBot.authHeader })
    this._securities = freshSecurities
    return freshSecurities
  }

  public async getPortfolio(): Promise<GetPortfolioResponse> {
    const req = `${this.tradeBot.restUrl}/api/state/portfolio`
    const { data: freshPortfolio }: { data: GetPortfolioResponse } =
      await axios.get(req, { headers: this.tradeBot.authHeader })
    this._portfolio = freshPortfolio
    return freshPortfolio
  }

  public async updatePortfolio(): Promise<UpdatePortfolioResponse> {
    const req = `${this.tradeBot.restUrl}/api/state/portfolio`
    const { data: freshPortfolio }: { data: UpdatePortfolioResponse } =
      await axios.post(req,{}, { headers: this.tradeBot.authHeader })
    this._portfolio = freshPortfolio
    return freshPortfolio
  }
}
