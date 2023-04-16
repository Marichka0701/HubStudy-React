import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import GetBlog from "./getBlog.js";

const GetBlogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);



  const BlogsGet = async () => {
      try {
      const response = await fetch(`http://localhost:3001/blog`, {
          method: 'GET',
      });

      let data = await response.json();
      console.log(data);
      dispatch(setBlogs({ blog: data }));
      } catch (err) {
          console.log(err)
      }
  }



  return (
    <Carousel>
      {blog.slice(0, 6).map(({ text }, index) => (
        index % 3 === 0 ? (
          <Carousel.Item key={text} interval={20000}>
            <div className="blog-items">
              <GetBlog text={text} />
              {blog[index + 1] && <GetBlog text={blog[index + 1].text} />}
              {blog[index + 2] && <GetBlog text={blog[index + 2].text} />}
            </div>
          </Carousel.Item>
        ) : null
      ))}
    </Carousel>
  )
}
export default GetBlogs;
