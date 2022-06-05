export type RobotInitOptions = {
  name: string
  host: string
  port: number
  token?: string
}

export class TradeBot {
  readonly host: string
  readonly port: number
  readonly token?: string

  name: string
  status: 'Disconnected' | 'Active' | 'Not Authorized' = 'Disconnected'

  constructor({ name, host, port, token }: RobotInitOptions){
    this.name = name
    this.host = host
    this.port = port
    this.token = token
  }

  static notFound(): TradeBot{
    return new TradeBot({name: '[System] Not Found', host: '', port: 0, token: ''})
  }

  get url(){
    return `http://${this.host}:${this.port}`
  }

  get authHeader(){
    return { Authorization: `Bearer ${this.token}` }
  }

  toExport(): RobotInitOptions{
    return {
      name: this.name,
      host: this.host,
      port: this.port,
      token: this.token
    }
  }
}
