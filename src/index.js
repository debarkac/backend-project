import dotenv from "dotenv"
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import connectDB from './db/database.js'

dotenv.config({path:'./env'})
connectDB()
//after async gets called it return a promise
//so then for true and catch for error
.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed: ",error)
}
)



/*this is one of the techniques of connecting a db
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.error("Error: ",error)
        throw err
    }
})()//iife in js
*/