import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";


const optionsSubtype = [
  { value: "bachelor", label: "Bachelor" },
  { value: "master's", label: "Master's" },
  { value: "PhD", label: "PhD" }
]


import Select from "react-select"
const TestScore = () => {

  const [testDate, setTestDate] = useState()
  const [testToeflDate, setToeflTestDate] = useState()
  const [testGreDate, setGreTestDate] = useState()
  const [testGmatDate, setGmatTestDate] = useState()
  return (
    <div className="form__group-inner">
      <div className="form__group-intro">
        <h3>Test Scores</h3>
        <p>Please be mindfull filling all the fields</p>
      </div>
      <div className="form-input-group">
        <h6>IELTS</h6>
        <div className="form-input-group-single">
          <label htmlFor="testScoreIeltsStartDate">Test date</label>
          <div className="input-icon">
            <DatePicker selected={testDate} onChange={(date) => setTestDate(date)} id="testScoreIeltsStartDate" placeholderText='Select Date' />
            <IoCalendarOutline />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="testScoreIeltsBandScore">Overall Band Score</label>
          <input type="number" name="testScoreIeltsBandScore" id="testScoreIeltsBandScore" placeholder='Write score' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreIeltsListening">Listening</label>
            <input type="number" name="testScoreIeltsListening" id="testScoreIeltsListening" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreIeltsReading">Reading</label>
            <input type="number" name="testScoreIeltsReading" id="testScoreIeltsReading" placeholder='Write score' required="required" />
          </div>
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreIeltsWriting">Writing</label>
            <input type="number" name="testScoreIeltsWriting" id="testScoreIeltsWriting" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreIeltsSpeaking">Speaking</label>
            <input type="number" name="testScoreIeltsSpeaking" id="testScoreIeltsSpeaking" placeholder='Write score' required="required" />
          </div>
        </div>
      </div>
      <hr />
      <div className="form-input-group">
        <h6>Toefl</h6>
        <div className="form-input-group-single">
          <label htmlFor="testScoreToeflSubtype">Subtype</label>
          <Select
            options={optionsSubtype}
            classNamePrefix='form-input-group-single-select'
            placeholder="Select Subtype"
            id="testScoreToeflSubtype"
            instanceId="testScoreToeflSubtype"
          />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="testScoreToeflStartDate">Test date</label>
          <div className="input-icon">
            <DatePicker selected={testToeflDate} onChange={(date) => setToeflTestDate(date)} id="testScoreToeflStartDate" placeholderText='Select Date' />
            <IoCalendarOutline />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="testScoreToeflBandScore">Total Score</label>
          <input type="number" name="testScoreToeflBandScore" id="testScoreToeflBandScore" placeholder='Write score' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreToeflListening">Listening</label>
            <input type="number" name="testScoreToeflListening" id="testScoreToeflListening" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreToeflReading">Reading</label>
            <input type="number" name="testScoreToeflReading" id="testScoreToeflReading" placeholder='Write score' required="required" />
          </div>
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreToeflWriting">Writing</label>
            <input type="number" name="testScoreToeflWriting" id="testScoreToeflWriting" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreToeflSpeaking">Speaking</label>
            <input type="number" name="testScoreToeflSpeaking" id="testScoreToeflSpeaking" placeholder='Write score' required="required" />
          </div>
        </div>
      </div>
      <hr />
      <div className="form-input-group">
        <h6>GRE</h6>
        <div className="form-input-group-single">
          <label htmlFor="testScoreGreStartDate">Test date</label>
          <div className="input-icon">
            <DatePicker selected={testGreDate} onChange={(date) => setGreTestDate(date)} id="testScoreGreStartDate" placeholderText='Select Date' />
            <IoCalendarOutline />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="testScoreGreBandScore">Total Score</label>
          <input type="number" name="testScoreGreBandScore" id="testScoreGreBandScore" placeholder='Write score' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreListening">Verbal</label>
            <input type="number" name="testScoreGreListening" id="testScoreGreListening" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreReading">Quantitative</label>
            <input type="number" name="testScoreGreReading" id="testScoreGreReading" placeholder='Write score' required="required" />
          </div>
        </div>
        <div className="form-input-group-single-group mb-0">
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreWriting">Analytical Writing</label>
            <input type="number" name="testScoreGreWriting" id="testScoreGreWriting" placeholder='Write score' required="required" />
          </div>
        </div>
      </div>
      <hr />
      <div className="form-input-group">
        <h6>GMAT</h6>
        <div className="form-input-group-single">
          <label htmlFor="testScoreGmatStartDate">Test date</label>
          <div className="input-icon">
            <DatePicker selected={testGmatDate} onChange={(date) => setGmatTestDate(date)} id="testScoreGmatStartDate" placeholderText='Select Date' />
            <IoCalendarOutline />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="testScoreGreBandScore">Total Score</label>
          <input type="number" name="testScoreGreBandScore" id="testScoreGreBandScore" placeholder='Write score' required="required" />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreListening">Verbal</label>
            <input type="number" name="testScoreGreListening" id="testScoreGreListening" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreReading">Quantitative</label>
            <input type="number" name="testScoreGreReading" id="testScoreGreReading" placeholder='Write score' required="required" />
          </div>
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreWriting">Analytical Writing</label>
            <input type="number" name="testScoreGreWriting" id="testScoreGreWriting" placeholder='Write score' required="required" />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="testScoreGreIntegrated">Integrated Reasoning</label>
            <input type="number" name="testScoreGreIntegrated" id="testScoreGreIntegrated" placeholder='Write score' required="required" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestScore;
