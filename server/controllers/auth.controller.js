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
    user.password = undefined;

    const token = await user.generateJwtToken();
    // res.cookie("token", token, { httpOnly: true });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userID: user._id.toString(),
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// login

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("All fields are required..!", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError("Invalid credentials", 400));
    }

    const token = await user.generateJwtToken();
    user.password = undefined;
    // res.cookie("token", token, { httpOnly: true });

    res.status(200).json({
      success: true,
      message: "user login successfully",
      userID: user._id.toString(),
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// to send user data :- user logic

export const user = async (req, res, next) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    next(error);
  }
};
