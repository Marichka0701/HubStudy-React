import Nav from "../main/Nav.js";
import Footer from "../main/Footer.js";
import "../../Styles/mentorSphere/mentor-page.css";
import "../../Styles/main/general.css";
import mentorPhoto from "../../img/mentor-photo-1.png";
import mentorRating from "../../img/Stars_rate.png";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Mentor = () => {

  return (
    <div className="bodyMentorSphere">
      <Nav></Nav>
      <div className="container_mentorPage">
        <div className="sidebar">
          <h2 className="filter-title">Фільтри</h2>
          <div className="wrapper-sidebar">
            <div class="header-price">
              <p className="price-title">Ціна заняття</p>
              <div className="price-input">
                <div className="field">
                  <span className="span-field">Мін</span>
                  <input type="text" className="input-min"></input>
                </div>
                <div className="field">
                  <span className="span-field">Макс</span>
                  <input type="text" className="input-max"></input>
                </div>
              </div>
            </div>
            <div class="header-experience">
              <p className="experience-title">Досвід викладання</p>
              <div className="price-input">
                <div className="field">
                  <span className="span-field">Від</span>
                  <input type="text" className="input-min"></input>
                </div>
                <div className="field">
                  <span className="span-field">До</span>
                  <input type="text" className="input-max"></input>
                </div>
              </div>
            </div>
            <div className="header-group">
              <p className="group-title">Формат занять</p>
              <div className="group-input">
                <div className="group-item">
                  <input className="group-input" type="checkbox" id="" name="" value="" />
                  <label className="group-label" for="">Групові</label>
                </div>
                <div className="group-item">
                  <input className="group-input" type="checkbox" id="" name="" value="" />
                  <label className="group-label" for="">Індивідуальні</label>
                </div>
              </div>
            </div>
            <div className="header-sphere">
              <p className="sphere-title">Сфера викладання</p>
              <div className="sphere-input">
                <label for='selection-form'></label>
                <Form.Select id='selection-form' name='selection-form' className='selection-form' aria-label="Default select example">
                  <option selected disabled>Оберіть сферу</option>
                  <option value="1">Дизайн UX/UI</option>
                  <option value="2">Бізнес та менеджмент</option>
                  <option value="3">Лідерство та комунікація</option>
                  <option value="4">Право</option>
                  <option value="5">Дикція та ораторське мистецтво</option>
                  <option value="6">Фінансова грамотність</option>
                  <option value="7">Плавання</option>
                  <option value="8">Стрільба</option>
                  <option value="9">Психологія</option>
                  <option value="10">SMM</option>
                </Form.Select>
                

              </div>
            </div>
            <div>
              <button className="submit-group" type="submit">Підтвердити</button>
            </div>
          </div>
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
              <Link to="/sphere">
                <button className="sphere-button button-mentorPage">Сфера навчання</button>
              </Link>
              {/* <button className="sphere-button button-mentorPage">
                Сфери навчання
              </button> */}
            </div>
            <div className="mentor-list">
              <div className="mentor-item">
                <div className="mentor-photo">
                  <img className="mentors-photo" src={mentorPhoto}></img>
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
                  <img className="mentors-photo" src={mentorPhoto}></img>
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
                  <img className="mentors-photo" src={mentorPhoto}></img>
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
                  <img className="mentors-photo" src={mentorPhoto}></img>
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
                  <img className="mentors-photo" src={mentorPhoto}></img>
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
