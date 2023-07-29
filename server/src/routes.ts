import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
const routes = Router()

routes.post('/user', UserController.createUser)
routes.patch('/user/:id', UserController.updateUser)
routes.delete('/user/:id', UserController.deleteUser)

routes.post('/product', ProductController.createProduct)
routes.patch('/product/:id', ProductController.updateProduct)
routes.delete('/product/:id', ProductController.deleteProduct)


export default routes

