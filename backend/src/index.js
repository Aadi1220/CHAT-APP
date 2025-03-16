import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import { app,server } from "./lib/socket.js";




const PORT = process.env.PORT || 5001;


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("Working")
})



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})