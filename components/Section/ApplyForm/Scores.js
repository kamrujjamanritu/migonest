import React, { useState } from 'react';
import Select from 'react-select';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Scores = () => {

  const [startDateSix, setStartDateSix] = useState();
  const [startDateSeven, setStartDateSeven] = useState();
  const [startDateEight, setStartDateEight] = useState();
  const [startDateNine, setStartDateNine] = useState();

  const optionsSubtype = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master's", label: "Master's" },
    { value: "PhD", label: "PhD" }
  ]

  return (
    <>
      <div className="form-sing">
        <div className='form-container-single'>
          <div className="form-group-intro">
            <h2>Test Scores</h2>
            <p>Please be mindfull filling all the fields</p>
          </div>
          <div className='form-single'>
            <h5 className='score-meta'>IELTS</h5>
            <div className="form-single__group">
              <p>Test Date</p>
              <div className='input-img'>
                <DatePicker selected={startDateSix} onChange={(date) => setStartDateSix(date)} placeholderText='Select date' />
                <img src="assets/images/calendar.png" alt="Calendar" />
              </div>
            </div>
            <div className="form-single__group">
              <label htmlFor="applyIeltsScore">Overall Band Score</label>
              <input type="text" name="applyIeltsScore" id="applyIeltsScore" placeholder='Write score' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyIeltsListening">Listening</label>
                <input type="text" name="applyIeltsListening" id="applyIeltsListening" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyIeltsReading">Reading</label>
                <input type="text" name="applyIeltsReading" id="applyIeltsReading" placeholder='' />
              </div>
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyIeltsWriting">Writing</label>
                <input type="text" name="applyIeltsWriting" id="applyIeltsWriting" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyIeltsSpeaking">Speaking</label>
                <input type="text" name="applyIeltsSpeaking" id="applyIeltsSpeaking" placeholder='' />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='form-container-single'>
          <div className='form-single'>
            <h5 className='score-meta'>TOFEL</h5>
            <div className="form-single__group">
              <label htmlFor="applySubType">Subtype</label>
              <Select options={optionsSubtype} id="applySubType" classNamePrefix='react-selet' placeholder="Select subtype" instanceId="SubType" />
            </div>
            <div className="form-single__group">
              <p>Test Date</p>
              <div className='input-img'>
                <DatePicker selected={startDateSeven} onChange={(date) => setStartDateSeven(date)} placeholderText='Select date' />
                <img src="assets/images/calendar.png" alt="Calendar" />
              </div>
            </div>
            <div className="form-single__group">
              <label htmlFor="applyToeflScore">Total Score</label>
              <input type="text" name="applyToeflScore" id="applyToeflScore" placeholder='Write score' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyToeflListening">Listening</label>
                <input type="text" name="applyToeflListening" id="applyToeflListening" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyToeflReading">Reading</label>
                <input type="text" name="applyToeflReading" id="applyToeflReading" placeholder='' />
              </div>
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyToeflWriting">Writing</label>
                <input type="text" name="applyToeflWriting" id="applyToeflWriting" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyToeflSpeaking">Speaking</label>
                <input type="text" name="applyToeflSpeaking" id="applyToeflSpeaking" placeholder='' />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='form-container-single'>
          <div className='form-single'>
            <h5 className='score-meta'>GRE</h5>
            <div className="form-single__group">
              <p>Test Date</p>
              <div className='input-img'>
                <DatePicker selected={startDateEight} onChange={(date) => setStartDateEight(date)} placeholderText='Select date' />
                <img src="assets/images/calendar.png" alt="Calendar" />
              </div>
            </div>
            <div className="form-single__group">
              <label htmlFor="applyGreScore">Total Score</label>
              <input type="text" name="applyGreScore" id="applyGreScore" placeholder='Write score' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyGreListening">Verbal</label>
                <input type="text" name="applyGreListening" id="applyGreListening" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyGreReading">Quantitative</label>
                <input type="text" name="applyGreReading" id="applyGreReading" placeholder='' />
              </div>
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyGreWriting">Analytical Writing</label>
                <input type="text" name="applyGreWriting" id="applyGreWriting" placeholder='' />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='form-container-single'>
          <div className='form-single'>
            <h5 className='score-meta'>GMAT</h5>
            <div className="form-single__group">
              <p>Test Date</p>
              <div className='input-img'>
                <DatePicker selected={startDateNine} onChange={(date) => setStartDateNine(date)} placeholderText='Select date' />
                <img src="assets/images/calendar.png" alt="Calendar" />
              </div>
            </div>
            <div className="form-single__group">
              <label htmlFor="applyGmatScore">Total Score</label>
              <input type="text" name="applyGmatScore" id="applyGmatScore" placeholder='Write score' />
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyGmatListening">Verbal</label>
                <input type="text" name="applyGmatListening" id="applyGmatListening" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyGmatReading">Quantitative</label>
                <input type="text" name="applyGmatReading" id="applyGmatReading" placeholder='' />
              </div>
            </div>
            <div className="form-single__group-wrapper">
              <div className="form-single__group">
                <label htmlFor="applyGmatWriting">Analytical Writing</label>
                <input type="text" name="applyGmatWriting" id="applyGmatWriting" placeholder='' />
              </div>
              <div className="form-single__group">
                <label htmlFor="applyGmatReasoning">Integrated Reasoning</label>
                <input type="text" name="applyGmatReasoning" id="applyGmatReasoning" placeholder='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scores;
