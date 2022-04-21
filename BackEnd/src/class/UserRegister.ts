import { Response } from 'express';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { IUser, IUserLogin } from '../Interfaces/InterfaceUser';
import DbRegister from '../services/DbRegister'

export abstract class UserMethod {
    async create(user: IUser): Promise<IUser> {
        return await DbRegister.create(user)
    }

    async login(user: IUserLogin) {
        await DbRegister.login(user)
    }
}

