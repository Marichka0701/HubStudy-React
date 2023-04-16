import Header from '../main/Nav';
import '../../Styles/main/reset.css';
import '../../Styles/sign-up/Registration.css';
import userPhoto from '../../img/user.png';
import axios from "axios"
import formik from "formik"

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialValues = {
  firstName: "",
  lastName: "",
  city: "",
  email: "",
  password: "",
  picturePath: ""
}

const Registration = () => {

  const navigate = useNavigate();
  const [formData, updateFormData] = useState(initialValues);

  const handleChange = (e) => {
    if (e.target.name === "picturePath") {
      // Отримати оригінальне ім'я файлу
      const fileName = e.target.files[0].name;
      setSelectedPhoto(URL.createObjectURL(e.target.files[0])); // Зберегти тимчасове посилання на фото
      updateFormData({
        ...formData,
        [e.target.name]: fileName // Зберегти оригінальне ім'я файлу
      });
    } else {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);

    const userResponse = await axios.post('http://localhost:3001/student/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response);
      console.log(formData);
      navigate("/sign-in");
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
  };

  const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
      <div className='container_registration'>
        <Header></Header>
        <h1 className='title-register'>
          Створення особистого кабінету
        </h1>
        <p className='paragraph-register'>
          Заповніть форму:
        </p>
        <div className='form-register'>
          <div className='photo-register'>
            <div class="user-photo">

            </div>
            <div className='upload-photo'>
              <form className='upload-photo' action='#' enctype="multipart/form-data">


              <input className='upload' type="file" name="picturePath" onChange={handleChange} />
              {selectedPhoto && <img src={selectedPhoto} alt="Selected" />}


              </form>
            </div>
          </div>
          <form action='#'>
            <div className="form-form-register">
            <div className="item-form retreat">
                <label for="name">Ім'я</label>
                <input type="text" onChange={handleChange} name="firstName" id="name" placeholder="Джон" />
              </div>
              <div className="item-form retreat">
                <label for="surname">Прізвище</label>
                <input type="text" onChange={handleChange} name="lastName" id="surname" placeholder="Джонсонюк" />
              </div>
              <div className="item-form retreat">
                <label for="city">Місто, країна</label>
                <input type="text" onChange={handleChange} name="city" id="city" placeholder="Львів, Україна" />
              </div>
              <div className="item-form retreat">
                <label for="email">Електронна адреса</label>
                <input type="email" onChange={handleChange} name="email" id="email" placeholder="johnsonyuk83@gmail.com" />
              </div>
              <div className='item-form retreat'>
                <label for='password'>Пароль</label>
                <input type="password" onChange={handleChange} name="password" id="password" placeholder="**************" />
              </div>
              <div className='item-form retreat'>
                <label for='repeat-password'>Повторіть пароль</label>
                <input className='password' type="password" name="repeat-password" id="repeat-password" placeholder="**************" />
              </div>
              <div class="buttons-registration">
                <button type='submit' onClick={handleSubmit} className="sign-up-form">Зареєструватись</button>
                <Link to="/mentorship">
                <button type='submit' className="mentorship-form">Реєстрація як наставник</button>
                </Link>

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default Registration;
