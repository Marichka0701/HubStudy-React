import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import MentorGet from "./MentorGet.jsx";
import "../Styles/getMentors.css"
const MentorsGet = ({isProfile = false}) => {
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.mentor);


    let filter = "";
    let bestMentor = false;
    let pricePerLesson=true;
    if (bestMentor == true) {
        filter+="bestMentor=true&";
    }
    if (pricePerLesson != null) {
        filter+="pricePerLesson[gt]=500&"
    }
    const getMentors = async () => {
        try {

        const response = await fetch(`http://localhost:3001/mentor/filter?${filter}`, {
            method: 'GET',
        });

        let data = await response.json();
        console.log(data);
        dispatch(setMentors({ mentor: data }));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMentors()
    }, [])

    getMentors();


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
