import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const viewReminder = () => {
  return ( 
    <div className="reminder-bg">
    <div class="nav">
      <Nav></Nav>
    </div>
    <div className="reminder-wrapper">
      <div className="left-side">
        <img src={person}></img>
        <img src={reminderIcon}></img>
        <img src={notesIcon}></img>
        <img src={chatIcon}></img>
      </div>
      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
          <Link to="/create-reminder"><button>Створити нагадування</button></Link>
        </div>
        <div className="bottom-content">
          <div className="content-block">
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
            <div class="item-content">
              <div className="date">
              23.04.2023
              </div>
              <div className="info">
                <h2>Подивитись курс по html-css</h2>
                <p>Kol paratotal. Vill gigant. Pyng Filip Abrahamsson. Ultralaling dedat monovis. Paranade. Epitosenade Claes Eriksson. Kristina Lindgren demotropi. Fulbryt spetrehåfäre pynas. 
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
   );
}
 
export default viewReminder;