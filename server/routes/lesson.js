import express  from "express";
import { createNewLesson, updateLesson, getLessons } from "../controllers/lesson.js";
const router = express.Router();

router.get('/', getLessons)
router.post('/', createNewLesson);
router.put('/:id', updateLesson)

export default router;
