import React from 'react';
import Link from "next/link";

const PaymentFailed = ({ nextFormStep }) => {
  return (
    <div className="pay">
      <div className="pay__inner">
        <img src="assets/images/success.png" alt="Image" />
        <h1>Payment Failed</h1>
        <p>Something went terribly wrong here
          Don’t worry! Let’s try again</p>
        <Link href="/">
          <a className="frm-btn">Try again</a>
        </Link>
      </div>
    </div>
  );
}

export default PaymentFailed;
