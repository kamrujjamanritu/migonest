import React from 'react';
import { HiOutlineExclamationCircle } from "react-icons/hi";
const Checkout = ({ nextFormStep }) => {
  return (
    <div className="payment-optional">
      <div className="note">
        <HiOutlineExclamationCircle />
        <p>Your application will be submitted to university after we recieive your payment</p>
      </div>
      <div className="payment-option">
        <div className="payment__left">
          <div className="payment-box">
            <h5>Information Technology</h5>
            <p>Master</p>
            <p>Summer 2022</p>
            <div className="payment__university">
              <div className="payment__university-thumb">
                <img src="/assets/images/logo/cambridge-logo.png" alt="Cambridge" />
              </div>
              <div className="payment__university-content">
                <h6>University of Cambridge</h6>
                <p>Cambridge, UK</p>
              </div>
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
      <div className="payment-option payment-option-alt mt-0">
        <div className="payment__left">
          <div className="payment__methods">
            <h6>We accept payment with</h6>
            <div className="payment__items">
              <div className="payment-item">
                <img src="/assets/images/mastercard.png" alt="Payment" />
              </div>
              <div className="payment-item">
                <img src="/assets/images/visa.png" alt="Payment" />
              </div>
              <div className="payment-item">
                <img src="/assets/images/paypal.png" alt="Payment" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment__right">
            <a className="frm-btn frm-btn--alt" onClick={nextFormStep}>Proceed</a>
          </div>
      </div>
    </div>

  );
}

export default Checkout;
