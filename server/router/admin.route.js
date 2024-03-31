import express from "express";
import {
  getAllUsers,
  getAllUsersContacts,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, getAllUsersContacts);

export default router;
