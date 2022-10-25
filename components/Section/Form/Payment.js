import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const Payment = ({ nextFormStep }) => {

  const [startDate, setStartDate] = useState();

  return (
    <div className="payment-optional payment-optional-th">
      <div className="payment-option payment-option-th">
        <div className="payment__left">
          <div className="payment__methods">
            <h6>Choose a payment method</h6>
            <div className="payment__items payment-item--alt">
              <input type="radio" id="mastercard" name="paymentMeth" value="mastercard" />
              <label htmlFor="mastercard" className='payment-item'>
                <img src="/assets/images/mastercard.png" alt="Payment" />
              </label>
              <input type="radio" id="visa" name="paymentMeth" value="visa" />
              <label htmlFor="visa" className='payment-item'>
                <img src="/assets/images/visa.png" alt="Payment" />
              </label>
              <input type="radio" id="paypal" name="paymentMeth" value="paypal" />
              <label htmlFor="paypal" className='payment-item'>
                <img src="/assets/images/paypal.png" alt="Payment" />
              </label>
            </div>
          </div>
        </div>
        <div className="payment__right">
          <ul>
            <li>Application fee <span>€75</span></li>
            <li>Migonest fee <span>€19.99</span></li>
            <hr />
            <li>Total <span>€94.99</span></li>
          </ul>
        </div>
      </div>
      <div className="payment-option payment-option-th">
        <div className="payment__left">
          <div className="card-info">
            <div className="form-input-group-single">
              <label htmlFor="cardName">Card Holder Name</label>
              <input type="text" name="cardName" id="cardName" placeholder='Card Holder Name' required="required" />
            </div>
            <div className="form-input-group-single">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" name="cardNumber" id="cardNumber" placeholder='Enter Card Number' required="required" />
            </div>
            <div className="form-input-group-single-group mb-0">
              <div className="form-input-group-single">
                <label htmlFor="cardExpireDate">Start Date</label>
                <div className="input-icon">
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="cardExpireDate" placeholderText='Start Date' />
                  <IoCalendarOutline />
                </div>
              </div>
              <div className="form-input-group-single">
                <label htmlFor="cvcNumber">CVC Number</label>
                <input type="number" name="cvcNumber" id="cvcNumber" placeholder='Enter CVC Number' required="required" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment__right">
          <a className="frm-btn frm-btn--alt" onClick={nextFormStep}>Proceed</a>
        </div>
      </div>
    </div>
    // <div className="payment-option">
    //   <div className="payment__left">

    //     <div className="payment-box">
    //       <h5>Information Technology</h5>
    //       <p>Master</p>
    //       <p>Summer 2022</p>
    //       <div className="payment__university">
    //         <div className="payment__university-thumb">
    //           <img src="/assets/images/logo/cambridge-logo.png" alt="Cambridge" />
    //         </div>
    //         <div className="payment__university-content">
    //           <h6>University of Cambridge</h6>
    //           <p>Cambridge, UK</p>
    //         </div>
    //       </div>
    //     </div>
    // <div className="payment__methods">
    //   <h6>We accept payment with</h6>
    //   <div className="payment__items payment-item--alt">
    //     <input type="radio" id="mastercard" name="paymentMeth" value="mastercard" />
    //     <label htmlFor="mastercard" className='payment-item'>
    //       <img src="/assets/images/mastercard.png" alt="Payment" />
    //     </label>
    //     <input type="radio" id="visa" name="paymentMeth" value="visa" />
    //     <label htmlFor="visa" className='payment-item'>
    //       <img src="/assets/images/visa.png" alt="Payment" />
    //     </label>
    //     <input type="radio" id="paypal" name="paymentMeth" value="paypal" />
    //     <label htmlFor="paypal" className='payment-item'>
    //       <img src="/assets/images/paypal.png" alt="Payment" />
    //     </label>
    //   </div>
    // </div>
    // <div className="card-info">
    //   <div className="form-input-group-single">
    //     <label htmlFor="cardName">Card Holder Name</label>
    //     <input type="text" name="cardName" id="cardName" placeholder='Card Holder Name' required="required" />
    //   </div>
    //   <div className="form-input-group-single">
    //     <label htmlFor="cardNumber">Card Number</label>
    //     <input type="text" name="cardNumber" id="cardNumber" placeholder='Enter Card Number' required="required" />
    //   </div>
    //   <div className="form-input-group-single-group mb-0">
    //     <div className="form-input-group-single">
    //       <label htmlFor="cardExpireDate">Start Date</label>
    //       <div className="input-icon">
    //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="cardExpireDate" placeholderText='Start Date' />
    //         <IoCalendarOutline />
    //       </div>
    //     </div>
    //     <div className="form-input-group-single">
    //       <label htmlFor="cvcNumber">CVC Number</label>
    //       <input type="number" name="cvcNumber" id="cvcNumber" placeholder='Enter CVC Number' required="required" />
    //     </div>
    //   </div>
    // </div>
    //   </div>
    //   <div className="payment__right">
    //     <ul>
    //       <li>Application fee <span>€75</span></li>
    //       <li>Migonest fee <span>€19.99</span></li>
    //       <hr />
    //       <li>Total <span>€94.99</span></li>
    //     </ul>
    //     <a className="frm-btn frm-btn--alt" onClick={nextFormStep}>Proceed</a>
    //   </div>
    // </div>
  );
}

export default Payment;
