import "../../Styles/notes/notes.css";
import Nav from "../main/Nav"
import Footer from "../main/Footer";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconMenu from "../../img/icon-menu.png";
import '../../Styles/notes/notes.css';
import iconBlackBell from "../../img/black-bell-notes.png";
import iconWhiteBell from "../../img/white-bell.png";
import iconFocusedNote from "../../img/focused-notes.png";

const viewNotes = () => {
  return ( 
    <div className="page">
      <Nav></Nav>
      <div className="page-wrapper">
        <div className="menu-section">
          <div className="menu-content">
            <div className="avatar">
             <Link to="/mentorship">
             <img className="avatar-icon" src={iconMenu} alt="icon menu"></img>
             </Link>
            </div>
            <div className="icon-wrapper">
              <Link to="#">
              <div className="bell"></div>
              </Link>
            </div>
            <div className="icon-wrapper">
              <img class="static-icon" src={iconFocusedNote} alt="icon note"></img>
            </div>
            <div className="icon-wrapper">
            <Link to="#">
              <div className="chat"></div>
              </Link>

            </div>
          </div>
        </div>
        <div className="right-section-wrapper">
          <div className="upper-section">
            
              <h1 className="title-notes">
                Нотатки
              </h1>
         
            <Link to="/create-notes">
              <button className="create-note">
                Створити нотатку
              </button>
            </Link>
           

          </div>
          <div className="notes-section">
            <div className="notes-wrapper">
            <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                  <strong><strong>Нотатка 1</strong></strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
                  </div>
              </div>
             </div>
             <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                    <strong><strong>Нотатка 1</strong></strong>
                    
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
                  </div>
              </div>
             </div>
             <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                    <strong>Нотатка 1</strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
                  </div>
              </div>
             </div>
             <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                    <strong>Нотатка 1</strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
                  </div>
              </div>
             </div>
             <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                    <strong>Нотатка 1</strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
                  </div>
              </div>
             </div>
             <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                    <strong>Нотатка 1</strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    Сьогодні я добре справився з завданням Менторіни Батьківни та отримав від неї найвищу оцінку в групі. Почуваюсь щасливим. Але слід повторити тему 5 на наступний раз, адже в ній я не сильний.Сподіваюсь, я встигну підготуватись до наступного завдання та до спортивних змагань.
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
 
export default viewNotes;






