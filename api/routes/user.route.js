import express from "express";
import { deleteUser, getUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router()

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
// router.get("/login",);

export default router;