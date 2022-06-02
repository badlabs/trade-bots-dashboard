export type CheckAuthResponse = {
  status: 'Authorized' | 'Not Authorized'
  auth: boolean
}

export type AlgoInput = {
  [key: string]: AlgoInputType
}
export type AlgoInputType = 'OrderDetails' | 'number'
