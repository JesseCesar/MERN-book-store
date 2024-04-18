import express, { request, response } from "express";
import { PORT} from "./config.js";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
// middleware for parsing request body
app.use(express.json());

// middleware for handling CORS POLICY
// Option 1: Allow all origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
/*
app.use(
  cors({
    origin: "http//localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  }))
*/
const mongoDBURL = process.env.MONGODB_URL;

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome")
});

app.use("/books", booksRoute)

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App is connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    })
    .catch((error) => {
        console.log(error);
    });
