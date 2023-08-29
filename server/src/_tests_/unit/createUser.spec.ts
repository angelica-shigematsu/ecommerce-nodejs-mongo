import validationCpf from "../../validators/validationCpf";
import isEmail from "../../validators/validationEmail";

describe('validations of data from users', () => {
  it('should not able accept cpf', () => {

    const cpf = '1234567890'

    const isCpf = validationCpf(cpf)

    expect(isCpf).toBeFalsy()
  })

  it('should not able accept same email already registered', () => {
    const email = 'jonh@outlo88ok.com'

    const validationEmail = isEmail(email)

    expect(validationEmail).toBeFalsy()
  })
})


// describe('insert', () => {
//    beforeAll(async () => {
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

//   it('should able to create user', async () => {

//     const mockUser = {
//       name: 'Teste',
//       dateBirth: '1987-05-01',
//       cpf: '12345678901',
//       address: 'Rua Main',
//       city: 'Wall Street',
//       states: 'New York',
//       numberHouse: '123',
//       phone: '1234555556789',
//       email: 'teste@gmail.com',
//     };

//     const user = await UserModel.create(mockUser)

//     expect(user).toHaveProperty('_id');
//   });
// });