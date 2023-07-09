import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
const routes = Router()

routes.post('/users', UserController.createUser)
routes.patch('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser)

routes.post('/products', ProductController.createProduct)
routes.patch('/products/:id', ProductController.updateProduct)
routes.delete('/products/:id', ProductController.deleteProduct)


export default routes

