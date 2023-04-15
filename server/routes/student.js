import express from "express";
import { createNewUser, login, getAllStudents } from "../controllers/student.js";

const router = express.Router();

router.get("/", getAllStudents);
router.post('/', createNewUser);
router.post('/login', login)

export default router;
