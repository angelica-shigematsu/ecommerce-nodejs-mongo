import { Request, Response } from 'express';
import { IProductOrder } from "../type/Product";
import { OrderProductService } from '../service/OrderProductService';

export class OrderProductController {

  static async createOrder(req: Request, res: Response): Promise<Response> {

      const products = {
        ...req.body.products
      } as IProductOrder[] 

      const userId = req.params.id

      const order = await OrderProductService.createOrder(products, userId);

      return res.status(201).json({ order: order });
   
  }

}