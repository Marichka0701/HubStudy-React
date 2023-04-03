import '../Styles/getMentors.css';
import rates from '../img/Stars_rate.png';
import sectionThree from '../img/section-3.png';
import Carousel from 'react-bootstrap/Carousel';

const getMentors = () => {
  return ( 
    <div className="section-3">
        <h2 className="title-section-3">
          <span className="white-title-section-3">Find</span> your instructor</h2> 
          <p className='paragraph-section-3'>Our best instructors:</p>
          <Carousel>
          <Carousel.Item>
          <div className='content-section-3'>
            <div className='titleAndImage'>
              <div className='description-section-3'>
                <h2 className='description-title-section-3'>Programing:</h2>
              </div>
              <div className='image-section-3'>
                <img src={sectionThree} alt=''></img>
              </div>
            </div>
            <div className='info-about-tutor'>
              <p className='name-tutor'>Carl Smith</p>
              <ul className='theses'>
                <li className='theses-item'>
                senior at the Softserve IT - company
                </li>
                <li className='theses-item'>
                C# and C++ developer
                </li>
                <li className='theses-item'>
                international students group
                </li>
              </ul>
              <img src={rates} alt=''></img>
              <div className='buttons-section-3'>
                <button className='startStudying'>Почати навчання</button>
                <button className='about'>Детальніше</button>
              </div>
            </div>
          </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
          <div className='content-section-3'>
            <div className='titleAndImage'>
              <div className='description-section-3'>
                <h2 className='description-title-section-3'>Programing:</h2>
              </div>
              <div className='image-section-3'>
                <img src={sectionThree} alt=''></img>
              </div>
            </div>
            <div className='info-about-tutor'>
              <p className='name-tutor'>Carl Smith</p>
              <ul className='theses'>
                <li className='theses-item'>
                senior at the Softserve IT - company
                </li>
                <li className='theses-item'>
                C# and C++ developer
                </li>
                <li className='theses-item'>
                international students group
                </li>
              </ul>
              <img src={rates} alt=''></img>
              <div className='buttons-section-3'>
                <button className='startStudying'>Почати навчання</button>
                <button className='about'>Детальніше</button>
              </div>
            </div>
          </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <div className='content-section-3'>
            <div className='titleAndImage'>
              <div className='description-section-3'>
                <h2 className='description-title-section-3'>Programing:</h2>
              </div>
              <div className='image-section-3'>
                <img src={sectionThree} alt=''></img>
              </div>
            </div>
            <div className='info-about-tutor'>
              <p className='name-tutor'>Carl Smith</p>
              <ul className='theses'>
                <li className='theses-item'>
                senior at the Softserve IT - company
                </li>
                <li className='theses-item'>
                C# and C++ developer
                </li>
                <li className='theses-item'>
                international students group
                </li>
              </ul>
              <img src={rates} alt=''></img>
              <div className='buttons-section-3'>
                <button className='startStudying'>Почати навчання</button>
                <button className='about'>Детальніше</button>
              </div>
            </div>
          </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
  )
}
 
export default getMentors;