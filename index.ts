import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'

//Configuration
dotenv.config()

//Create Express APP
const app: Express = express()
const port: string | number = process.env.PORT || 3000

//Define the first Route of APP
app.get('/',(req: Request, res: Response) =>{
    res.send('Welcome to my API Restful: Express-TS-Swagger-Mongoose=Nodemon')
})

//Define the first Route of APP
app.get('/hello',(req: Request, res: Response) =>{
    res.send('Welcome to GET Route : Hello!')
})



//Execute APP and Listen Request to PORT
app.listen(port,()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})