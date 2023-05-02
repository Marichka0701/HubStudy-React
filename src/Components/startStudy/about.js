import Nav from "../main/Nav";
import Form from 'react-bootstrap/Form';
import "../../Styles/startStudy/startStudy.css";


const AboutStudy = () => {
  return ( 
    <div className="page-start-study">
      <Nav></Nav>
      <div className="page-start-study-wrapper">
        <div className="page-start-study-content">
          <div className="upper-text-section">
            <h1 className="start-study-title">Заявка репетитору ПІБ</h1>
            <div className="start-study-under-title-text">
            Ång Cecilia Lindqvist vägg-tv. Ner antropopol. Jorade bifaktig Märta Lindqvist. Malongar gödogt. Omni-channel renovräkning fast.
            </div>
          </div>
          <div className="input-wrapper-start-study">

          <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Предмет
            </label>            
            </div>
            <Form.Select id='choose-sphere' name='choose-sphere' className='input-start-study-style' aria-label="Default select example">
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
                <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Тривалість уроку
            </label>
            </div>
            <Form.Select id='lesson-duration' name='lesson-duration' className='input-start-study-style' aria-label="Default select example">
                  <option selected disabled>Тривалість одного заняття</option>
                  <option value="1">40 хвилин</option>
                  <option value="2">1 година</option>
                  <option value="3">1,5 години</option>
                  <option value="4">2 години</option>
                  <option value="5">2,5 години</option>
                  <option value="6">3 години</option>
                </Form.Select>
                <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Періодичність
            </label>
            </div>
            <Form.Select id='lesson-frequency' name='lesson-frequency' className='input-start-study-style' aria-label="Default select example">
                  <option selected disabled>кількість занять в тиждень</option>
                  <option value="1">1 заняття</option>
                  <option value="2">2 заняття</option>
                  <option value="3">3 заняття</option>
                  <option value="4">4 заняття</option>
                  <option value="5">5 занять</option>
                  <option value="6">6 занять</option>
                  <option value="7"> занять</option>
                </Form.Select>
          </div>
          <div className="radio-buttons-wrapper">
          <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Місце занять
            </label>            
            </div>
            <div className="radio-buttons-wrapper">
           
         <div className="upper-buttons">
         <div className="radio-button">
         <label className="option" >У викладача</label>
            <input name="lessons-format" className="radio-option1" type="radio" value="offline" required/>
         </div>

                
         <div className="radio-button">
         <label className="option">Онлайн</label>
            <input name="lessons-format"  className="radio-option1" type="radio" value="online" required/>
         </div>

         </div>
              </div>
               
              <label className="over-input-texts">
              Формат занять
            </label>
              <div className="radio-buttons-wrapper">
             
      <div className="upper-buttons">
      <div className="radio-button">
            <label className="option">Індивідуальні</label>
            <input name="type-of-lessons" className="radio-option1" type="radio" value="individual" required/>
         </div>
   
         <div className="radio-button">
         <label className="option" >Групові</label>
            <input name="type-of-lessons" className="radio-option1" type="radio" value="group" required/>
         </div>
      </div>
           </div>
            </div>

            <div className="button-section-wrapper">
              <button className="send-button" type="sumbit">Надіслати</button>
            </div>
          </div>
        </div>  
      </div>
      
 
   );
}
 
export default AboutStudy;
