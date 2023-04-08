import Mentor from "../models/Mentor.js";

export const getAllMentors = async (req, res) => {
    try {
        let query;
        query = Mentor.find();

        //pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = 5;
        const startIndex = (page - 1) * limit;

        const endIndex = page * limit;
        const total = await Mentor.countDocuments();


        query = query.skip(startIndex).limit(limit);


        const pagination = {};

        if(endIndex < total) {
            pagination.next = {
            page: page + 1,
            limit: limit
          }
        }

        if (startIndex > 0) {
            pagination.prev = {
            page: page - 1,
            limit: limit
          }
        }

        const mentor = await query;
        res.status(200).json({success: true, pagination: pagination, data: mentor});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getFilterMentors = async (req, res) => {
    try {
        // filter
        let query;
        const reqQuery = {...req.query};

        const removeFields = ['select', 'sort', 'page', 'limit'];
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        query = Mentor.find(JSON.parse(queryStr));

        //pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = 5;
        const startIndex = (page - 1) * limit;

        const endIndex = page * limit;
        const total = await Mentor.countDocuments();


        query = query.skip(startIndex).limit(limit);


        const pagination = {};

        if(endIndex < total) {
            pagination.next = {
            page: page + 1,
            limit: limit
          }
        }

        if (startIndex > 0) {
            pagination.prev = {
            page: page - 1,
            limit: limit
          }
        }

        const mentor = await query;
        res.status(200).json({success: true, pagination: pagination, data: mentor});


    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
