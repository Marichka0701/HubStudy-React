import '../Styles/section-1.css';
import mainPhoto from '../img/photo-main.png';

const SectionOne = () => {
  return ( 
    <div className="section-1">
        <div className="section-1-info">
            <h1 className="main-title">Learn with us!</h1>
          <div className="main-paragraph">
            <p>Lörem ipsum bitårat plafaspeligt. Flipperförälder susade dest alogi och kompetensväxling kvasipp. Sora
              reanårade stereotik. Makrosk fåtufiliga förutom krorat, henifiera nydektigt, annonsblockerare. Tradade
              prerel inte jabor bongen ande svajpa. </p>
          </div>
          <div className="main-buttons">
            <button className="sign_up button">Обрати наставника</button>
            <button className="sign_in  button">Стати наставником</button>
          </div>
        </div>
       <div className="images">
        <img className='imageSection-1' src= {mainPhoto} alt="" />
      </div> 
      </div>
   );
}
 
export default SectionOne;