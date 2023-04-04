import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReviews } from "../state/index.js";
import ReviewGet from "./ReviewGet.jsx";
const ReviewsGet = ({isProfile = false}) => {
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review);

    const getReviews = async () => {
        const response = await fetch("http://localhost:3001/review",{
            method: "GET"
        });
        const data = await response.json();
        dispatch(setReviews({ review: data }));
    }

    useEffect(() => {
        getReviews()
    }, [])

    //getReviews();

    return (
        <>
            {review.map(
                ({
                    firstName,
                    lastName,
                    text
                }) => (
                    <ReviewGet name={`${firstName} ${lastName}`}
                               text={text} />
                )
            )}
        </>
    )
}

export default ReviewsGet;
