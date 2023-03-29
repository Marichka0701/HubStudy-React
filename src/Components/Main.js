import '../Styles/main.css';
import itemOne from '../img/benefits-item-1.png';
import itemTwo from '../img/benefits-item-2.png';
import itemThree from '../img/benefits-item-3.png';
import itemFour from '../img/benefits-item-4.png';
import itemFive from '../img/benefits-item-5.png';
import itemSix from '../img/benefits-item-6.png';
import photo from '../img/section-5.png';
import mainPhoto from '../img/photo-main.png';
import reviewItemOne from '../img/reviews-1.png';
import sectionThree from '../img/section-3.png';
import sectionFour from '../img/section-4.png';
import rates from '../img/Stars_rate.png';
import Accordion from 'react-bootstrap/Accordion';

const section = () => {
  return ( 
    <main className="section">
      <div className="section-1">
        <div className="section-1-info">
            <h1 className="main-title">Learn with us!</h1>
          <div className="main-paragraph">
            <p>Lörem ipsum bitårat plafaspeligt. Flipperförälder susade dest alogi och kompetensväxling kvasipp. Sora
              reanårade stereotik. Makrosk fåtufiliga förutom krorat, henifiera nydektigt, annonsblockerare. Tradade
              prerel inte jabor bongen ande svajpa. </p>
          </div>
          <div className="main-buttons">
            <button className="sign_up button">Обрати наставника</button>
            <button className="sign_in  button">Стати наставником</button>
          </div>
        </div>
       <div className="images">
        <img width={500} height={500} src= {mainPhoto} alt="" />
      </div> 
      </div>
      <div className="section-2">
        <h2 className="title-section-2">Our benefits:</h2>
        <div className="benefits">
          <div className="benefit-item">
            <div className="benefit-image">
              <img src= {itemOne} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Найкрутіші наставники:
                обирайте тих, хто з вами на одній хвилі та вміє знайти підхід до кожного
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src= {itemTwo} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Якість:
                ми забезпечуємо кваліфікацію наших наставників, перевіряючи їхні професійні знання та досвід
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemThree}alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Різноманітність форматів: навчайтесь індивідуально з наставником, в групі або відвідуйте вебінари
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemFour} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Широкий вибір послуг:
                ви знайдете наставника у будь - якій сфері!
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemFive} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Гнучкий графік:
                обирайте час та займайтесь тоді, коли вам буде зручно
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemSix} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Гнучкий графік:
                обирайте час та займайтесь тоді, коли вам буде зручно
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <h2 className="title-section-3">
          <span className="white-title-section-3">Find</span> your instructor</h2> 
          <p className='paragraph-section-3'>Our best instructors:</p>
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
      </div>
      <div className='section-4'>
        <h2 className='title-section-4'>
        Didn`t find an instruct<span className='white-title-section-4'>or?</span>
        </h2>
        <p className='paragraph-1-section-4'>Become one!</p>
        <p className='paragraph-2-section-4'>Fill the blank, create personal account and become a part of our community! Share your knowledge with others! Meet grateful students and blah-blah-blah</p>
        <button className='becomeInstructor'>
        Become an instructor!
        </button>
        <img src={sectionFour} alt='' ></img>
      </div>
      <div className='section-5'>
        <h2 className="title-section-5">Often - asked questions:</h2>
        <div className='content-section-5'>
        <Accordion className="my-accordion" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #6</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Accordion Item #7</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Accordion Item #8</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          <div>
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      <div className='reviews'>
        <h2 className='title-reviews'>
          <span className='black-reviews'>Re</span>views
        </h2>
        <div className='block-reviews'>
          <div className='review-item'>
            <div className='image-review'>
              <img src= {reviewItemOne} alt="" ></img>
            </div>
            <div className='text-review'>
              <div className='log-review'>
                <h3 className='log-review-item'>
                Andrew
                </h3>
              </div>
              <div className='description-review'>
                <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
              </div>
            </div>
          </div>
          <div className='review-item'>
            <div className='image-review'>
              <img src= {reviewItemOne} alt="" ></img>
            </div>
            <div className='text-review'>
              <div className='log-review'>
                <h3 className='log-review-item'>
                Andrew
                </h3>
              </div>
              <div className='description-review'>
                <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
              </div>
            </div>
          </div>
          <div className='review-item'>
            <div className='image-review'>
              <img src= {reviewItemOne} alt="" ></img>
            </div>
            <div className='text-review'>
              <div className='log-review'>
                <h3 className='log-review-item'>
                Andrew
                </h3>
              </div>
              <div className='description-review'>
                <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
              </div>
            </div>
          </div>
          <div className='review-item'>
            <div className='image-review'>
              <img src= {reviewItemOne} alt="" ></img>
            </div>
            <div className='text-review'>
              <div className='log-review'>
                <h3 className='log-review-item'>
                Andrew
                </h3>
              </div>
              <div className='description-review'>
                <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default section;