import Mentor from "../models/Mentor.js";

export const getAllMentors = async (req, res) => {
    try {
        const mentor = await Mentor.find();
        res.status(200).json(mentor);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}
