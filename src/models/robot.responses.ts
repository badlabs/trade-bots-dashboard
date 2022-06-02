export type CheckAuthResponse = {
  status: 'Authorized' | 'Not Authorized'
  auth: boolean
}

export type AlgoInput = {
  name: string,
  type: AlgoInputType
}
export type AlgoInputType = 'OrderDetails' | 'number'
