import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import mentorRoutes from "./routes/mentor.js";
import reviewRoutes from "./routes/review.js";
import userQuestionRoutes from "./routes/userquestion.js";
import UserQuestion from "./models/Userquestion.js";
import Mentor from "./models/Mentor.js";
import Review from "./models/Review.js";
import { mentor } from "./data/index.js";
import { review } from "./data/index.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));



app.use("/mentor", mentorRoutes);
app.use("/review", reviewRoutes);
app.use("/userquestion", userQuestionRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //Mentor.insertMany(mentor);
    //Review.insertMany(review);
  })
  .catch((error) => console.log(`${error} did not connect`));
