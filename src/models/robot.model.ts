import {BotState} from "src/models/state.module";
import {BotStatistics} from "src/models/statistics.module";

export type RobotInitOptions = {
  name: string
  host: string
  restPort: number
  wsPort: number
  token?: string
}

export class TradeBot {
  private readonly _host: string
  private readonly _restPort: number
  private readonly _wsPort: number
  private readonly _token?: string
  private readonly _state: BotState
  private readonly _statistics: BotStatistics

  public readonly name: string

  constructor({ name, host, restPort, wsPort, token }: RobotInitOptions){
    this.name = name
    this._host = host
    this._restPort = restPort
    this._wsPort = wsPort
    this._token = token
    this._state = new BotState(this)
    this._statistics = new BotStatistics(this)
  }

  public get restUrl(){
    return `http://${this._host}:${this._restPort}`
  }

  public get wsUrl(){
    return `ws://${this._host}:${this._wsPort}`
  }

  public get authHeader(){
    return { Authorization: `Bearer ${this._token}` }
  }

  public get state(): BotState { return this._state }
  public get statistics(): BotStatistics { return this._statistics }
}
