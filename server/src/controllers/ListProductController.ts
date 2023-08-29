import ProductModel from '../models/ProductModel';
import { Request, Response } from "express"

class ListProductController {

  public async getProductByType(req: Request, res: Response){
    try {
      const { typeProduct } = req.body

      const product = await ProductModel.find({typeProduct: typeProduct})

      return res.status(200).json(product)
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }
}

export default new ListProductController()