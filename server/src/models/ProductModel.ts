const { Schema, model } = require('mongoose')

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
  }
}, {
  timestamps: true
})

module.exports = model('Product', ProductModel)
