import React from 'react';
import Link from 'next/link';

const PhoneVerification = () => {
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
                            <h4>Phone Verification</h4>
                            <p>We have just sent a verification code to +49 12345678</p>
                            <form action="#" className="email-veri">
                                <div className="veri-code">
                                    <input type="text" name="veriCodeOnePhone" id="veriCodeOnePhone" />
                                    <input type="text" name="veriCodeTwoPhone" id="veriCodeTwoPhone" />
                                    <input type="text" name="veriCodeThreePhone" id="veriCodeThreePhone" />
                                    <input type="text" name="veriCodeFourPhone" id="veriCodeFourPhone" />
                                    <input type="text" name="veriCodeFivePhone" id="veriCodeFivePhone" />
                                </div>
                                <div className="repat">
                                    <a>Send the code again</a>
                                    <p><a>Change number</a></p>
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

export default PhoneVerification;
