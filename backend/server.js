//npm run server


import express from "express";
import dotenv from "dotenv";
const app=express();
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";

const PORT =process.env.PORT || 5000;
import connectToMongoDB from "./db/connectToMongoDB.js";

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
 connectToMongoDB();
 console.log(`server run ${PORT} `)
}
)