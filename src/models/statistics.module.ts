import {TradeBot} from "src/models/robot.model";
import {BotState} from "src/models/state.module";

export class BotStatistics {
  private readonly _tradeBot: TradeBot

  constructor(tradeBot: TradeBot) {
    this._tradeBot = tradeBot
  }

  public get tradeBot(): TradeBot { return this._tradeBot }
  public get botState(): BotState { return this.tradeBot.state }

  public get portfolio() {
    const buyPriceAll = this.botState.portfolio
      .reduce((summ, position) => {
        return summ + (position.buy_price || 0)
      }, 0)
    const priceAll = this.botState.securities
      .reduce((summ, security) => {
        if (this.botState.portfolio.some(p => p.security_ticker === security.ticker))
          return summ + (security.price || 0)
        return summ
      }, 0)
    const diffAbs = Math.abs(buyPriceAll - priceAll)
    const diffPer = diffAbs / buyPriceAll
    return {
      buyPriceAll, priceAll,
      growth: priceAll > buyPriceAll,
      diffAbs,
      diffPer
    }
  }

}
