import { Schema, model } from 'mongoose'

const ProductModel = new Schema({
  description: {
    type: String,
  },
  stock:{
    type: Number,
  },
  price: {
    type: Number,
  },
  typeProduct: {
    type: String,
  },
  photo_link: {
    type: String,
  },
  active: {
    type: Boolean
  }
}, {
  timestamps: true
})

export default model('Product', ProductModel)
