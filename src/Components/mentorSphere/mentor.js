import Nav from "../main/Nav.js";
import Footer from "../main/Footer.js";
import "../../Styles/mentorSphere/mentor-page.css";
import "../../Styles/main/general.css";
import mentorPhoto from "../../img/mentor-photo-1.png";
import mentorRating from "../../img/Stars_rate.png";


const Mentor = () => {
  return (
    <div className="bodyMentorSphere">
      <Nav></Nav>
      <div className="container_mentorPage">
        <div className="sidebar">
          <form>
            <input type="range"></input>
          </form>
        </div>
        <div class="main">
          <div class="container__Mentor">
            <h1 className="title-mentorPage">Оберіть свого наставника!</h1>
            <p className="paragraph-mentorPage">
              Skoro bude paska. Tak sho zakazuite miasko. Skoro bude paska.
              Shynka i kovbaska. Tse kapets. Tse kapets. Tse kapets. Tse kapets.
              Tse kapets. Tse kapets. Tse kapets. Tse kapets.{" "}
            </p>
            <div className="buttons-mentorPage">
              <button className="rating-button button-mentorPage">
                Рейтинг наставників
              </button>
              <button className="sphere-button button-mentorPage">
                Сфери навчання
              </button>
            </div>
            <div className="mentor-list">
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">Carl Smith</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">Programing</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        senior at the Softserve IT - company
                      </li>
                      <li className="mentor-cons-item">C# and C++ developer</li>
                      <li className="mentor-cons-item">
                        international students group
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    <button className="startStudying">Почати навчання</button>
                    <button className="about">Детальніше</button>
                  </div>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">Carl Smith</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">Programing</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        senior at the Softserve IT - company
                      </li>
                      <li className="mentor-cons-item">C# and C++ developer</li>
                      <li className="mentor-cons-item">
                        international students group
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    <button className="startStudying">Почати навчання</button>
                    <button className="about">Детальніше</button>
                  </div>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">Carl Smith</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">Programing</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        senior at the Softserve IT - company
                      </li>
                      <li className="mentor-cons-item">C# and C++ developer</li>
                      <li className="mentor-cons-item">
                        international students group
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    <button className="startStudying">Почати навчання</button>
                    <button className="about">Детальніше</button>
                  </div>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">Carl Smith</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">Programing</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        senior at the Softserve IT - company
                      </li>
                      <li className="mentor-cons-item">C# and C++ developer</li>
                      <li className="mentor-cons-item">
                        international students group
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    <button className="startStudying">Почати навчання</button>
                    <button className="about">Детальніше</button>
                  </div>
                </div>
              </div>
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">Carl Smith</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">Programing</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        senior at the Softserve IT - company
                      </li>
                      <li className="mentor-cons-item">C# and C++ developer</li>
                      <li className="mentor-cons-item">
                        international students group
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    <button className="startStudying">Почати навчання</button>
                    <button className="about">Детальніше</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mentor">
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Mentor;
