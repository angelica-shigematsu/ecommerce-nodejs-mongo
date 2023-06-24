const User = require("../schemas/User");
import UserEntity from "../type/User";

class UserModel {
  async save(data: UserEntity) {
    const user = await User.create(data);
    return user;
  }
  
  async findByEmail(email: string) {
    const emailFromUser = await User.findOne({email})
    
   return emailFromUser
  }
}
export default new UserModel()