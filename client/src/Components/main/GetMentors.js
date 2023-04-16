import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import GetMentor from "./getMentor.js";
import '../../Styles/main/getMentors.css';

const GetMentors = () => {
  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.mentor);



  const MentorsGet = async () => {
      try {

      const response = await fetch(`http://localhost:3001/mentor/filter?bestMentor=true`, {
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
      MentorsGet()
  })

  MentorsGet();


  return (
      <Carousel>
          {mentor.map(
              ({
                  firstName,
                  lastName,
                  description
              }) => (
                      <Carousel.Item>
                          <GetMentor name={`${firstName} ${lastName}`}
                                      description={description}/>
                      </Carousel.Item>
              )
          )}
      </Carousel>
  )
}
export default GetMentors;
