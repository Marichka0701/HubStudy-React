import Lesson from "../models/Lesson.js";
import Mentor from "../models/Mentor.js";

export const createNewLesson = async(req, res) => {
    try {
        const { mentor,
                student,
                price,
                location,
                date,
                duration } = req.body;

        const newLesson = new Lesson({
                mentor,
                student,
                price,
                location,
                date,
                duration
        });

        const lesson = await newLesson.save();
        res.status(201).json(lesson);
    } catch (err) {
        res.status(409).json({error: err.message});
    }
}

export const updateLesson = async(req, res) => {
    const lesson = await Lesson.findByIdAndUpdate(req.params.id, {finished: false})

    res.status(200).json(lesson);

}
