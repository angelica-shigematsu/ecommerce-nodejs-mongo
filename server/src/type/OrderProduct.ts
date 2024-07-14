import { IProductOrder, IProductOrderInput } from "./Product";
import { IUserOrder } from "./User";

export interface OrderProductInput {

  products: IProductOrderInput[];

  userId: string;
}

export interface OrderProduct {
  products: IProductOrder[];
  user: IUserOrder;
}

