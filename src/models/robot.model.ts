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

  readonly name: string

  constructor({ name, host, port, token }: RobotInitOptions){
    this.name = name
    this.host = host
    this.port = port
    this.token = token
  }

  get url(){
    return `http://${this.host}:${this.port}`
  }

  get authHeader(){
    return { Authorization: `Bearer ${this.token}` }
  }
}
