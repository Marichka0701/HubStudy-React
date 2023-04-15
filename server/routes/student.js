import express from "express";
import { createNewUser, login, getAllStudents, getStudent } from "../controllers/student.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudent);
//router.post('/', createNewUser);
router.post('/login', login)

export default router;
