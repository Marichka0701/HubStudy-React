import Header from '../main/Nav';
import '../../Styles/main/reset.css';
import '../../Styles/sign-up/Registration.css';
import userPhoto from '../../img/user.png';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const Registration = () => {
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const handlePhotoUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = function (event) {
  //     const img = new Image();
  //     img.onload = function () {
  //       const canvas = document.createElement('canvas');
  //       const ctx = canvas.getContext('2d');

  //       canvas.width = 200;
  //       canvas.height = 200;
  //       ctx.drawImage(img, 0, 0, 200, 200);

  //       const dataUrl = canvas.toDataURL('image/jpeg');
  //       setSelectedPhoto(dataUrl);
  //     };
  //     img.src = event.target.result;
  //   };
  //   reader.readAsDataURL(file);

  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const handlePhotoUpload = (event) => {
  //   setSelectedPhoto(URL.createObjectURL(event.target.files[0]));
  // };

  //   const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const handlePhotoUpload = (event) => {
  //   const file = event.target.files[0];

  //   // перевірка розміру файлу
  //   if (file.size > 5 * 1024 * 1024) {
  //     alert('Файл занадто великий. Максимальний розмір файлу - 5 МБ.');
  //     return;
  //   }

  //   const reader = new FileReader();

  //   reader.onload = function (event) {
  //     const img = new Image();
  //     img.onload = function () {
  //       // перевірка розміру зображення
  //       if (img.width > 1024 || img.height > 1024) {
  //         alert('Розмір зображення занадто великий. Максимальний розмір - 1024х1024 пікселів.');
  //         return;
  //       }

  //       const canvas = document.createElement('canvas');
  //       const ctx = canvas.getContext('2d');

  //       canvas.width = 200;
  //       canvas.height = 200;
  //       ctx.drawImage(img, 0, 0, 200, 200);

  //       const dataUrl = canvas.toDataURL('image/jpeg');
  //       setSelectedPhoto(dataUrl);
  //     };
  //     img.src = event.target.result;
  //   };
  //   reader.readAsDataURL(file);
  // };

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        let width = img.width;
        let height = img.height;

        // Check if the image is too big
        if (width > 250 || height > 250) {
          // Calculate the aspect ratio
          const aspectRatio = width / height;

          // If the width is greater than the height, set the width to 250 and adjust the height proportionally
          if (width > height) {
            width = 250;
            height = Math.round(250 / aspectRatio);
          }
          // Otherwise, set the height to 250 and adjust the width proportionally
          else {
            height = 250;
            width = Math.round(250 * aspectRatio);
          }
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg');
        setSelectedPhoto(dataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };


  return (
    <div className='container_registration mentor-page'>
      <Header></Header>
      <h1 className='title-register'>
        Створення особистого кабінету(як наставник)
      </h1>
      <p className='paragraph-register'>
        Заповніть форму:
      </p>
      <div className='form-register'>
        <div className='photo-register'>
          <div class="user-photo">
            {/* <img className='photo-form' src={userPhoto}></img> */}
          </div>
          <div className='upload-photo'>
            <form className='upload-photo' action='#'>


              <input className='upload' type="file" onChange={handlePhotoUpload} />
              {selectedPhoto && <img src={selectedPhoto} alt="Selected" />}
              {/* <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      {selectedPhoto && <img src={selectedPhoto} alt="Selected" />} */}



              {/* <input className='upload-photo-user' type="file" onChange={handlePhotoUpload} accept="image/*" />
              {selectedPhoto && <img src={selectedPhoto} alt="Uploaded photo" />} */}


              <label className='upload' for="file">Додати фото профілю(250*250)</label>
              {/* <input className='upload' type='file'></input> */}
              {/* <input type="file" onChange={handlePhotoUpload} accept="image/*" />
              {selectedPhoto && <img src={selectedPhoto} alt="Uploaded photo" />} */}


              {/* <input type="file" onChange={handlePhotoUpload} accept="image/*" />
                {selectedPhoto && (
                  <div className="photo-wrapper">
                    <img src={selectedPhoto} alt="Uploaded photo" width={200} height={200} />
                  </div> */}
              {/* )} */}
            </form>
          </div>
        </div>
        <form action='#'>
          <div className="form-form-register">
            <div className="item-form retreat">
              <label for="name">Ім'я</label>
              <input type="text" name="name" id="name" placeholder="Джон" />
            </div>
            <div className="item-form retreat">
              <label for="surname">Прізвище</label>
              <input type="text" name="surname" id="surname" placeholder="Джонсонюк" />
            </div>
            <div className="item-form retreat">
              <label for="city">Місто, країна</label>
              <input type="text" name="city" id="city" placeholder="Львів, Україна" />
            </div>
            <div className="item-form retreat">
              <label for="email">Електронна адреса</label>
              <input type="email" name="email" id="email" placeholder="johnsonyuk83@gmail.com" />
            </div>
            <div className='item-form retreat'>
              <label for='password'>Пароль</label>
              <input type="password" name="password" id="password" placeholder="**************" />
            </div>
            <div className='item-form retreat'>
              <label for='repeat-password'>Повторіть пароль</label>
              <input className='password' type="password" name="repeat-password" id="repeat-password" placeholder="**************" />
            </div>


            <div class="mentorship-form-form">
              <div className='item-form retreat'>
                <label for='selection-form'>Напрям наставництва:</label>
                {/* <select className='selection-form' id='selection-form'>
                    <option disabled>Оберіть сферу</option>
                    <option>Уроки вокалу</option>
                    <option selected>Плавання</option>
                    <option>ІТ-сфера</option>
                  </select> */}
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
              <div className='item-form retreat experience'>
                <label for='experience-number'>Досвід</label>
                <input className='experience-number' type="text" name="experience-number" id="experience-number" placeholder="7" />
              </div>
              <div className='item-form retreat'>
                <label for='age-form'>Вік</label>
                <input className='age-form' type="text" name="age-form" id="age-form" placeholder="24" />
              </div>
            </div>
            <div class="buttons-registration">
              <button type='submit' className="sign-up-form">Зареєструватись</button>
              <Link to="/student">
                <button type='submit' className="student-form">Реєстрація як учень</button>
              </Link>
              {/* <button type='submit' className="mentorship-form">Реєстрація як наставник</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;