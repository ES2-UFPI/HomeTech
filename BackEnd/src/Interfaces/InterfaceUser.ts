import mongoose from "mongoose";

export interface IUser {
    readonly _id?: String;
    lastname: String;
    firstname: String;
    avatar?: String;
    codepostal?: String;
    endereco?: String;
    city?: String;
    complemento?: String
    estados?: String
    typePeople?: String;
    readonly ObjectId?: mongoose.Types.ObjectId;
}

export interface IUserLogin {
    email: String;
    password: String;
}