import React, { useState } from 'react';
import Link from 'next/link';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Create = () => {

    const [authstartDate, authsetStartDate] = useState();

    return (
        <div className="auth-wrap">
            <div className="auth-navbar-wrapper">
                <div className="auth-navbar auth-nav">
                    <Link href="/">
                        <a className='auth-logo'>Migonest</a>
                    </Link>
                </div>
            </div>
            <div className="auth-body">
                <div className="auth-up">
                    <div className="auth-up-left">
                        <div className="auth-up-left-inner">
                            <h1>Dream Big.</h1>
                            <h3>Pursue them <br /> <span>with</span> <Link href="/">Migonest</Link></h3>
                            <img src="assets/images/graduation-cap.png" alt="Image" />
                        </div>
                    </div>
                    <div className="auth-up-right">
                        <div className="auth-up-right-inner">
                            <div className="auth-up-right-box auth-form">
                                <h4>Sign Up to <Link href="/"><a>Migonest.</a></Link></h4>
                                <p>Already a member? <Link href="/auth-in"><a>Log in</a></Link></p>
                                <p>Are you a university representative? <Link href="/uni-contact"><a>Contact us</a></Link></p>
                                <form action="#" method="post">
                                    <div className="auth-group">
                                        <div className="auth-group-single">
                                            <label htmlFor="authFirstName">First Name</label>
                                            <input type="text" name="auth-first-name" id="authFirstName" />
                                        </div>
                                        <div className="auth-group-single">
                                            <label htmlFor="authLastName">Last Name</label>
                                            <input type="text" name="auth-last-name" id="authLastName" />
                                        </div>
                                    </div>
                                    <div className="auth-group">
                                        <div className="auth-group-single">
                                            <p>I am</p>
                                            <div className="check-gender">
                                                <input type="radio" id="authFemale" name="auth__gender" value="Female" />
                                                <label htmlFor="authFemale">Female</label>
                                                <input type="radio" id="authMale" name="auth__gender" value="Male" />
                                                <label htmlFor="authMale">Male</label>
                                                <input type="radio" id="authOther" name="auth__gender" value="Other" />
                                                <label htmlFor="authOther">Other </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="auth-group">
                                        <div className="auth-group-single auth-alt">
                                            <p>Date of Birth</p>
                                            <div className='input-icon input-ic-alt'>
                                                <DatePicker selected={authstartDate} onChange={(date) => authsetStartDate(date)} />
                                                <IoCalendarOutline />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="auth-group">
                                        <div className="auth-group-single">
                                            <label htmlFor="authMail">Email</label>
                                            <input type="email" name="auth-mail" id="authMail" />
                                        </div>
                                    </div>
                                    <div className="auth-group mb-0">
                                        <div className="auth-group-single auth-alt auth-passes">
                                            <label htmlFor='authPass'>Password</label>
                                            <div className='input-icon'>
                                                <input type="password" name="auth-pass" id="authPass" />
                                                <IoEyeOutline />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="auth-group">
                                        <div className="auth-form-footer">
                                            <button>Create an account</button>
                                            <div className="auth-divider">
                                                <hr />
                                                <span>or</span>
                                                <hr />
                                            </div>
                                            <button><FcGoogle /> Sign up with Google</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
