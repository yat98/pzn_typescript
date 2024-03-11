export enum CustomerType {
	REGULAR = 'REGULAR',
	GOLD = 'GOLD',
	PLATINUM = 'PLATINUM'
}

export type Customer = {
  id: Number,
  name: String,
  type: CustomerType
}