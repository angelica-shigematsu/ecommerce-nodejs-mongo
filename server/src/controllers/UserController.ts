import { Request, Response } from 'express';
const UserModel =  require('../models/UserModel')
import UserEntity from '../type/User'
import isEmail from '../validators/validationEmail';
import hasCharacter from '../validators/validationPhone';
import { isEmptyUser} from '../validators/validationEmpty';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        const { name, 
                dateBirth, 
                cpf, 
                address, 
                city, 
                state, 
                numberHouse,
                phone,
                email,
                active,
                level }= req.body as UserEntity


        if(!isEmail(email)) return res.status(400).json(`Email ${email} invalid`);

        if(hasCharacter(phone)) return res.status(400).json(`Phone ${phone} invalid`);

        const foundEmail = await User.findOne({email})

        if (foundEmail) return res.status(400).json(`Email ${email} already exists`);

        const user : UserEntity = {
            name,
            dateBirth, 
            cpf, 
            address, 
            city, 
            state, 
            numberHouse,
            phone,
            email,
            active,
            level
        }

        if(isEmptyUser(user)) return res.status(400).json(`Field empty`);
    
        await UserModel.create(user);
    
        return res.status(201).json({ message: `Create user successfully`}) ;
    }
}

export default new UserController()