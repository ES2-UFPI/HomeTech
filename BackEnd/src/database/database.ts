import mongoose from "mongoose"
mongoose.connect(`${process.env.MONGO}`).then(() => { console.log("connect with container of the mongodb") }).catch(error => console.log(error))

export default mongoose