import { Request, Response } from 'express';
import OrderModel from "../models/OrderModel";
import OrderEntity from "../type/Order";

class OrderController {
  public async createOrder(req: Request, res: Response) {
    try {
      const { total, status, products, user, 
          numberCard, 
          fullNameCard,
          cvv,
          expiredDateCard,
          type
        } = req.body as OrderEntity

        const order = {
          total, 
          status, 
          products, 
          user, 
          numberCard: numberCard || undefined, 
          fullNameCard: fullNameCard || undefined, 
          cvv: cvv || undefined,
          expiredDateCard: expiredDateCard || undefined,
          type
        }

      await OrderModel.create(order)
      
      res.status(201).json({ message: `Create user successfully`})

    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message})
      }
      return res.status(400).json({ message: error })
    }
  }
}

export default new OrderController();