import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import { IUserEntity } from  '../type/User'
import { validationUserData } from '../validators/validationUserData';

class UserController {
	public async createUser(req: Request, res: Response): Promise<Response> {
		try {
			const { name, dateBirth, password, cpf, phone, email, active, level, address: IAddress } = req.body as IUserEntity

			validationUserData(name, dateBirth, cpf, phone, email);

			const user : IUserEntity = {
				name,
				dateBirth,
				cpf,
				phone,
				email,
				password,
				active,
				level,
				address : IAddress
			}

			await UserModel.create(user);
				
			return res.status(201).json({ message: `Create user`}) ;
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

			const { 
				name,
				dateBirth,
				cpf,
				phone,
				email,
				active,
				level,
				address : IAddress
				}= req.body as IUserEntity

				
				validationUserData(name, dateBirth, cpf, phone, email);

				const user : IUserEntity = {
					...req.body
				}

				const filterUser = { _id: id }

				const filterEmail = {
					email, 
					_id: { $ne: id }
				}

				const foundEmail = await UserModel.findOne(filterEmail);

				if (foundEmail) throw new Error(`Already exists ${email}`)

				await UserModel.findOneAndUpdate(filterUser,  user)

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