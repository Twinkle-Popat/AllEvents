import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user_routes.js';
import eventRouter from './routes/event_routes.js';

dotenv.config();

const app = express();
app.use(express.json());


//Middlewares

app.use('/user',userRouter);
app.use('/event',eventRouter);



mongoose.connect(`mongodb+srv://admin:HSlTEX5qN7VtSc2c@cluster0.ubmdccy.mongodb.net/?retryWrites=true&w=majority`,

).then(()=>{
    app.listen(5000,()=>{
        console.log('server is running on port 5000');
    });
}).catch(err=>{
    console.log(err);
}
    )





//HSlTEX5qN7VtSc2c