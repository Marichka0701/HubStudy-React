import express from "express";
import { getAllMentors,
         getFilterMentors,
         createNewMentor,
         login,} from "../controllers/mentor.js";

const router = express.Router();

router.get("/", getAllMentors);
router.post("/", createNewMentor)
router.post("/login", login);
router.get("/filter", getFilterMentors)

export default router
