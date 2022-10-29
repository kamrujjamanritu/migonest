import React, { useState, useMemo } from 'react';
import Select from "react-select";
import countryList from 'react-select-country-list';
import Link from "next/link"
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const programOptionsPre = [
  { value: "bachelor", label: "Bachelor" },
  { value: "master's", label: "Master's" },
  { value: "PhD", label: "PhD" }
]

const programOptionsPreEng = [
  { value: "Engineering", label: "Engineering" },
  { value: "Physics", label: "Physics" },
  { value: "Mathematics", label: "Mathematics" }
]

const programOptionsPreEngArea = [
  { value: "Engineering", label: "Engineering" },
  { value: "Physics", label: "Physics" },
  { value: "Mathematics", label: "Mathematics" }
]

const Preference = () => {

  const [selectedOptionPre, setSelectedOptionPre] = useState(null);
  const [selectedOptionPreEng, setSelectedOptionPreEng] = useState(null);
  const [selectedOptionPreEngArea, setSelectedOptionPreEngArea] = useState(null);

  // country
  const [country, setCountry] = useState(null);

  const countryOptions = useMemo(() => countryList().getData(), []);

  const changeCountry = country => {
    setCountry(country);
  }

  const [formStepp, setFormStepp] = useState(0);

  const prevFormStepp = () => {
    setFormStepp(formStepp - 1)
  }

  const nextFormStepp = (e) => {
    setFormStepp(formStepp + 1)
    e.preventDefault;
  }

  return (
    <div className="auth-wrap auth-common-wrap prefer">
      <div className="auth-navbar-wrapper">
        <div className="auth-navbar auth-nav">
          <Link href="/">
            <a className='auth-logo'>Migonest</a>
          </Link>
        </div>
      </div>
      <div className="auth-body">
        <div className="auth-body-inner">
          <div className="int">
            <p>Hey, Adam</p>
            <h5>Welcome to <Link href="/"><a>Migonest</a></Link></h5>
            <p>Please tell us about your preferences to get better recommendations</p>
          </div>
          {
            formStepp === 0 ? null : <a className='previous-btn' onClick={prevFormStepp}><HiOutlineArrowLeft /></a>
          }
          <form action="#" method="post">

            {
              formStepp === 0 ? <div className="prefer-group">
                <p className='tracker'>1<span>/4</span></p>
                <div className="p-grp-int">
                  <h5>Which country would you like to apply to?</h5>
                  <p>Choose all the countries you want to apply to</p>
                </div>
                <div className="p-input-grp">
                  <div className="form-input-group-single form-input-number mb-0">
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
                  <div className="suggesion">
                    <a>Germany<IoCloseCircleOutline /></a>
                    <a>Australia<IoCloseCircleOutline /></a>
                    <a>Canada<IoCloseCircleOutline /></a>
                  </div>
                </div>
                <div className="p-check-group">
                  <input type="checkbox" name="p-coun" id="p-coun" />
                  <label htmlFor="p-coun">I’m not sure, show me random recommendations</label>
                </div>
              </div> :
                formStepp === 1 ? <div className="prefer-group">
                  <p className='tracker'>2<span>/4</span></p>
                  <div className="p-grp-int">
                    <h5>What is your highest academic qualification?</h5>
                    <p>Select the most recent degree you have earned</p>
                  </div>
                  <div className="p-input-grp">
                    <div className="form-input-group-single mb-0">
                      <Select classNamePrefix="form-input-group-single-select" id="universityInfoProgram"
                        defaultValue={selectedOptionPre}
                        onChange={setSelectedOptionPre}
                        options={programOptionsPre}
                        placeholder="Bachelor"
                        instanceId="universityInfoProgram"
                      />
                    </div>
                  </div>
                </div> :
                  formStepp === 2 ? <div className="prefer-group">
                    <p className='tracker'>3<span>/4</span></p>
                    <div className="p-grp-int">
                      <h5>Which field of study are you interested in?</h5>
                      <p>You can choose only one field</p>
                    </div>
                    <div className="p-input-grp">
                      <div className="form-input-group-single mb-0">
                        <Select classNamePrefix="form-input-group-single-select" id="universityInfoProgramEng"
                          defaultValue={selectedOptionPreEng}
                          onChange={setSelectedOptionPreEng}
                          options={programOptionsPreEng}
                          placeholder="Engineering"
                          instanceId="universityInfoProgramEng"
                        />
                      </div>
                    </div>
                  </div> :
                    formStepp === 3 ? <div className="prefer-group">
                      <p className='tracker'>4<span>/4</span></p>
                      <div className="p-grp-int">
                        <h5>Which area of study are you interested in?</h5>
                        <p>Select at least one area of study</p>
                      </div>
                      <div className="p-input-grp">
                        <div className="form-input-group-single mb-0">
                          <Select classNamePrefix="form-input-group-single-select" id="universityInfoProgramEngArea"
                            defaultValue={selectedOptionPreEngArea}
                            onChange={setSelectedOptionPreEngArea}
                            options={programOptionsPreEngArea}
                            placeholder="Select"
                            instanceId="universityInfoProgramEngArea"
                          />
                        </div>
                        <div className="suggesion">
                          <a>Computer Science<IoCloseCircleOutline /></a>
                          <a>Electrical & Electronics Engineering<IoCloseCircleOutline /></a>
                        </div>
                      </div>
                      <div className="p-check-group">
                        <input type="checkbox" name="p-coune" id="p-coune" />
                        <label htmlFor="p-coune">I’m not sure, show me all area of study</label>
                      </div>
                    </div> : null
            }

            <div className="p-ct">
              {
                formStepp === 3 ? <a>Continue</a> : <a onClick={nextFormStepp}>Continue</a>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Preference;
