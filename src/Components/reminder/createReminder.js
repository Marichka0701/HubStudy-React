import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const createReminder = () => {
  return ( 
    <div className="reminder-bg">
      <div className="nav">
      <Nav></Nav>
      </div>
<div className="createReminder-wrapper">

       <div className="left-side">
        <img src={person}></img>
        <img src={reminderIcon}></img>
        <img src={notesIcon}></img>
        <img src={chatIcon}></img>
      </div>

      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
        </div>
        <div className="bottom-content">
          <div className="content-create">
            <div className="inform">
              <h2>Сповістити мене:</h2>
              <input type="date" id="date"></input>
            </div>
            <div className="theme">
            <h2>Тема:</h2>
              <input type="text" id="theme"></input>
            </div>
            <div className="details">
              <h2>
              Деталі:
              </h2>
              <textarea id="details" rows={10} cols={10} wrap="soft"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
   );
}
 
export default createReminder;