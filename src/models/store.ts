import {Algorithm} from "@badlabs/trade-bot__db-types";
import {TradeBot} from "src/models/robot.model";
import {OperationType} from "src/models/index";

export type AlgorithmInStore = {
  algorithm: Algorithm,
  robots: TradeBot[]
}

export type GetOrdersOptions = {
  from?: Date,
  to?: Date,
  securityTicker?: string,
  operation?: OperationType,
  runId?: number
}
