import React, { useState } from 'react';
import Link from 'next/link';

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

const UniContact = () => {

  const [phoneNumber3, setPhoneNumber3] = useState()

  return (
    <div className="auth-wrap auth-uni">
      <div className="auth-navbar-wrapper">
        <div className="auth-navbar auth-navbar-special">
          <Link href="/">
            <a className='auth-logo'>Migonest</a>
          </Link>
          <div className="auth-navbar-right">
            <Link href="/auth-in">
              <a>Log In</a>
            </Link>
            <Link href="/auth">
              <a>Sign up</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="auth-body">
        <div className="auth-uni-inner">
          <h4>Let us know about you & your university</h4>
          <p>Please provide all the information requested below, Migonest will contact you with the next steps</p>
          <form action="#">
            <div className="group-for">
              <h6>University Information</h6>
              <div className="auth-group">
                <div className="auth-group-single">
                  <label htmlFor="authUniversity">University</label>
                  <input type="text" name="auth-University" id="authUniversity" />
                </div>
              </div>
              <div className="auth-group">
                <div className="auth-group-single">
                  <label htmlFor="authLocation">Location</label>
                  <input type="text" name="auth-Location" id="authLocation" />
                </div>
              </div>
            </div>
            <div className="group-for">
              <h6>Contact Information</h6>
              <div className="auth-group">
                <div className="auth-group-single">
                  <label htmlFor="authFullName">Full Name</label>
                  <input type="text" name="auth-FullName" id="authFullName" />
                </div>
              </div>
              <div className="auth-group">
                <div className="auth-group-single">
                  <label htmlFor="authLocation">Email <span>(Please provide your official email)</span></label>
                  <input type="text" name="auth-Location" id="authLocation" />
                </div>
              </div>
              <div className="auth-group">
                <div className="form-input-group-single form-input-number mb-0">
                  <label htmlFor="personalInfoNumber">Phone Number <span>(Please provide your official phone number)</span></label>
                  <PhoneInput
                    value={phoneNumber3}
                    onChange={setPhoneNumber3}
                    id="personalInfoNumber"
                    limitMaxLength={true}
                    international={true}
                    defaultCountry="DE"
                  />
                </div>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UniContact;
