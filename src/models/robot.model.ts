export type RobotInitOptions = {
  name: string
  host: string
  restPort: number
  wsPort: number
  token?: string
}

export class TradeBot {
  readonly _host: string
  readonly _restPort: number
  readonly _wsPort: number
  readonly _token?: string

  readonly name: string

  constructor({ name, host, restPort, wsPort, token }: RobotInitOptions){
    this.name = name
    this._host = host
    this._restPort = restPort
    this._wsPort = wsPort
    this._token = token
  }

  get restUrl(){
    return `http://${this._host}:${this._restPort}`
  }

  get wsUrl(){
    return `ws://${this._host}:${this._wsPort}`
  }

  get authHeader(){
    return { Authorization: `Bearer ${this._token}` }
  }
}
