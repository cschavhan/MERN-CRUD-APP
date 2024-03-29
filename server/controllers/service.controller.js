import Service from "../models/service.model.js";
import AppError from "../utils/error.utils.js";

export const services = async (req, res, next) => {
  try {
    const responce = await Service.find();
    if (!responce) {
      return next(new AppError("Service not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "services fetch successfully",
      responce,
    });
  } catch (error) {
    next(error);
  }
};
