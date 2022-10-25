import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
const Experience = () => {
  const [startDateJob, setStartDateJob] = useState();
  const [endDateJob, setEndDateJob] = useState();
  return (
    <div className="form__group-inner">
      <div className="form__group-intro">
        <h3>Experience</h3>
        <p>Please be mindfull filling all the fields</p>
      </div>
      <div className="form-input-group">
        <div className="form-input-group-single">
          <label htmlFor="experienceJob">Job Title</label>
          <input type="text" name="experienceJob" id="experienceJob" placeholder='Working student' required="required" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="experienceJobType">Job Type</label>
          <input type="text" name="experienceJobType" id="experienceJobType" placeholder='Part-time' required="required" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="experienceJobCompany">Company Name</label>
          <input type="text" name="experienceJobCompany" id="experienceJobCompany" placeholder='ABC Company' required="required" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="experienceJobCompanyLocation">Location</label>
          <input type="text" name="experienceJobCompanyLocation" id="experienceJobCompanyLocation" placeholder='Berlin, Germany' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="experienceJobStartDate">Start Date</label>
            <div className="input-icon">
              <DatePicker selected={startDateJob} onChange={(date) => setStartDateJob(date)} id="experienceJobStartDate" placeholderText='Start Date' />
              <IoCalendarOutline />
            </div>
          </div>
          <div className="form-input-group-single">
            <label htmlFor="experienceJobEndDate">End Date</label>
            <div className="input-icon">
              <DatePicker selected={endDateJob} onChange={(date) => setEndDateJob(date)} id="experienceJobEndDate" placeholderText='End Date' />
              <IoCalendarOutline />
            </div>
          </div>
        </div>
        <div className="form-input-group-single">
          <a className='add-button'>Add Experience</a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
