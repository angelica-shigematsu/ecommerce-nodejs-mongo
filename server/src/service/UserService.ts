import UserModel from "../models/UserModel";

export class UserService {
  static async findById(id: string) {
    return await UserModel.findOne({ _id:  id })
                          .select({ 
                            name: 1, 
                            cpf: 1,
                            phone: 1,
                            email: 1,
                            address: 1 })
                            .exec();
  }
}