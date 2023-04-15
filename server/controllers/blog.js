import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({error: err});
    }
}

export const getBlogByMentorId = async (req, res) => {
    try {
        let query;

        const reqQuery = {...req.query};

        const removeFields = ['select', 'sort', 'page', 'limit'];
        removeFields.forEach(param => delete reqQuery[param]);

        let queryStr = JSON.stringify(reqQuery);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
        query = Blog.find(JSON.parse(queryStr)).populate('mentor');


        const blog = await query;
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({error: err});
    }
}

export const createBlog = async (req, res, next) => {
    const blog = await Blog.create(req.body);

    res.status(201).json(blog);
}
