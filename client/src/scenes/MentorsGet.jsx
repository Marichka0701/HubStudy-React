import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import MentorGet from "./MentorGet.jsx";
const MentorsGet = ({isProfile = false}) => {
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.mentor);

    const getMentors = async () => {
        const response = await fetch("http://localhost:3001/mentor",{
            method: "GET"
        });
        const data = await response.json();
        dispatch(setMentors({ mentor: data }));
    }

    useEffect(() => {
        getMentors()
    }, [])

    //getMentors();

    return (
        <Carousel>
            {mentor.map(
                ({
                    firstName,
                    lastName,
                    description
                }) => (
                    <Carousel.Item>
                        <MentorGet name={`${firstName} ${lastName}`}
                                    description={description}/>
                                    </Carousel.Item>
                )
            )}
        </Carousel>
    )
}

export default MentorsGet;
