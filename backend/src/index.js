import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";


const app = express();

const PORT = process.env.PORT || 5001

app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Working")
})



app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})