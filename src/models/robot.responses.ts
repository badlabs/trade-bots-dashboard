import {OrderDetails} from "src/models/index";

export type CheckAuthResponse = {
  status: 'Authorized' | 'Not Authorized'
  auth: boolean
}

export type AlgoInput = {
  [key: string]: AlgoInputTypeName
}
export type AlgoInputTypeName = 'OrderDetails' | 'number' | 'string' | 'Date'
export type AlgoInputType = OrderDetails | number | string | Date
