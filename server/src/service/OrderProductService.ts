import OrderModel from "../models/OrderModel";
import { IProductOrder, IProductOrderInput } from "../type/Product";
import { ProductService } from "./ProductService";
import { UserService } from "./UserService";

export class OrderProductService {

  private productService: ProductService = new ProductService;

  private userService: UserService = new UserService;

  static async createOrder(productsInput: IProductOrderInput[], userId: string) {
  
    // const products = await OrderProductService.verifyHasProducts(productsInput);

    const user = await UserService.findById(userId);

    const order = {
      products: productsInput,
      user: user
    }

    return await OrderModel.create(order);
  }

  // private static async verifyHasProducts(products: IProductOrderInput[]): Promise<IProductOrder[]> {
  //   const productsOrder: any = [];

  //   if (products.length == 0) throw new Error('At least one product is required');

  //   console.log(products)

  //   for (const product of products) {

  //     const hasProduct = await ProductService.findById(product.id)

  //     if (!hasProduct) throw new Error('Product not found')
  //     const productData: any = {
  //       ...hasProduct,
  //       quant: product.quant
  //     }

  //     productsOrder.push(productData);
  //   }
    
  //   return productsOrder;
  // }
}

