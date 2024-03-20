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
      res.status(400).json({ masseage: "User already exist" });
    }

    const user = await User.create({ username, email, phone, password });
    if (!user) {
      res.status(400).json({ masseage: "User cant register" });
    }

    await user.save();
    res.status(200).json({
      success: true,
      masseage: "User registred successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
