import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import UserEntity from '../type/User'

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
                email} = req.body
               
        const foundEmail = await UserModel.findByEmail(email);
    
        if (foundEmail) res.status(400).json(`Email ${email} already exists`);

        const user : UserEntity = {
            name,
            dateBirth, 
            cpf, 
            address, 
            city, 
            state, 
            numberHouse,
            phone,
            email
        }
    
        await UserModel.save(user);
    
        return res.status(201).json({ message: `Create user successfully`}) ;
    }
}

export default new UserController()