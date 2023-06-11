import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  dateBirth: Date,
  cpf: String,
  address: String,
  city: String,
  state : String,
  numberHouse: Number,
  phone: String,
  email: String
}, {
  timestamps: true
})

export default model('User', UserSchema);