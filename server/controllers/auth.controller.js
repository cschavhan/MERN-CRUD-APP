import User from "../models/user.model.js";
import AppError from "../utils/error.utils.js";
export const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    if (!username || !email || !phone || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return next(new AppError("User already exist with this email ID", 400));
    }

    const user = await User.create({ username, email, phone, password });
    if (!user) {
      return next(
        new AppError("User registration failed, Please try again", 400)
      );
    }

    await user.save();
    res.status(201).json({
      success: true,
      masseage: "User registered successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
