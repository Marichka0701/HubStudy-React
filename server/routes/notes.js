import express from "express";
import { createNewNote,
         deleteNote } from "../controllers/notes.js";
const router = express.Router();


router.post("/", createNewNote);
router.delete("/", deleteNote)

export default router
