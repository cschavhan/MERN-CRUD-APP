import Contact from "../models/contact.model.js";
import User from "../models/user.model.js";
import AppError from "../utils/error.utils.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users || !users.length === 0) {
      return next(new AppError("Users not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Users fetch successfully",
      users,
    });
  } catch (error) {
    next(error);
  }
};

// get all users contacts

export const getAllUsersContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || !contacts.length === 0) {
      return next(new AppError("Contacts not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Contacts fetch successfully",
      contacts,
    });
  } catch (error) {
    next(error);
  }
};
