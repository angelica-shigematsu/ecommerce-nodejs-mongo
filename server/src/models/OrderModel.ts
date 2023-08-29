import { Schema, model } from 'mongoose'

const OrderModel = new Schema({
  total: Number,
  status: String,
  
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'OrderProduct'
  }],

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  /*information about card */
  numberCard: Number,
  fullNameCard: String,
  cvv: Number,
  expiredDateCard: Date,
  type: {
    type: String, 
    enum: ["Credit", "Debit", "Boleto"]
  }
},{
    timestamps: true
  }
)

export default model('Order', OrderModel)