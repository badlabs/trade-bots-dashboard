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

  public readonly name: string

  constructor({ name, host, restPort, wsPort, token }: RobotInitOptions){
    this.name = name
    this._host = host
    this._restPort = restPort
    this._wsPort = wsPort
    this._token = token
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
}
