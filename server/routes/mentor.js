import express from "express";
import { getAllMentors,
         getFilterMentors,
         createNewMentor,
         login } from "../controllers/mentor.js";

const router = express.Router();

router.get("/", getAllMentors);
router.get("/filter", getFilterMentors)
router.post("/", createNewMentor)
router.post("/login", login);

export default router
