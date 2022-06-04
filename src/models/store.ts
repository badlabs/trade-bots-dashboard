import {Algorithm} from "@badlabs/trade-bot__db-types";
import {TradeBot} from "src/models/robot.model";

export type AlgorithmInStore = {
  algorithm: Algorithm,
  robots: TradeBot[]
}
