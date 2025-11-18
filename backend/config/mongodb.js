import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    // Connection options
  

    // MongoDB Atlas Connection string with a database name

    // Establish the connection to MongoDB Atlas
    // await mongoose.connect(process.env.MONGODB_URL_OFFLINE);
    await mongoose.connect(process.env.MONGODB_URL);
    

    // Event listener for successful connenction
    mongoose.connection.on('connected', () => {
      console.log("MongoDB connected successfully");
    });

    // Handle successful connect   ion
    console.log("Connected successfully");

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default mongoDb;
