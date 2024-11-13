import validator from "validator";
import usermodel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generatToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User  does not already exists in email",
      });
    }

    const token = generatToken(user._id);

    res.json({ success: true, token, message: "Loge in successful" });
  } catch (error) {
    console.error("Log in Error:", error);
    res.json({
      success: false,
      message: "Failed to Login",
      error: error.message,
    });
  }
};

const Register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });

    if (user) {
      return res.json({ success: false, message: "User already exists" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a stronger password" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const reguser = await usermodel.create({
      name,
      email,
      password: hashpassword,
    });

    const token = generatToken(reguser._id);

    res.json({
      success: true,
      token,
      name: name,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.json({
      success: false,
      message: "Failed to register",
      error: error.message,
    });
  }
};

const Admin = (req, res) => {
  try {
    const { email, password } = req.body;

    if (email !== process.env.ADMIN_EMAIL) {
      res.status(400).json({msg:"incorrect email"})

    }
   
    if (password !== process.env.ADMIN_PASS) {
      res.status(400).json({msg:"incorrect Password"})}

      const token = jwt.sign(email + password, process.env.SECRET_KEY);

      res.json({ message: "Admin endpoint not yet implemented", token });
   
  } catch (error) {
    res.status(400).json({msg:"error happen during login"})
  }
};

export { Login, Register, Admin };
