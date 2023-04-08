import Mentor from "../models/Mentor.js";

export const getAllMentors = async (req, res) => {
    try {
        const mentor = await Mentor.find();
        res.status(200).json(mentor);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getFilterMentors = async (req, res) => {
    try {
        let query;

        const reqQuery = {...req.query};

        const removeFields = ['select', 'sort', 'page', 'limit'];

        // Loop over removeField and delete them
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        query = Mentor.find(JSON.parse(queryStr));
        const mentor = await query;
        res.status(200).json({data: mentor});

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
