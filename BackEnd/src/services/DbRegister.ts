import UserModel from "../models/UserModel"
import UserLogin from "../models/UserLogin"
import { IUser, IUserLogin } from "../Interfaces/InterfaceUser"


class DbRegister {

    async create(data: IUser): Promise<IUser> {
        return await UserModel.create(data)
    }
    async createLogin(data: IUserLogin): Promise<IUser> {
        return await UserLogin.create(data)
    }
    async login(data: IUserLogin): Promise<IUserLogin> {
        const user: any = await UserModel.findOne(data)
        return user
    }
}

export default new DbRegister()