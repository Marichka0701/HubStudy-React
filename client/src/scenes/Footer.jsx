import FooterStyle from '../Styles/footer.css';

import "../Styles/footer.css"
import { Formik } from "formik";
import * as yup from "yup";


const userQuestionSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  phoneNumber: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  text: yup.string().required("reqiured")
});

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  text: ""
}

const Footer = () => {

  const createUserQuestion = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3001/userquestion/",
      {
        method: "POST",
        body: formData,
      }
    );
    onSubmitProps.resetForm();
};


  const handlerFormSubmit = async (values, onSubmitProps) => {
    await createUserQuestion(values, onSubmitProps);
  };

  return (
    <footer class="footer">
      <div className="contact-info">
        <div className="block">
          <h3>Про HubStudy:</h3>
            <ul>
              <li><a href="">Про нас</a></li>
              <li><a href="">Відгуки</a></li>
              <li><a href="">Співпраця</a></li>
              <li><a href="">Контакти</a></li>
            </ul>
        </div>
        <div className="block">
          <h3>Про HubStudy:</h3>
          <ul>
            <li><a href="">Про нас</a></li>
            <li><a href="">Відгуки</a></li>
            <li><a href="">Співпраця</a></li>
          </ul>
        </div>
      </div>
      <div className="content-footer">
        <div className="social-net">
            <h2 className="title-social">Ми в соцмережах: </h2>
          <div className="item-social">
            <div className="image-item">
              <img src="./images/insta.png" alt="" />
            </div>
            <div className="link">
              <a className='link-social' href="https://msng.link/o/?HubStudy=ig">Instagram</a>
            </div>
          </div>
          <div className="item-social">
            <div className="image-item">
              <img src="./images/facebook (2).png" alt="" />
            </div>
            <div className="link">
              <a className='link-social' href="https://www.facebook.com/HubStudy">Facebook</a>
            </div>
          </div>
          <div className="item-social">
            <div className="image-item">
              <img src="./images/telegram (2).png" alt=""/>
            </div>
            <div className="link">
              <a className='link-social' href="https://msng.link/o/?HubStudy=tg">Telegram</a>
            </div>
          </div>
        </div>
          <Formik onSubmit={handlerFormSubmit}
                  initialValues={initialValues}
                  validationSchema={userQuestionSchema}>
              {({
                    values,
                    handleChange,
                    handleBlur

                    }) => (
            <form action="#">
              <div className="form">
                <h2 className="title-form">Введіть ваші дані та зв’яжіться з нами:</h2>
                <div className="item">
                  <label for="name">Ім'я</label>
                  <input type="text" value={values.firstName} onBlur={handleBlur} onChange={handleChange} name="firstName" id="name" placeholder="Джон" />
                </div>
                <div className="item">
                  <label for="surname">Прізвище</label>
                  <input type="text" value={values.lastName} onBlur={handleBlur} onChange={handleChange} name="lastName" id="surname" placeholder="Джонсонюк" />
                </div>
                <div className="item">
                  <label for="email">Email</label>
                  <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} name="email" id="email" placeholder="fakeEmail@gmail.com" />
                </div>
                <div className="item">
                  <label for="email">Email</label>
                  <input type="email" value={values.email} onBlur={handleBlur} onChange={handleChange} name="email" id="email" placeholder="fakeEmail@gmail.com" />
                </div>
                <div>
                  <label for="comment">Ваш коментар</label>
                  <input type="text" value={values.text} onBlur={handleBlur} onChange={handleChange} name="text" id="comment" />
                </div>
                <button type="submit" className="submit-button">Надіслати</button>

              </div>
            </form>
              )}
          </Formik>
      </div>
    </footer>
   );
}

export default Footer;
