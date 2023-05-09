import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import photoStudent from "../../img/profileStudent.png";
import reminderIcon from "../../img/reminder-icon.png";
import notesIcon from "../../img/notes-icon.png";
import chatIcon from "../../img/chat-icon.png";
import swimming from "../../img/swimming.png";


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



  
const ProfileStudent = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [lgnewShow, setnewLgShow] = useState(false);
  
  function handleButtonClick() {
    setnewLgShow(true);
    setLgShow(false);
  }
 
  return (
    <div className="container-profileStudent">
      <Nav></Nav>
      <div className="under-header">
        <div>
          <div className="nameSurname">
            <div>
              <h2 className="nameStudent">Студентін</h2>
            </div>
            <div>
              <h2 className="surnameStudent">Батькович</h2>
            </div>
          </div>
          <div>
            <p>Студент</p>
          </div>
        </div>
        <div>
          <Link to="/profile-student-redo">
            <button className="changeProfile">Редагувати профіль</button>
          </Link>
        </div>
      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
            <img className="photoStudent-photo" width={300} src={photoStudent} ></img>
          </div>
          <div className="content-sidebar">
            <div className="function-block">
              <div className="function-btn">
                Функції
              </div>
              <div className="function">
                <div className="reminder-profile">
                  <img width={30} src={reminderIcon} ></img>
                  <p>Нагадування</p>
                </div>
                <div className="notes-profile">
                  <img width={30} src={notesIcon} ></img>
                  <p>Нотатки</p>
                </div>
                <div className="chat-profile">
                  <img width={30} src={chatIcon} ></img>
                  <p>Чат</p>
                </div>
              </div>
            </div>
            <div className="contact-student">
              <div className="contactStudent-btn">Контакти</div>
              <div>
                <p>studik2006@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mainSection-student">
          <div className="sections-profile">
            <div className="myLessons-student">
              <div className="myLessons-btn">Мої заняття</div>
              <div className="block-lessons">
                <div className="item-lessons" onClick={() => setLgShow(true)}
>
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
     

      <Button onClick={() => setLgShow(true)}></Button>

<Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
       
       <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="content-modal-window">
        <div className="mentor-section">
            <div className="subtitle-mentor-section"> Ментор:</div>
            <div className="just-text-in-mentor-section">
              Менторіна Батьківна
              </div>
             </div>
             <div className="mentor-section">
            <div className="subtitle-course-section"> Назва курсу:</div>
            <div className="just-text-in-mentor-section">
              Підготовка до спортивних змагань
              </div>
             </div>
             <div className="mentor-section">
            <div className="subtitle-course-section"> Мій статус:</div>
            <div id="status-active-studying"className="just-text-in-mentor-section">
              Навчаюсь в цього ментора
              </div>
             <div className="mentor-section-about">
                <div className="subtitle-course-section"> Про курс:</div>
                <div id="description--about" className="just-text-in-mentor-section">
                Якийсь опис, який мені слід розтягнути більш, ніж на 5 слів, щоб подивитись, як всьо тутоньки виглядає, дякую за розуміння.
                  </div>
             </div>
             <div className="section-for-btns">
             <button className="continue--studying-btn" onClick={() => setLgShow(false)}>
              Продовжити навчання
             </button>
             <button className="end--studying-btn" onClick={handleButtonClick}> 
              Завершити навчання
             </button> 
             </div>
             </div>
        </div>

        </Modal.Body>
        <Modal.Footer className="footer-style-modal"></Modal.Footer>
      </Modal>


      <Button onClick={() => setnewLgShow(true)}></Button>
      <Modal
        size="lg"
        show={lgnewShow}
        onHide={() => setnewLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
       
       <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body>
        {/* <div className="content-modal-window">
        <div className="mentor-section">
            <div className="subtitle-mentor-section"> Ментор:</div>
            <div className="just-text-in-mentor-section">
              Менторіна Батьківна
              </div>
             </div>
             <div className="mentor-section">
            <div className="subtitle-course-section"> Назва курсу:</div>
            <div className="just-text-in-mentor-section">
              Підготовка до спортивних змагань
              </div>
             </div>
             <div className="mentor-section">
            <div className="subtitle-course-section"> Мій статус:</div>
            <div id="status-active-studying"className="just-text-in-mentor-section">
              Навчаюсь в цього ментора
              </div>
             <div className="mentor-section-about">
                <div className="subtitle-course-section"> Про курс:</div>
                <div id="description--about" className="just-text-in-mentor-section">
                Якийсь опис, який мені слід розтягнути більш, ніж на 5 слів, щоб подивитись, як всьо тутоньки виглядає, дякую за розуміння.
                  </div>
             </div>
             <div className="section-for-btns">
             <button className="continue--studying-btn" onClick={() => setLgShow(false)}>
              Продовжити навчання
             </button>
             <button className="end--studying-btn" onClick={() => setnewLgShow(true)}> 
              Завершити навчання
             </button> 
             </div>
             </div>
        </div> */}
        <div className="new-modal-content">
          <div className="new-modal-title">
          Ви впевнені, що хочете покинути цей урок?
          </div>
          <div className="subtitle-new-modal">
          Ви збираєтеся покинути урок Підготовка до спортивних змагань від ментора Менторіна Батьківна
          </div>
          <div className="new-buttons-section-modal">
            <button className="new-modal-finish-study" >
              Так, покинути
            </button>
            <button className="new-modal-continue-study" onClick={() => setnewLgShow(false)}>
              Ні, продовжити навчання
            </button>
          </div>
        </div>

        </Modal.Body>
        <Modal.Footer className="footer-style-modal"></Modal.Footer>
      </Modal>
    </div>

    
  );
}

export default ProfileStudent;