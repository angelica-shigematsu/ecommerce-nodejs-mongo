// const mongoose = require('mongoose')
// const mongoURL= require('../config')
// const ProductModel =  require('../models/ProductModel')
import validationNumber from "../../validators/validationNumber";
import ListProductController from "../../controllers/ListProductController";

// const {expect,test, beforeAll, describe, afterAll, beforeEach, it} = require('@jest/globals');

describe('validations products', () => {
  it('should not able to validate price', () => {
    const price = '$12.B'
    const isNumber = validationNumber(price)

    expect(isNumber).toBeFalsy()
  })
})



// describe('insert', () => {
//   beforeAll(async () => {
//     if(!process.env.MONGO_URL) {
//       throw new Error('MOngoDB server not initialized')
//     }

//     await mongoose.connect(mongoURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   it('should able to insert a new product', async () => { 
//     const mockProduct = { 
//       description: 'Coelho',
//       stock: 3,
//       price: 38.0,
//       typeProduct: 'Arigurumi',
//       photo_link: 'https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
//     }

//     await ProductModel.create(mockProduct)

//     const product = await ProductModel.findOne({ description: mockProduct.description })

//     expect(mockProduct.description).toBe(product.description)
//   })
// })