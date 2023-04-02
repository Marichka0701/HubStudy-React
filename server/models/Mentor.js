import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        age: {
            type: Number,
            required: true,
        },
        qualificaton: {
            type: Array,
            default: []
        },
        description: {
          type: String,
          required: true,
          max: 300
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        picturePath: {
            type: String,
            default: " "
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }
)

const Mentor = mongoose.model("Mentor", MentorSchema);

export default Mentor;
