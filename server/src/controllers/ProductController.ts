import { Request, Response } from 'express';
import ProductEntity from '../type/Product';
import { isEmptyProduct } from '../validators/validationEmpty';

const ProductModel =  require('../models/ProductModel');

class ProductController {
    public async createProduct(req: Request, res: Response): Promise<Response> {
      const {  
        description, 
        stock,
        price,
        typeProduct,
        photo_link} = req.body as ProductEntity
  
      const hasProduct = await ProductModel.findOne({ description })
  
      if (hasProduct) return res.status(400).json({ message: `Product already exists`})

      const product = {
        description, 
        stock,
        price,
        typeProduct,
        photo_link
      }

      if (isEmptyProduct(product)) return res.status(400).json(`Field empty`);

      await ProductModel.create(product)
  
      return res.status(201).json({ message: `Product created successfully`})
      
    }
  }
  
  
  export default new ProductController()