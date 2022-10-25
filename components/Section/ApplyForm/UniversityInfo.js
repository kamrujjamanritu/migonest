import React from 'react';
import Select from 'react-select';


const UniversityInfo = () => {


    const options = [
        { value: "bachelor", label: "Bachelor" },
        { value: "master's", label: "Master's" },
        { value: "PhD", label: "PhD" }
    ]

    const optionsTwo = [
        { value: "summer", label: "Summer" },
        { value: "winter", label: "Winter" },
        { value: "spring", label: "Spring" }
    ]

    return (
        <>
            <div className="form-sing">
                <div className="form-group-intro">
                    <h2>Please tell us where you are applying</h2>
                </div>
                <div className="form-single">
                    <div className="form-single__group">
                        <label htmlFor="applyUniversity">University</label>
                        <input type="text" name="apply__university" id="applyUniversity" placeholder='e.g University of Cambridge' />
                    </div>
                    <div className="form-single__group">
                        <label htmlFor="applySelectbox">Study Program</label>
                        <Select options={options} id="applySelectbox" classNamePrefix='react-selet' placeholder="Select program" instanceId="selectbox" />
                    </div>
                    <div className="form-single__group">
                        <div className="form-group-single form-group-single-radio">
                            <p>Degree</p>
                            <div className="check-row">
                                <input type="radio" id="bachelor" name="apply__program" value="Bachelor" />
                                <label htmlFor="bachelor">Bachelor</label>
                                <input type="radio" id="master&apos;s" name="apply__program" value="master&apos;s" />
                                <label htmlFor="master's">Master&apos;s</label>
                                <input type="radio" id="phd" name="apply__program" value="phd" />
                                <label htmlFor="phd">PhD</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-single__group">
                        <label htmlFor="applySemester">Semester</label>
                        <Select options={optionsTwo} id="applySemester" classNamePrefix='react-selet' placeholder="Select Semester" instanceId="applySemester" />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default UniversityInfo;
