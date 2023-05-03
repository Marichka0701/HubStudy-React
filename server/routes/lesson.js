import express  from "express";
import { createNewLesson, updateLesson } from "../controllers/lesson.js";
const router = express.Router();

router.post('/', createNewLesson);

router.put('/:id', updateLesson)

export default router;
