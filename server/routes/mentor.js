import express from "express";
import { getAllMentors,
         getFilterMentors} from "../controllers/mentor.js";

const router = express.Router();

router.get("/", getAllMentors);
router.get("/filter", getFilterMentors)

export default router
