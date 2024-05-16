import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import emailRoutes from "./routes/emailRoutes.js"
import morgan from 'morgan';
import cors from 'cors';

const app = express()

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
connectDB();

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("<h1>Hello there</h1>");
})





