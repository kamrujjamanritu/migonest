import React, { useState } from 'react';
import Select from 'react-select';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Education = () => {

  const optionsEducation = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master's", label: "Master's" },
    { value: "PhD", label: "PhD" }
  ]

  const [startDateTwo, setStartDateTwo] = useState();
  const [startDateThree, setStartDateThree] = useState();

  const optionsSystem = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master's", label: "Master's" },
    { value: "PhD", label: "PhD" }
  ]

  return (
    <>
      {/* <section className='form-wrapper'>
        <div className='form-container'>
          <div className='form-container-single'>
            <div className="form-group-intro">
              <h2>Personal Information</h2>
              <p>Please be mindfull filling all the fields, university will contact you</p>
            </div>
            <div className='form-single'>
              <div className="form-single__group">
                <label htmlFor="applyFirstName">First Name</label>
                <input type="text" name="apply__first__name" id="applyFirstName" placeholder='First Name' />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="form-sing">
        <div className='form-container-single'>
          <div className="form-group-intro">
            <h2>Educational Background</h2>
            <p>Please be mindfull filling all the fields</p>
          </div>
          <div className='form-single'>
            <div className="form-single__group">
              <label htmlFor="applyUniversity">Institution Name</label>
              <input type="text" name="applyUniversity" id="applyUniversity" placeholder='School / college / university name' />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyLocation">Institution Location</label>
              <input type="text" name="applyLocation" id="applyLocation" placeholder='Science' />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyDegree">Degree</label>
              <Select options={optionsEducation} id="applyDegree" classNamePrefix='react-selet' placeholder="Select Degree" instanceId="Degree" />
            </div>
            <div className="form-single__group">
              <label htmlFor="applyProgramTwo">Study Program</label>
              <input type="text" name="applyProgramTwo" id="applyProgramTwo" placeholder='Science' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <p>Start Date</p>
                <div className='input-img'>
                  <DatePicker selected={startDateTwo} onChange={(date) => setStartDateTwo(date)} />
                  <img src="assets/images/calendar.png" alt="Calendar" />
                </div>
              </div>
              <div className="form-single__group">
                <p>End Date</p>
                <div className='input-img'>
                  <DatePicker selected={startDateThree} onChange={(date) => setStartDateThree(date)} />
                  <img src="assets/images/calendar.png" alt="Calendar" />
                </div>
              </div>
            </div>
            <div className="form-single__group">
              <label htmlFor="applySystem">Grading System</label>
              <Select options={optionsSystem} id="applySystem" classNamePrefix='react-selet' placeholder="Select Degree" instanceId="System" />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyObtained">Obtained Grade</label>
                <input type="number" name="apply__Obtained" id="applyObtained" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyMaximum">Maximum Grade</label>
                <input type="number" name="apply__Maximum" id="applyMaximum" placeholder='' />
              </div>
            </div>
            <a className='form-act'>Add Institution</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
