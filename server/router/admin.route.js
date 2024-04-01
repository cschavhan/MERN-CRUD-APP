import express from "express";
import {
  deleteUser,
  getAllUsers,
  getAllUsersContacts,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, getAllUsersContacts);
router.delete("/users/delete/:id", authMiddleware, deleteUser);

export default router;
