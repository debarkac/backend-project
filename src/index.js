import dotenv from "dotenv"
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import connectDB from './db/database.js'

dotenv.config({path:'./env'})
connectDB()




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