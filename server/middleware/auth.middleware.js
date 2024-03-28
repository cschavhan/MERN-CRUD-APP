import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const userData = await User.findOne({
      email: isVerified.email,
    }).select("-password");

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    next(error);
  }
  next();
};

export default authMiddleware;
