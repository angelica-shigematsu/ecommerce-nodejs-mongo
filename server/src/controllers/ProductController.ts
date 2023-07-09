import { Request, Response } from 'express';
import ProductEntity from '../type/Product';
import { isEmptyProduct } from '../validators/validationEmpty';
import isNumber from '../validators/validationNumber';

const ProductModel =  require('../models/ProductModel');

class ProductController {
    public async createProduct(req: Request, res: Response): Promise<Response> {
      try{

        const {  
          description, 
          stock,
          price,
          typeProduct,
          photo_link,
          active} = req.body as ProductEntity

        if (!isNumber(price) && !isNumber(stock)) throw new Error(`Price and stock need to be number`)
    
        const hasProduct = await ProductModel.findOne({ description })
    
        if (hasProduct) throw new Error(`Product already exists`)

        const product = {
          description, 
          stock,
          price,
          typeProduct,
          photo_link,
          active
        }

        if (isEmptyProduct(product)) throw new Error(`Field empty`);

        await ProductModel.create(product)
    
        return res.status(201).json({ message: `Product created successfully`})  
      }catch (error) {
        return res.status(400).json({ message: error.message})
      } 
    }

    async updateProduct(req: Request, res: Response): Promise<Response> {
      try {
        const { id } = req.params

        const {
          description, 
          stock,
          price,
          typeProduct,
          photo_link,
          active
        } = req.body as ProductEntity

        if (!isNumber(price) || !isNumber(stock)) throw new Error(`Price and stock need to be number`)

        const filter = { _id: id }

        const updateProduct = {
          description, 
          stock,
          price,
          typeProduct,
          photo_link,
          active
        }

        if (isEmptyProduct(updateProduct)) throw new Error(`Field empty`);

        await ProductModel.findOneAndUpdate(filter, updateProduct)

        return res.status(200).json({ message: `Update product successfully`})
      }catch (error) {
        return res.status(400).json({ message: error.message})
      } 
    }

    async deleteProduct(req: Request, res: Response): Promise<Response> {
      try {
          const { id } = req.params

          const product = await ProductModel.findOneAndDelete({ _id: id })

          if (!product) throw new Error(`Product not found`)

          return res.status(200).send({ message: `Delete product successfully` })
      }catch (error) {
        return res.status(400).json({ message: error.message})
      }
    }
  }
  
  export default new ProductController()