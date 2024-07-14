import ProductModel from "../models/ProductModel";

export class ProductService {
  static async findById(id: string) {
    return await ProductModel.findOne({ _id: id })
                              .select({
                                _id: 1,
                                description: 1,
                                priceUnit: 1,
                                typeProduct: 1
                              });
  }
}