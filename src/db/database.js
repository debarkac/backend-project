import mongoose, { connect } from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB=async()=>{
    try{
        const conectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected !! DB host:${conectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connection FAILED",error)
        process.exit(1)
    }
}

export default connectDB