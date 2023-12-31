import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import UserEntity from '../type/User'
import isEmail from '../validators/validationEmail';
import validationPhone from '../validators/validationPhone';
import { isEmptyUser} from '../validators/validationEmpty';
import validationCpf from '../validators/validationCpf';
import validationName from '../validators/validationName';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
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

            if (!validationName(name)) throw new Error(`Invalid name: Not accept number and only name`)

            if (!isEmail(email)) throw new Error(`Invalid email: ${email}`)

            if (!validationPhone(phone)) throw new Error(`Invalid phone`)

            if (!validationCpf(cpf)) throw new Error(`Invalid cpf`)

            const foundEmail = await UserModel.findOne({email});

            if (foundEmail) throw new Error(`Already exists ${email}`)

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

            if (isEmptyUser(user)) throw new Error(`Field user empty`)
        
            await UserModel.create(user);
        
            return res.status(201).json({ message: `Create user successfully`}) ;
        }catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(400).json({ message: error.message})
            }
            return res.status(400).json({ message: error })
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

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
                level 
            }= req.body as UserEntity

            if (!validationName(name)) throw new Error(`Invalid name: Write full name`)

            if (!isEmail(email)) throw new Error(`Invalid email: ${email}`)
    
            if (!validationPhone(phone)) throw new Error(`Invalid phone`)
    
            if (!validationCpf(cpf)) throw new Error(`Invalid cpf`)

            const user : UserEntity = {
               ...req.body
            }

            if(isEmptyUser(user)) throw new Error(`Field user empty`)

            const filterUser = { _id: id }

            const update = { 
                name: name,
                dateBirth: dateBirth,
                cpf: cpf,
                address: cpf,
                city: city, 
                state: state, 
                numberHouse: numberHouse,
                phone: phone,
                email: email,
                active: active,
                leve: level,
            }

            const filterEmail = {
                email, 
                _id: { $ne: id }
            }

            const foundEmail = await UserModel.findOne(filterEmail);

            if (foundEmail) throw new Error(`Already exists ${email}`)

            await UserModel.findOneAndUpdate(filterUser,  update)

            return res.status(200).send({ message: `Updated user successfully` })

        }catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(400).json({ message: error.message})
            }
            return res.status(400).json({ message: error })
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const user = await UserModel.findOneAndDelete({_id: id })

            if (!user) throw new Error(`Not exists this user`)
        
            return res.status(200).send({ message: `Delete user successfully` })
        }catch (error: unknown) {
            if (error instanceof Error) {
              return res.status(400).json({ message: error.message})
            }
            return res.status(400).json({ message: error })
        }
    }
}

export default new UserController()