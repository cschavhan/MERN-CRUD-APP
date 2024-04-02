import express from "express";
import {
  deleteUser,
  getAllUsers,
  getAllUsersContacts,
  getUserById,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
// single user
router.get("/users/:id", authMiddleware, getUserById);
router.get("/contacts", authMiddleware, getAllUsersContacts);
router.delete("/users/delete/:id", authMiddleware, deleteUser);

export default router;
