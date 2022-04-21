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
    async create(req: Request, res: Response): Promise<Response> {

        try {
            const user: IUser = req.body
            console.log(user)
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
            console.log(user)
            return res.status(201).json({ token: "" })
        } catch (error: any) {
            return res.status(400).json({ message: error })
        }

    }
}
export default new UserController()