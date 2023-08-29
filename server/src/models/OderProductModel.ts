import { Schema, model } from 'mongoose'

const OrderProductModel = new Schema({
  productId: {
    type: String,
    ref: 'Product'
  },
  quantity: Number
},{
    timestamps: true
  }
)

export default model('OrderProduct', OrderProductModel)