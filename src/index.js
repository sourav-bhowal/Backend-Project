// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

// Connecting the database
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runing at : ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log("MongoDb connection failed !!", error);
})











/*
// BASIC WAY TO CONNECT A DB using iffi and calling express

import express from "express";

const app = express();

// defining an iffi function that executes immediately.
// professionaly we use a semicolon while starting an iffi function.
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log(error);
            throw error;
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`Listening to port ${process.env.PORT}`);
        })
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
})()    
*/