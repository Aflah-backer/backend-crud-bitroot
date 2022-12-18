import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import contactRouter from './routers/contactRoute.js'

const app = express()
dotenv.config()

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to mongodb");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  app.use(cors())
  app.use(express.json())

  app.get('/',(req,res,next)=> {
    res.send("Welcome")
  })

  app.use("/api", contactRouter)


app.use(express())

const port = process.env.PORT
app.listen(port,()=>{
    connect()
    console.log("server is runing");
})