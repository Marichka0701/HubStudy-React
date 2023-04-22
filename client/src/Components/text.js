import Nav from '../Components/main/Nav.js';
import axios from "axios"
import { useState } from 'react';

import Main from '../Components/main/Main.js';
import Footer from '../Components/main/Footer.js';




const handleSubmit = async (req, res) => {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form)

  try {
    const response = await axios.post('http://localhost:3001/text', formData);

    if (response.ok) {
      console.log('Фото успішно завантажено');
      // Додаткові дії після успішного завантаження фото
    } else {
      console.error('Помилка при завантаженні фото');
    }
  } catch (error) {
    console.error(error);
  }
});
}


const TestPage = () => {



  return (
            <form id="registrationForm">
                <input type="file" name="image" />
                <button onClick={handleSubmit} type="submit">Зареєструватися</button>
            </form>
   );
}

export default TestPage;
