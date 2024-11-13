import express from "express";
import upload from "../middleware/multer.js";
import  {addProduct,listProduct,removeProduct,singleProduct} from "../controllers/productControl.js";
import adminauth from "../middleware/adminauth.js";

const productRouter = express.Router();

// Correct the route paths by adding leading slashes
productRouter.post("/add",adminauth,upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
]), addProduct);

productRouter.get("/list", listProduct);  // Get list of products

productRouter.post("/remove", adminauth,removeProduct);  // Remove a product

productRouter.get("/single", singleProduct);  // Get single product

export default productRouter;
