import express from "express";
import {
  deleteUser,
  getAllUsers,
  getAllUsersContacts,
  getUserById,
  updateUserById,
} from "../controllers/admin.controller.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
// single user
router.get("/users/:id", authMiddleware, adminMiddleware, getUserById);
// update user data
router.patch(
  "/users/update/:id",
  authMiddleware,
  adminMiddleware,
  updateUserById
);
router.get("/contacts", authMiddleware, adminMiddleware, getAllUsersContacts);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUser);

export default router;
