import jwt from "jsonwebtoken";

const adminauth = (req, res, next) => {
  try {
    // Extract the token from the 'token' header
    const token = req.headers.token || req.headers.authorization;

    console.log("1 Token received:", token);

    // Check if the token exists
    if (!token) {
      return res.status(400).json({ success: false, msg: "Token not provided" });
    }

    // Verify the token with the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("2 Token decoded:", decoded);

    // Check if the decoded payload matches the expected admin credentials
    const expectedCredentials =process.env.ADMIN_EMAIL+process.env.ADMIN_PASS;
    console.log(expectedCredentials);
    if (decoded !== expectedCredentials) {
      return res.status(401).json({ success: false, msg: "Not authorized, please log in" });
    }

    
    // Allow access to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error during token validation:", error);
    res.status(401).json({ success: false, msg: "Not authorized" });
  }
};

export default adminauth;
