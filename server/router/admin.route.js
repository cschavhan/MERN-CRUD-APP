import express from "express";
import {
  getAllUsers,
  getAllUsersContacts,
} from "../controllers/admin.controller.js";
const router = express.Router();

router.get("/users", getAllUsers);
router.get("/contacts", getAllUsersContacts);

export default router;
