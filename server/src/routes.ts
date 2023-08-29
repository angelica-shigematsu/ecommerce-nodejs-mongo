import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
import ListProductController from './controllers/ListProductController';
import OrderController from './controllers/OrderController';
const routes = Router()

routes.post('/user', UserController.createUser)
routes.patch('/user/:id', UserController.updateUser)
routes.delete('/user/:id', UserController.deleteUser)

routes.get('/product', ListProductController.getProductByType)
routes.post('/product', ProductController.createProduct)
routes.patch('/product/:id', ProductController.updateProduct)
routes.delete('/product/:id', ProductController.deleteProduct)

routes.post('/order', OrderController.createOrder)


export default routes

