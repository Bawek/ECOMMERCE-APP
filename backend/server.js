import express from "express";  // Corrected the import statement
import cors from "cors";        // Corrected the import statement
import mongoDb from "./config/mongodb.js";
import ConnectCloudinery from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js"
const app = express();
import "dotenv/config"
import productRouter from "./routes/productRoute.js";
app.use(cors());
app.use(express.json());
mongoDb()
ConnectCloudinery()
const port = process.env.PORT || 4000;

// Corrected the route to specify the correct endpoint ("/")
app.get("/", (req, res) => {
    res.send("Code is running"); 
});
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)

// Start the server on the correct port
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
