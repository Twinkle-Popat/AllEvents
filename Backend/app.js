import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user_routes.js';
dotenv.config();

const app = express();


//Middlewares

app.use('/user',userRouter);



mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ubmdccy.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    app.listen(5000,()=>{
        console.log('server is running on port 5000');
    });
}).catch(err=>{
    console.log(err);
}
    )





//HSlTEX5qN7VtSc2c