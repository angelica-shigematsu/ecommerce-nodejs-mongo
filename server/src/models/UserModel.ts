import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: String,
  dateBirth: Date,
  cpf: {
    type: String,
    required: true,
    unique: true,
    minlength: [11,'O cpf deve ter 11 dígitos'],
    maxlength: [11,'O cpf deve ter 11 dígitos'],
  },
  address: {
    streetAddress: String,
    city: String,
    state : String,
    numberHouse: Number,
    postalCode: String,
    complement: String
  },
  phone: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: [8,'A senha deve ter no minímo 8 dígitos'],
  },
  active: Boolean,
  level: {
    type: String,
    enum: ['customer', 'admin', 'worker']
  }
}, {
  timestamps: true
})

export default model('User', UserSchema);