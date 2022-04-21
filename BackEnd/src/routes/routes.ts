import { Router } from "express"
import UserController from '../Controllers/UserController'
import Authorization from '../middleware/auth'
const router = Router()


router.post('/api/create/loginandsenha', UserController.createLoginAndPassword)
router.post('/api/create/user', UserController.Register)
router.post('/api/create/login', UserController.login)



export default router