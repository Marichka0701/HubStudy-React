import Review from "../models/Review.js";

export const getAllReviews = async (req, res) => {
    try {
        const review = await Review.find();
        res.status(200).json(review);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default getAllReviews;
