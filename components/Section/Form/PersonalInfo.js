import React, { useState, useMemo } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";

import Select from "react-select";
import countryList from 'react-select-country-list';

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
const PersonalInfo = () => {

  const [birthDate, setBirthDate] = useState();

  const [nationality, setNationality] = useState("");

  const nationalityOptions = useMemo(() => countryList().getData(), []);

  const changeNationality = nationality => {
    setNationality(nationality);
  }
  // country
  const [country, setCountry] = useState("");

  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeCountry = country => {
    setCountry(country);
  }


  const [phoneNumber, setPhoneNumber] = useState()

  return (
    <div className="form__group-inner">
      <div className="form__group-intro">
        <h3>Personal Information</h3>
        <p>Please be mindfull filling all the fields, university will contact you</p>
      </div>
      <div className="form-input-group">
        <div className="form-input-group-single">
          <label htmlFor="personalInfoFirstName">First Name</label>
          <input type="text" name="personalInfoFirstName" id="personalInfoFirstName" placeholder='Anna' />
        </div>
        <div className="form-input-group-single">
          <label htmlFor="personalInfoLastName">Last Name</label>
          <input type="text" name="personalInfoLastName" id="personalInfoLastName" placeholder='Crayton' />
        </div>
        <div className="form-input-group-single">
          <p>Gender</p>
          <div className="degree-checkbox">
            <input type="radio" id="male" name="select__gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="select__gender" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="select__gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="personalInfoBirthDate">Date of Birth</label>
          <div className="input-icon">
            <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} placeholderText='Select Birth Date' />
            <IoCalendarOutline />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="personalInfoNationality">Nationality</label>
          <Select
            options={nationalityOptions}
            value={nationality}
            onChange={changeNationality}
            classNamePrefix='form-input-group-single-select'
            id="personalInfoNationality"
            placeholder="Select Nationality"
            instanceId="personalInfoNationality"
          />
        </div>
      </div>
      <hr />
      <div className="form__group-intro form__group-intro-alt">
        <h3>Contact Information</h3>
      </div>
      <div className="form-input-group">
        <div className="form-input-group-single">
          <label htmlFor="personalInfoEmail">Email</label>
          <input type="email" name="personalInfoEmail" id="personalInfoEmail" placeholder='Write Your Email' />
        </div>
        <div className="form-input-group-single form-input-number">
          <label htmlFor="personalInfoNumber">Phone Number</label>
          <PhoneInput
            value={phoneNumber}
            onChange={setPhoneNumber}
            id="personalInfoNumber"
            limitMaxLength={true}
            international={true}
            defaultCountry="DE"
          />
        </div>
        <div className="form-input-group-single form-input-number">
          <label htmlFor="personalInfoCountry">Country</label>
          <Select
            options={countryOptions}
            value={country}
            onChange={changeCountry}
            classNamePrefix='form-input-group-single-select'
            id="personalInfoCountry"
            placeholder="Select Country"
            instanceId="personalInfoCountry"
          />
        </div>
        <div className="form-input-group-single-group">
          <div className="form-input-group-single">
            <label htmlFor="personalInfoCity">City</label>
            <input type="text" name="personalInfoCity" id="personalInfoCity" placeholder='Enter Your City' />
          </div>
          <div className="form-input-group-single">
            <label htmlFor="personalInfoPostCode">Post Code</label>
            <input type="number" name="personalInfoPostCode" id="personalInfoPostCode" placeholder='Enter Your Post Code' />
          </div>
        </div>
        <div className="form-input-group-single">
          <label htmlFor="personalInfoAddress">Address</label>
          <input type="text" name="personalInfoAddress" id="personalInfoAddress" placeholder='Enter Your Address' />
        </div>
      </div>

    </div>
  );
}

export default PersonalInfo;
