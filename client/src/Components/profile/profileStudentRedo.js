import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import '../../Styles/profile/profileStudentRedo.css'
import photoStudent from "../../img/profileStudent.png";
import iconPencil from "../../img/pencil-icon.png";
import reminderIcon from "../../img/reminder-icon.png";
import reminderIconWithout from "../../img/without-sound.png";
import swimming from "../../img/swimming.png";




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const profileStudentRedo = () => {
  return (
    <div className="container-profileStudentRedo">
      <Nav></Nav>
      <div className="under-header">
        <div>
          <div className="nameSurname">
            <div>
              <input id="nameStudent-input" placeholder="Студентін" className="nameStudent"></input>
              <img src={iconPencil}></img>
            </div>
            <div>
            <input id="surnameStudent-input" placeholder="Студентін" className="surnameStudent"></input>
            <img src={iconPencil}></img>
            </div>
          </div>
          <div>
            <p>Студент</p>
          </div>
        </div>
        <div>
            <button type="submit" className="changeProfile">Зберегти</button>
        </div>

      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
            <img className="photoStudent-photo" width={300} src={photoStudent} ></img>
          </div>
        </div>
        <div className="mainProfileStudentRedo">
          <div class="sectionOneStudentProfile">
            <div className="functionBlock-redo">
              <div className="function-btn">Функції</div>
              <div className="reminder-loudness">
                <p>Нагадування</p>
                <div>
                  <img width={28} src={reminderIcon}></img>
                  <p>Зі звуком</p>
                </div>
                <div>
                  <img src={reminderIconWithout}></img>
                  <p>Зі звуком</p>
                </div>
              </div>
            </div>
            <div className="contactBlock-redo">
            <div className="function-btn">Контакти</div>
              <div className="reminder-loudness">
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
              </div>
            </div>
          </div>
          <div class="sectionTwoStudentProfile">
            <div className="myLessons-student">
                <div className="myLessons-btn">Мої заняття</div>
                <div className="block-lessons">
                  <div className="item-lessons">
                    <div className="photo-lesson">
                      <img src={swimming} ></img>
                    </div>
                    <div className="about-lesson">
                      <div>
                        <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                      </div>
                      <div>
                        <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                      </div>
                      <div className="durationPrice">
                        <div>
                          <p>Ціна заняття:</p>
                          <p>350 грн</p>
                        </div>
                        <div>
                          <p>Тривалість заняття:</p>
                          <p>1,5 год</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-lessons">
                    <div className="photo-lesson">
                      <img src={swimming} ></img>
                    </div>
                    <div className="about-lesson">
                      <div>
                        <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                      </div>
                      <div>
                        <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                      </div>
                      <div className="durationPrice">
                        <div>
                          <p>Ціна заняття:</p>
                          <p>350 грн</p>
                        </div>
                        <div>
                          <p>Тривалість заняття:</p>
                          <p>1,5 год</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mytasks-student">
                <div className="myLessons-btn">Завдання:</div>
                <div className="block-tasks">
                  <div class="item-tasks">
                    <div>
                      <p>Тести:</p>
                      <a href="http://yourtesturl.com">http://yourtesturl.com </a>
                    </div>
                    <div>
                      <p>Відео:</p>
                      <a href="https://youtu.be/6SjBv5AuL8E">https://youtu.be/6SjBv5AuL8E</a>
                    </div>
                    <div>
                      <p>Тести:</p>
                      <a href="http://yourmanualurl.com" >http://yourmanualurl.com </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default profileStudentRedo;
