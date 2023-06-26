import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import UserEntity from '../type/User'
import { validateEmail } from '../validators/validationEmail';
import { hasCharacter, hasNumber} from '../validators/validationPhone';
import { isEmpty } from '../validators/validationEmpty';

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
                email} = req.body as UserEntity


        if(!validateEmail.test(email)) return res.status(400).json(`Email ${email} invalid`);

        if(hasCharacter.test(phone)) return res.status(400).json(`Phone ${phone} invalid`);

        const foundEmail = await UserModel.findByEmail(email);

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
            email
        }

        if(isEmpty(user)) return res.status(400).json(`Field empty`);
    
        await UserModel.save(user);
    
        return res.status(201).json({ message: `Create user successfully`}) ;
    }
}

export default new UserController()