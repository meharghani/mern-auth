import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => res.send("Server is ready"));
app.listen(port, console.log(`Sever started on port ${port}`));
