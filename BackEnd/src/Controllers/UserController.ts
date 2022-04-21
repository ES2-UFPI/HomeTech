import { Request, Response } from "express"
import { UserMethod } from "../class/UserRegister"
import { IUser, IUserLogin } from "../Interfaces/InterfaceUser"
import { jwt } from '../middleware/token'

class RegisterConcrect extends UserMethod {

}
const concrect = new RegisterConcrect()

class UserController {


    async createLoginAndPassword(req: Request, res: Response): Promise<Response> {

        try {
            const user: IUserLogin = req.body
            const data = await concrect.createLogin(user)
            const id = data._id
            const token = jwt(`${id}`)
            return res.status(201).json({ message: 'created login and password', token: token })
        } catch (error: any) {
            // console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async Register(req: Request, res: Response): Promise<Response> {

        try {
            const user: IUser = req.body
            const data = await concrect.create(user)
            const id = data._id
            const token = jwt(`${id}`)
            return res.status(201).json({ message: 'user created', token: token })
        } catch (error: any) {
            console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const userLogin: IUserLogin = req.body

            const user: any = await concrect.login(userLogin)

            if (user === null) {
                return res.status(404).json({ message: 'incorrect email or password' })
            }
            const id = user._id
            const token = jwt(`${id}`)
            return res.status(200).json({ token: token })
        } catch (error: any) {
            //console.log(error)
            return res.status(400).json({ message: error })
        }

    }
}
export default new UserController()