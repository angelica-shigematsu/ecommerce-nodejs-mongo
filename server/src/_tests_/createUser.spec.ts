const mongoose = require('mongoose')
const User =  require('../schemas/User')
const mongoURL= require('../config')

const {expect,test, beforeAll, describe, afterAll, beforeEach, it} = require('@jest/globals');

describe('insert', () => {
   beforeAll(async () => {
    if(!process.env.MONGO_URL) {
      throw new Error('MOngoDB server not initialized')
    }

    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should able to create user', async () => {

    const mockUser = {
      name: 'Teste',
      dateBirth: '1987-05-01',
      cpf: '12345678901',
      address: 'Rua Main',
      city: 'Wall Street',
      states: 'New York',
      numberHouse: '123',
      phone: '1234555556789',
      email: 'teste@gmail.com',
    };

    const user = await User.create(mockUser)

    expect(user).toHaveProperty('_id');
  });
});