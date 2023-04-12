import express from "express";
import { createNewUser, login } from "../controllers/student.js";

const router = express.Router();


router.post('/', createNewUser);
router.post('/login', login)

export default router;
