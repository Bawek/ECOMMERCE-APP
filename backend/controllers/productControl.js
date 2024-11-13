import { v2 as cloudinary } from "cloudinary";
import productmodel from "../models/productModel.js";

// Add Product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    // Handle multiple images
    const image1 = req.files.image1 ? req.files.image1[0] : null;
    const image2 = req.files.image2 ? req.files.image2[0] : null;
    const image3 = req.files.image3 ? req.files.image3[0] : null;
    const image4 = req.files.image4 ? req.files.image4[0] : null;

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== null
    ); // Filter out null values

    console.log("Uploading images to Cloudinary...");

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url; // Return the secure URL of the uploaded image
      })
    );

    const productData = {
      name,
      description,
      price,
      category,
      subCategory,
      sizes: JSON.parse(sizes), // Ensure that sizes is a JSON string
      bestSeller: bestSeller === "true", // Ensure correct boolean conversion
      image: imageUrls, // Array of image URLs
      date: Date.now(),
    };

    // Create product in the database
    const newProduct = await productmodel.create(productData);
    console.log("Product created:", newProduct);

    // Send success response with product data
    res.status(201).json({success:true ,message: "Product added successfully", product: newProduct });

  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
};

// List all products
const listProduct = async (req, res) => {
  try {
    const products = await productmodel.find({});
    res.json({success:true, products }); // More descriptive than 'user'
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Failed to list products" });
  }
};

// Remove product by ID
const removeProduct = async (req, res) => {
  try {
    const product = await productmodel.findByIdAndDelete(req.body.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ product });
    console.log("Product removed:", product);
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(400).json({ success: false, message: "Failed to remove product" });
  }
};

// Get a single product by ID
const singleProduct = async (req, res) => {
  try {
    const { id } = req.params; // Use req.params for the ID
    const product = await productmodel.findById(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ success: false, message: "Failed to fetch product" });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
