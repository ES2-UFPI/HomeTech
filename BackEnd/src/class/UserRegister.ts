import { Response } from 'express';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { IUser, IUserLogin } from '../Interfaces/InterfaceUser';
import DbRegister from '../services/DbRegister'

export abstract class UserMethod {
    async create(user: IUser): Promise<IUser> {
        return await DbRegister.create(user)
    }
    async createLogin(user: IUserLogin): Promise<IUser> {
        return await DbRegister.createLogin(user)
    }
    async login(user: IUserLogin): Promise<IUser> {

        return await DbRegister.login(user)
    }
}

