import mongoose from "mongoose";
import dotenv from 'dotenv';


// dotenv configuration
dotenv.config()

// Database Connection Function
const databaseConnection = async () => {
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
      await  mongoose.connect(process.env.MONGODB_URI,params)
        console.log("Mongodb successfully connected")
        
    } catch (error) {
        console.log("Mongo Connection Error",error)
    }
}

export default databaseConnection