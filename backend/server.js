//npm run server

import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";

const PORT =process.env.PORT || 5000;
import connectToMongoDB from "./db/connectToMongoDB.js";

import {app,server} from "./socket/socket.js"

const __dirname=path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(res,req)=>{
 res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

server.listen(PORT,()=>{
 connectToMongoDB();
 console.log(`server run ${PORT} `)
}
)