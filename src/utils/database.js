import mongoose from "mongoose";

const URI = 'mongodb+srv://douglasfkln:nhJxkO4PBvXcvNgC@ms-nodejs.zqoa2pr.mongodb.net/?retryWrites=true&w=majority&appName=ms-nodejs'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set("strictQuery", false)
        global.mongoose = await mongoose.connect(URI)
        .then(()=>console.log('connected to mongodb'))
        .catch(e=>console.log(e));
    }
}

export default databaseConnection