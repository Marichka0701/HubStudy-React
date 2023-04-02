import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
        max: 350
    }
})

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
