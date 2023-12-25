//require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import {DB_NAME } from './constants.js';
import express from 'express';
import connectDB from './db/index.js';
const   app = express();

dotenv.config({path: './.env'});



connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => 
    { 
    console.log(`Server started on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("MONGODB CONNECTION FAILED",error);
    process.exit(1);
});









// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)       
//         console.log('Database connected');
//         app.on('error', (err) => 
//         {
//         console.error(err)
//         throw err
//         });
//         app.listen(process.env.PORT, () => 
//         {
//         console.log(`Server started on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error(error);
//         throw error
//     }
// })();