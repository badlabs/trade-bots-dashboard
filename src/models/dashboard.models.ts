export class TradeBot {
  private readonly _host: string
  private readonly _restPort: number
  private readonly _wsPort: number
  private _token: string

  constructor({ host, restPort, wsPort, token }: { host: string, restPort: number, wsPort: number, token: string }){
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
