import Nav from "../main/Nav.js";
import Footer from "../main/Footer.js";
import '../../Styles/blog/blog.css';
import '../../Styles/main/general.css';
import tipsPhoto from "../../img/tips-photo.png";
import mentorPhoto from "../../img/mentor-photo.png";
import Carousel from 'react-bootstrap/Carousel';

function TextWithLimit({ text, limit }) {
  return (
    <div>
      {text.length <= limit ? (
        <span>{text}</span>
      ) : (
        <span>
          {text.slice(0, limit)}&hellip;
        </span>
      )}
    </div>
  );
}


const Blog = () => {

  return (
    <div class="blog-page">
      <div className="blog-content">
        <Nav></Nav>
        <h1 className="blog-title">The Blog</h1>
        <div className="sectionOne-blog">
          <Carousel>
            <Carousel.Item interval={20000}>
              <div class="blog-items">
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={20000}>
              <div class="blog-items">
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div class="blog-items">
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                        <img src={mentorPhoto} alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">Johannes Larsson</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text="Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem lorem.Av megangen till Tomas Ström Bengt Bimatisk. Hyrel krodengen utom ong lorem lorem loremsfksksdkdsfk" limit={145} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div class="sectionTwo-blog">
          <Carousel>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default Blog;