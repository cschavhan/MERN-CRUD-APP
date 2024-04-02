import express from "express";
import {
  deleteUser,
  getAllUsers,
  getAllUsersContacts,
  getUserById,
  updateUserById,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
// single user
router.get("/users/:id", authMiddleware, getUserById);
// update user data
router.patch("/users/update/:id", authMiddleware, updateUserById);
router.get("/contacts", authMiddleware, getAllUsersContacts);
router.delete("/users/delete/:id", authMiddleware, deleteUser);

export default router;
