import { v2 as cloudinary } from "cloudinary";

const ConnectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, // Corrected spelling
    api_key: process.env.CLODINARY_API_KEY,  // Corrected spelling
    api_secret: process.env.CLODINERY_SECRET_KEY, // Corrected spelling
  });
};

export default ConnectCloudinary;
