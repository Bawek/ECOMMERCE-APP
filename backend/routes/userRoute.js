import express from "express";
import { Login, Register, Admin } from "../controllers/userControler.js"; // Make sure the file extension (.js) is included if using ES6 modules

const userRouter = express.Router();

// Add a forward slash at the beginning of each route path
userRouter.post("/login", Login);
userRouter.post("/register", Register);
userRouter.post("/admin", Admin);

export default userRouter;
