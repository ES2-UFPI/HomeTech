import mongoose from "mongoose"
mongoose.connect(`${process.env.MONGO || 'mongodb+srv://Json:Json*123456@cluster0.mj6ue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'}`).then(() => { console.log("connect with container of the mongodb") }).catch(error => console.log(error))

export default mongoose