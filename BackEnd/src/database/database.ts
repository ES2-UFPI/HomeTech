import mongoose from "mongoose"
mongoose.connect('mongodb://0.0.0.0/admin').then(() => { console.log("connect with container of the mongodb") }).catch(error => console.log(error))

export default mongoose