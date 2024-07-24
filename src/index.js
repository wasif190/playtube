import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port: ${PORT}`)
    });
})
.catch((err) => {
    console.log("MongoDB connection failed!!", err);
})