import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Conectado ao mongo com sucesso!!!")
    } catch (error) {
        console.log(error)
    }
}

connectDB();

export default mongoose;