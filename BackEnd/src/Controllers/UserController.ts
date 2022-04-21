import { Request, response, Response } from "express"
import { UserMethod } from "../class/UserRegister"
import { IUser, IUserLogin } from "../Interfaces/InterfaceUser"
import { jwt } from '../middleware/token'

class RegisterConcrect extends UserMethod {

}
const test = new RegisterConcrect()

class UserController {

    constructor() {

    }

    async createLoginAndPassword(req: Request, res: Response): Promise<Response> {

        try {
            const user: IUserLogin = req.body

            const data = await test.createLogin(user)
            const token = data._id

            return res.status(201).json({ message: 'created login and password', token: token })
        } catch (error: any) {
            // console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async Register(req: Request, res: Response): Promise<Response> {

        try {
            const user: IUser = req.body

            const data = await test.create(user)
            const token = data._id

            return res.status(201).json({ message: 'user created', token: token })
        } catch (error: any) {
            console.log(error.message)
            return res.status(400).json({ message: error.message })
        }

    }
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const userLogin: IUserLogin = req.body
            const user = test.login(userLogin)

            return res.status(201).json({ token: "" })
        } catch (error: any) {
            return res.status(400).json({ message: error })
        }

    }
}
export default new UserController()