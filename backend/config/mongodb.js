import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    // Connection options
  

    // MongoDB Atlas Connection string with a database name
    const dbURI = "mongodb+srv://Baweke:hDjbRmLfXig7pMJY@cluster0.xio5e.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

    // Establish the connection to MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URL_OFFLINE);

    // Event listener for successful connection
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
