import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        setMentors: (state, action) => {
            state.mentor = action.payload.mentor
        },
        setReviews: (state, action) => {
            state.review = action.payload.review
        },
        setBlogs: (state, action) => {
            state.blog = action.payload.blog
        },
    }

});

export const { setMentors, setReviews, setBlogs } =
  authSlice.actions;

export default authSlice.reducer;
