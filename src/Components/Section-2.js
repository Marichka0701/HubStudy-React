import '../Styles/section-2.css';
import itemOne from '../img/benefits-item-1.png';
import itemTwo from '../img/benefits-item-2.png';
import itemThree from '../img/benefits-item-3.png';
import itemFour from '../img/benefits-item-4.png';
import itemFive from '../img/benefits-item-5.png';
import itemSix from '../img/benefits-item-6.png';

const SectionTwo = () => {
  return ( 
    <div className="section-2">
        <h2 className="title-section-2">Our benefits:</h2>
        <div className="benefits">
          <div className="benefit-item">
            <div className="benefit-image">
              <img src= {itemOne} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Найкрутіші наставники:
                обирайте тих, хто з вами на одній хвилі та вміє знайти підхід до кожного
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src= {itemTwo} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Якість:
                ми забезпечуємо кваліфікацію наших наставників, перевіряючи їхні професійні знання та досвід
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemThree}alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Різноманітність форматів: навчайтесь індивідуально з наставником, в групі або відвідуйте вебінари
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemFour} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Широкий вибір послуг:
                ви знайдете наставника у будь - якій сфері!
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemFive} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Гнучкий графік:
                обирайте час та займайтесь тоді, коли вам буде зручно
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <div className="benefit-image">
              <img src={itemSix} alt="" />
            </div>
            <div className="benefit-paragraph">
              <p>
                Гнучкий графік:
                обирайте час та займайтесь тоді, коли вам буде зручно
              </p>
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default SectionTwo;