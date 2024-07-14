export default interface ProductEntity {
  description: string;
  stock: number;
  priceUnit: number;
  typeProduct: string;
  photo_link: string;
  active: boolean;
}

export interface IProductOrder {
  id: string;
  description: string;
  priceUnit: number;
  typeProduct: string;
  quant: number;
}

export interface IProductOrderInput {
  id: string;
  quant: number;
}