import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


dotenv.config();
const app = express();



app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/users',userRoutes);




//connect mongoDB
//const CONNECTION_URL = 'mongodb+srv://demomern:123@cluster0.ks3og.mongodb.net/MERN';
const PORT = process.env.PORT || 5000;

//console.log('RUNNING ON PORT ${PORT}');

try {
    mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    app.listen(PORT, () => console.log('Server is running on PORT: '+ PORT));
} catch (error) {
    console.error(error);
};



