import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";

const PersonalInfo = () => {

    const [startDate, setStartDate] = useState(new Date(2000, 10, 25));

    const [country, setCountry] = useState('')
    const optionsCountry = useMemo(() => countryList().getData(), [])

    const changeCountry = country => {
        setCountry(country)
    }

    const [number, setNumber] = useState();


    return (
        <>
            <div className="form-sing">
                <div className="form-container-single">
                    <div className="form-group-intro">
                        <h2>Personal Information</h2>
                        <p>Please be mindfull filling all the fields, university will contact you</p>
                    </div>
                    <div className="form-single">
                        <div className="form-single__group">
                            <label htmlFor="applyFirstName">First Name</label>
                            <input type="text" name="apply__first__name" id="applyFirstName" placeholder='First Name' />
                        </div>
                        <div className="form-single__group">
                            <label htmlFor="applyLastName">Last Name</label>
                            <input type="text" name="apply__last__name" id="applyLastName" placeholder='Last Name' />
                        </div>
                        <div className="form-single__group">
                            <div className="form-group-single form-group-single-radio">
                                <p>Gender</p>
                                <div className="check-row">
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id="other" name="gender" value="other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-single__group">
                            <p>Date of Birth</p>
                            <div className='input-img'>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                <img src="assets/images/calendar.png" alt="Calendar" />
                            </div>
                        </div>
                        <div className="form-single__group">
                            <label htmlFor="applyNationality">Nationality</label>
                            <Select options={optionsCountry} country={country} id="applyNationality" instanceId="applyNationality" classNamePrefix='react-selet' onChange={changeCountry} placeholder="Select Country" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="form-container-single">
                    <div className="form-group-intro">
                        <h2>Contact Information</h2>
                    </div>
                    <div className="form-single">
                        <div className="form-single__group">
                            <label htmlFor="applyEmail">Email</label>
                            <input type="email" name="apply__email" id="applyEmail" placeholder='Email' />
                        </div>
                        <div className="form-single__group">
                            <label htmlFor="applyNumber">Phone Number</label>
                            <PhoneInput
                                id="applyNumber"
                                limitMaxLength={true}
                                international={true}
                                defaultCountry="DE"
                                value={number}
                                onChange={setNumber}
                            />
                        </div>
                        <div className="form-single__group">
                            <label htmlFor="applyCountry">Country</label>
                            <Select options={optionsCountry} country={country} id="applyCountry" instanceId="applyCountry" classNamePrefix='react-selet' onChange={changeCountry} placeholder="Select Country" />
                        </div>
                        <div className="form-single__group-wrapper">
                            <div className="form-single__group">
                                <label htmlFor="applyCity">City</label>
                                <input type="text" name="apply__City" id="applyCity" placeholder='City' />
                            </div>
                            <div className="form-single__group">
                                <label htmlFor="applyPost">Post Code</label>
                                <input type="text" name="apply__Post" id="applyPost" placeholder='Post Code' />
                            </div>
                        </div>
                        <div className="form-single__group">
                            <label htmlFor="applyAddress">Address</label>
                            <input type="text" name="apply__Address" id="applyAddress" placeholder='Address' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalInfo;
