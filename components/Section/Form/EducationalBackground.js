import React, { useState } from 'react';
import Select from "react-select"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";

const optionsEducation = [
  { value: "bachelor", label: "Bachelor" },
  { value: "master's", label: "Master's" },
  { value: "PhD", label: "PhD" }
]

const EducationalBackground = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="form__group-inner">
      <div className="form__group-intro">
        <h3>Educational Background</h3>
        <p>Please be mindfull filling all the fields</p>
      </div>
      <div className="form-input-group">
        <div className="form-input-group-single">
          <label htmlFor="educationalBackgroundInstitute">Institution Name</label>
          <input type="text" name="educationalBackgroundInstitute" id="educationalBackgroundInstitute" placeholder='School / college / university name' required="required" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="educationalBackgroundInstituteLocation">Institution Location</label>
          <input type="text" name="educationalBackgroundInstituteLocation" id="educationalBackgroundInstituteLocation" placeholder='Enter Institution Location' required="required" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="educationalBackgroundDegree">Degree</label>
          <Select
            options={optionsEducation}
            id="educationalBackgroundDegree"
            classNamePrefix='form-input-group-single-select'
            placeholder="Select Degree"
            instanceId="educationalBackgroundDegree" />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="educationalBackgroundProgram">Study Program</label>
          <input type="text" name="educationalBackgroundProgram" id="educationalBackgroundProgram" placeholder='Science' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="educationalBackgroundStartDate">Start Date</label>
            <div className="input-icon">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="educationalBackgroundStartDate" placeholderText='Start Date' />
              <IoCalendarOutline />
            </div>
          </div>
          <div className="form-input-group-single">
            <label htmlFor="educationalBackgroundEndDate">End Date</label>
            <div className="input-icon">
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} id="educationalBackgroundEndDate" placeholderText='End Date' />
              <IoCalendarOutline />
            </div>
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="educationalBackgroundGradingSystem">Grading System</label>
          <Select
            options={optionsEducation}
            id="educationalBackgroundGradingSystem"
            classNamePrefix='form-input-group-single-select'
            placeholder="Select Grading"
            instanceId="educationalBackgroundGradingSystem" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="educationalBackgroundObtainedGrade">Obtained Grade</label>
            <input type="number" name="educationalBackgroundObtainedGrade" id="educationalBackgroundObtainedGrade" placeholder='Obtained Grade' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="educationalBackgroundMaximumGrade">Maximum Grade</label>
            <input type="number" name="educationalBackgroundMaximumGrade" id="educationalBackgroundMaximumGrade" placeholder='Maximum Grade' required="required" />
          </div>
        </div>
        <div className="form-input-group-single">
          <a className='add-button'>Add Institution</a>
        </div>
      </div>
    </div>
  );
}

export default EducationalBackground;
