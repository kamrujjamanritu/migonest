import React from 'react';

const PaymentSuccess = ({ nextFormStep }) => {
  return (
    <div className="pay">
      <div className="pay__inner">
        <img src="assets/images/success.png" alt="Image" />
        <h1>Payment Successful</h1>
        <p>Your application has been succesfully submitted to university. Check your application status regularly in Admission tab.</p>
        <a className="frm-btn" onClick={nextFormStep}>Check Status</a>
      </div>
    </div>
  );
}

export default PaymentSuccess;
