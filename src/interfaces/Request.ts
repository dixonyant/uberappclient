export interface Request {
  _id?:string,
  eta?:string,
  pickup:string,
  destination:string,
  riderUID:string,
  driverUID?:string,
  time:string,
  status:Status
}

export enum Status {
  Requested = <any> 'Requested',
  InProgress = <any> 'InProgress',
  Completed = <any> 'Completed'
}