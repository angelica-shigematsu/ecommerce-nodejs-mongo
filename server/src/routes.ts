import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
import ListProductController from './controllers/ListProductController';
import { OrderProductController } from './controllers/OrderProductController';

const routes = Router()

routes.post('/users', UserController.createUser)
routes.patch('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser)

routes.get('/products', ListProductController.getProductByType)
routes.post('/products', ProductController.createProduct)
routes.patch('/products/:id', ProductController.updateProduct)
routes.delete('/products/:id', ProductController.deleteProduct)

routes.post('/order/:id', OrderProductController.createOrder)


export default routes

