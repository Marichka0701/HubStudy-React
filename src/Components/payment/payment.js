import Header from '../../Components/main/Nav';
import '../../Components/payment/payment.css';

const payment = () => {
  return ( 
  <div className='page-payment'>
    <Header></Header>
    <h1>Оплатити навчання</h1>
    <div className='block-inputs-payment'>
      <div className='input-payment'>
        <label for="sum">Сума*</label>
        <input type="text" name="sum" id="sum" placeholder="UAH" required/>
      </div>
      <div className='input-payment'>
        <label for="destinationPayment">Призначення платежу*</label>
        <input type="text" name="destinationPayment" id="destinationPayment" placeholder="ІТ - бек-енд розробник" required/>
      </div>
      <div className='input-payment'>
        <label for="dataOf">Термін закінчення*</label>
        <input type="text" name="dataOf" id="dataOf" placeholder="MM/YY" required/>
      </div>
      <div className='input-payment'>
        <label for="cards">Введіть номер карти*</label>
        <input type="text" name="cards" id="cards" placeholder="5780 **** *** **** ***" required/>
      </div>
      <div className='input-payment'>
        <label for="cvc">Введіть CVVC*</label>
        <input type="text" name="cvc" id="cvc" placeholder="***" required/>
      </div>
      <div className='buttons-payment'>
      <button className='apple-pay'>
      Оплатити через  ApplePay
      </button>
      <button className='g-pay'>
      Оплатити через 
 Gpay
      </button>
    </div>
    </div>
    
    
  </div> 
  );
}
 
export default payment;