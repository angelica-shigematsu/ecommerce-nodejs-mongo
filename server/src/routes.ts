import { Router } from 'express';
import UserController  from './controllers/UserController'
import ProductController from './controllers/ProductController';
const routes = Router()


routes.post('/user', UserController.createUser)
routes.post('/product', ProductController.createProduct)

export default routes

