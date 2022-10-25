import React, { useState } from "react";
import Select from "react-select";

const programOptions = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master's", label: "Master's" },
    { value: "PhD", label: "PhD" }
]

const semesterOptions = [
    { value: "summer", label: "Summer" },
    { value: "winter", label: "Winter" },
    { value: "spring", label: "Spring" }
]

const UniversityInfo = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);


    return (
        <div className="form__group-inner">
            <div className="form__group-intro">
                <h3>Please tell us where you are applying</h3>
            </div>
            <div className="form-input-group">
                <div className="form-input-group-single">
                    <label htmlFor="universityInfoUniversity">University</label>
                    <input type="text" name="universityInfoUniversity" id="universityInfoUniversity" placeholder="e.g University of Cambridge" required="required" />
                </div>
                <div className="form-input-group-single">
                    <label htmlFor="universityInfoProgram">Study Program</label>
                    <Select classNamePrefix="form-input-group-single-select" id="universityInfoProgram"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={programOptions}
                        placeholder="Select Program"
                        instanceId="universityInfoProgram"
                    />
                </div>
                <div className="form-input-group-single">
                    <p>Degree</p>
                    <div className="degree-checkbox">
                        <input type="radio" id="bachelor" name="select__degree" value="Bachelor" required="required" />
                        <label htmlFor="bachelor">Bachelor</label>
                        <input type="radio" id="master's" name="select__degree" value="master's" required="required" />
                        <label htmlFor="master's">Master&apos;s</label>
                        <input type="radio" id="phd" name="select__degree" value="phd" required="required" />
                        <label htmlFor="phd">PhD</label>
                    </div>
                </div>
                <div className="form-input-group-single">
                    <label htmlFor="universityInfoSemester">Semester</label>
                    <Select classNamePrefix="form-input-group-single-select" id="universityInfoSemester"
                        defaultValue={selectedSemester}
                        onChange={setSelectedSemester}
                        options={semesterOptions}
                        placeholder="Select Semester"
                        instanceId="universityInfoSemester"
                    />
                </div>
            </div>
        </div>
    );
}

export default UniversityInfo;
