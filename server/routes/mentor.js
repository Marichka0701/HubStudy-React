import express from "express";
import { getAllMentors } from "../controllers/mentor.js";

const router = express.Router();

router.get("/", getAllMentors);

export default router
