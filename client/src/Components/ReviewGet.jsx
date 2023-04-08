import reviewItemOne from '../img/reviews-1.png';
import "../Styles/main.css"
import "../Styles/reviews.css"


const ReviewGet = ({name, text}) => {
    return (
        <div className="review-item">
            <div className='image-review'>
              <img src= {reviewItemOne} alt="" ></img>
            </div>
            <div className='text-review'>
              <div className='log-review'>
                <h3 className='log-review-item'>
                {name}
                </h3>
              </div>
              <div className='description-review'>
                <p>{text}</p>
              </div>
            </div>
        </div>

    )
}

export default ReviewGet;
