const express= require("express");
const app= express();
const tasks=require("../starter/routes/tasks.js");
const connectDB= require("./db/connect");
const errorHandler = require("./middleware/error-handle.js");
const notFound = require("./middleware/notfound.js");
require("dotenv").config();


//middleware
app.use(express.static("./public"))
app.use(express.json());


//routes


app.use("/api/v1/tasks",tasks);
app.use(notFound);
app.use(errorHandler);
const port= process.env.PORT||3000

const startServer=async ()=>{
    try {
       await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`listening to port ${port}`)
        })
        
    } catch (error) {
        console.log(error);
    }
}

startServer();
