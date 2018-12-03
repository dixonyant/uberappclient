export interface User {
  _id?:string,
  username:string,
  password:string
  userType:UserTypes
}

export enum UserTypes {
  Rider = <any> 'Rider',
  Admin = <any> 'Admin',
  Driver = <any> 'Driver'
}