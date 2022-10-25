import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Experience = () => {

  const [startDateFour, setStartDateFour] = useState();
  const [startDateFive, setStartDateFive] = useState();

  return (
    <>
      <div className="form-sing">
        <div className='form-container-single'>
          <div className="form-group-intro">
            <h2>Experience</h2>
            <p>Please be mindfull filling all the fields</p>
          </div>
          <div className='form-single'>
            <div className="form-single__group">
              <label htmlFor="applyJob">Job Title</label>
              <input type="text" name="apply__Job" id="applyJob" placeholder='Working student' />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyJobType">Job Type</label>
              <input type="text" name="apply__JobType" id="applyJobType" placeholder='Part-time' />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyJobCompany">Company Name</label>
              <input type="text" name="apply__JobCompany" id="applyJobCompany" placeholder='ABC Company' />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyJobLocation">Location</label>
              <input type="text" name="apply__JobLocation" id="applyJobLocation" placeholder='Berlin, Germany' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <p>Start Date</p>
                <div className='input-img'>
                  <DatePicker selected={startDateFour} onChange={(date) => setStartDateFour(date)} />
                  <img src="assets/images/calendar.png" alt="Calendar" />
                </div>
              </div>
              <div className="form-single__group">
                <p>End Date</p>
                <div className='input-img'>
                  <DatePicker selected={startDateFive} onChange={(date) => setStartDateFive(date)} />
                  <img src="assets/images/calendar.png" alt="Calendar" />
                </div>
              </div>
            </div>
            <a className='form-act'>Add Experience</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
