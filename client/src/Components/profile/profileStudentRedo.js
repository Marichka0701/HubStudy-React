import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import '../../Styles/profile/profileStudentRedo.css'
import photoStudent from "../../img/profileStudent.png";
import reminderIcon from "../../img/reminder-icon.png";
import notesIcon from "../../img/notes-icon.png";
import chatIcon from "../../img/chat-icon.png";
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
              <input className="nameStudent"></input>
            </div>
            <div>
              <h2 className="surnameStudent">Батькович</h2>
            </div>
          </div>
          <div>
            <p>Студент</p>
          </div>
        </div>

      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
            <img className="photoStudent-photo" width={300} src={photoStudent} ></img>
          </div>
          </div>
      </div>
    </div>
   );
}

export default profileStudentRedo;
