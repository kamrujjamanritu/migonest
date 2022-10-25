import React from 'react';
import Link from 'next/link';

const EmailVeri = () => {
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
              <h4>Email Verification</h4>
              <p>We have just sent a verification code to user@email.com</p>
              <form action="#" className="email-veri">
                <div className="veri-code">
                  <input type="text" name="veriCodeOne" id="veriCodeOne" />
                  <input type="text" name="veriCodeTwo" id="veriCodeTwo" />
                  <input type="text" name="veriCodeThree" id="veriCodeThree" />
                  <input type="text" name="veriCodeFour" id="veriCodeFour" />
                  <input type="text" name="veriCodeFive" id="veriCodeFive" />
                </div>
                <div className="repat">
                  <a>Send the code again</a>
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

export default EmailVeri;
