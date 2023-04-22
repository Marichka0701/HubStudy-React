import express from "express";
import { createNewNote,
         deleteNote,
         getNotes } from "../controllers/notes.js";
const router = express.Router();

router.get("/", getNotes)
router.post("/", createNewNote);
router.delete("/", deleteNote)

export default router
