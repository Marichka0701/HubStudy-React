import Header from '../main/Nav';
import "../../Styles/sign-in/sign-in.css";

import { Link } from 'react-router-dom';


const SignInPage = () => {
  // $('#email, #password').bind('keyup', function () {
  //   if (allFilled())
  //     $('#register').removeAttr('disabled');
  // });
  
  // function allFilled() {
  //   let filled = true;
  
  //   $('body input').each(function () {
  //     if ($(this).val() == '')
  //       filled = false;
  //   });
  
  //   return filled;
  // }

  return (
    <div className='form-sign-in'>
      <div class="wrapper_sign-in">
        <Header></Header>
        <div class="titles">
          <h2>Вхід в особистий кабінет</h2>
          <h3>Введіть ваші дані</h3>
        </div>
        <form action="#" method="post" enctype="multipart/form-data"
          className="form">
          <div className="label-input">
            <label for="email" className="label">
              Електронна адреса
            </label>
            <input
              type="email"
              id="email"
              autocomplete="off"
              className="input-sign-in"
              placeholder="fake@gmail.com"
              required
            />
          </div>
          <div className="label-input">
            <label for="password" className="label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className="input-sign-in"
              placeholder="Пароль"
              minlength="6"
              maxlength="25"
              required
            />
          </div>

          <div className="buttons1">
            <Link to="/profile-student">
              <button type="submit" className="log-in">Увійти</button>
            </Link>
          </div>
          <div className="bottom-elem">
            <div className="text">Ще не маєте акаунта?
            </div>
            <div>
              <Link to="/registration">
                <button className="button-reg">Зареєструватись</button>
              </Link>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
}

export default SignInPage;