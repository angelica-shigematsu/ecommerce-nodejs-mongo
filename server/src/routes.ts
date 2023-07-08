import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
const routes = Router()


routes.post('/users', UserController.createUser)
routes.patch('/users/:id', UserController.updateUser)

routes.post('/product', ProductController.createProduct)


export default routes

