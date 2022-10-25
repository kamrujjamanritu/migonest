import React, { useState } from 'react';
import Link from 'next/link';

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

const PhoneInpu = () => {

  const [phoneNumberr, setPhoneNumberr] = useState()

  return (
    <div className="auth-wrap auth-common-wrap">
      <div className="auth-navbar-wrapper">
        <div className="auth-navbar auth-nav">
          <Link href="/">
            <a className='auth-logo'>Migonest</a>
          </Link>
        </div>
      </div>
      <div className="auth-body">
        <div className="auth-body-inner">
          <div className="auth-content">
            <div className="auth-inner-content">
              <h4>Welcome</h4>
              <p>Insert your phone number to continue</p>
              <form action="#" className="email-veri">
                <div className="form-input-group-single form-input-number mb-0">
                  <PhoneInput
                    value={phoneNumberr}
                    onChange={setPhoneNumberr}
                    id="personalInfoNumber"
                    limitMaxLength={true}
                    international={true}
                    defaultCountry="DE"
                  />
                </div>
                <div className="repat mt-0">
                  <p>We will text you a code to verify the phone number</p>
                </div>
                <button>Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneInpu;
