import { Router } from "express"
import UserController from '../Controllers/UserController'

const router = Router()


router.post('/api/create/', UserController.create)



export default router