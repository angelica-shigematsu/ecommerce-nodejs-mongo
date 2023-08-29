export default interface OrderEntity {
  total: number;
  status: string;

  products: string[];

  user: string;

  numberCard?: number,
  fullNameCard?: string,
  cvv?: number,
  expiredDateCard?: Date,
  type: string;
}