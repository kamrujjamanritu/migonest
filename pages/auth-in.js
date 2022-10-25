import React from 'react';
import Link from 'next/link';

import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Sign = () => {
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
              <h4 className='bcdc'>Welcome Back to <Link href="/"><a>Migonest.</a></Link> </h4>
              <p className='acdc'>Not a member? <Link href="/auth"><a>Sign Up</a></Link></p>
              <form action="#" className="email-veri">
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
                <div className="reminder">
                  <div>
                    <input type="checkbox" name="for_pass" id="forPass" />
                    <label htmlFor='forPass'>Remember me</label>
                  </div>
                  <p><a>Forgot Password?</a></p>
                </div>
                <div className="auth-group mb-0">
                  <div className="auth-form-footer">
                    <button className='mt-0'>Log In</button>
                    <div className="auth-divider">
                      <hr />
                      <span>or</span>
                      <hr />
                    </div>
                    <button className='mt-0'><FcGoogle /> Log in with Google</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
