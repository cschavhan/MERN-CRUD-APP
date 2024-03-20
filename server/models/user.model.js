import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      minLength: [5, "Name must be at least 5 character"],
      maxLength: [50, "Name should be less than 50 character"],
      trim: true,
      lowercase: true,
      unique: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      minLength: [10, "Phone must be at least of 10 character"],
      maxLength: [20, "Phone should be less than 20 character"],
    },

    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "Password must be at least 8 character"],
      select: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = await bcryptjs.hash(this.password, 10);
  } catch (error) {
    next(error);
  }
});

userSchema.methods = {
  generateJwtToken: async function () {
    try {
      return await jwt.sign(
        {
          userID: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );
    } catch (error) {
      console.error(error);
    }
  },
};

const User = mongoose.model("User", userSchema);
export default User;
