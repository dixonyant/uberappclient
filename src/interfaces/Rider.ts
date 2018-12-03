export interface Rider {
  _id?:string,
  userId:string,
  firstName:string,
  lastName:string,
  card:Card
}

export interface Card {
  vendor:string,
  cardNumber:string,
  ccv:number,
  expDate:string
}