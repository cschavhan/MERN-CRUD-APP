import Contact from "../models/contact.model.js";
import AppError from "../utils/error.utils.js";

export const contactForm = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return next(new AppError("All fields are required..!", 400));
    }

    const contact = await Contact.create({ username, email, message });

    if (!contact) {
      return next(new AppError("Something went wrong,Please try again", 400));
    }

    await contact.save();
    res.status(201).json({
      success: true,
      contactDetails: "Contact form filled successfully",
      contact,
    });
  } catch (error) {
    next(error);
  }
};
