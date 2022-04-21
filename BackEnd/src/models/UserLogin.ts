import mongoose from "../database/database"


const UserLoginSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserLoginModel = mongoose.model('UserLogin', UserLoginSchema)

export default UserLoginModel