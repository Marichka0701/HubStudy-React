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
        setNotes: (state, action) => {
            state.note = action.payload.note
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.note = null;
        },
        setReviews: (state, action) => {
            state.review = action.payload.review
        },
        setBlogs: (state, action) => {
            state.blog = action.payload.blog
        },
    }

});

export const { setMentors, setNotes, setLogin, setLogout, setReviews, setBlogs } =
  authSlice.actions;

export default authSlice.reducer;
