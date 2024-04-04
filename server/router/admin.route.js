import express from "express";
import {
  deleteUser,
  deleteUserContacts,
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

// get all users
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

// delete user
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, deleteUser);

// get all users contact
router.get("/contacts", authMiddleware, adminMiddleware, getAllUsersContacts);

// delete user contact
router.delete(
  "/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserContacts
);

export default router;
