import { Router } from "express"
import UserController from '../Controllers/UserController'

const router = Router()


router.post('/api/create/loginandsenha', UserController.createLoginAndPassword)
router.post('/api/create/user', UserController.Register)



export default router