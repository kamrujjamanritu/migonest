import React from 'react';
import { FiEdit } from "react-icons/fi";

const ReviewApplication = () => {
  return (
    <div className="form__group-inner form-review">
      <div className="form__group-intro">
        <h3>Review Application</h3>
        <p>Please review application carefully before submitting. Edit any section if necessary.</p>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Application</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-single-group">
          <p>Study Program</p>
          <p className="last">Information Technology</p>
        </div>
        <div className="form-review-group">
          <div className="form-review-single-group">
            <p>Semester</p>
            <p className="last">Summer 2022</p>
          </div>
          <div className="form-review-single-group">
            <p>Degree</p>
            <p className="last">Master of Science</p>
          </div>
        </div>
        <div className="form-review-group mb-0">
          <div className="form-review-single-group">
            <p>School</p>
            <p className="last">University of Cambridge</p>
          </div>
          <div className="form-review-single-group">
            <p>Location</p>
            <p className="last">Cambridge, UK</p>
          </div>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Personal Information</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-group">
          <div className="form-review-single-group">
            <p>First Name</p>
            <p className="last">Anna Crayton</p>
          </div>
          <div className="form-review-single-group">
            <p>Gender</p>
            <p className="last">Female</p>
          </div>
        </div>
        <div className="form-review-group mb-0">
          <div className="form-review-single-group">
            <p>Date of Birth</p>
            <p className="last">25/11/2000</p>
          </div>
          <div className="form-review-single-group">
            <p>Nationality</p>
            <p className="last">Polish</p>
          </div>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Contact Information</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-group">
          <div className="form-review-single-group">
            <p>Email</p>
            <p className="last">annacrayton@gmail.com</p>
          </div>
          <div className="form-review-single-group">
            <p>Phone Number</p>
            <p className="last">+45 123456789</p>
          </div>
        </div>
        <div className="form-review-single-group">
          <p>Address</p>
          <p className="last">Mittelheide 118 <br />
            Warsaw 17634 <br />
            Poland</p>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Educational Background</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-single-group form-single-group-alt">
          <p className='first'>High School</p>
          <p className="alt">Warsaw Montessori High School</p>
          <p className="alt-sec mb-8">Warsaw, Poland</p>
          <p className="reg mb-6">Science, GPA 5 <span>out of 5</span></p>
          <p className="reg">Jan 2015-Dec 2017</p>
        </div>
        <div className="form-review-single-group form-single-group-alt">
          <p className='first'>Bachelor</p>
          <p className="alt">University of Warsaw</p>
          <p className="alt-sec mb-8">Warsaw, Poland</p>
          <p className="reg mb-6">Computer Science, CGPA 3.8 <span>out of 4</span></p>
          <p className="reg">Jan 2018-Jan 2022</p>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Experience</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-single-group form-single-group-alt">
          <p className="alt mb-4 mt-0">Software Developer, Part-time</p>
          <p className="reg">ABC Company</p>
          <p className="alt-sec mb-8">Berlin, Germany</p>
          <p className="reg">Feb 2022-To date</p>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Test Scores</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="form-review-single-group form-single-group-alt">
          <p className='alt mb-4 mt-0'>IELTS</p>
          <p className="first mb-8">Test Date: 12 Fed, 2022</p>
          <p className="reg">Overall Band Score: 7.5</p>
          <div className="form-review-group mt-16">
            <div className="form-review-single-group">
              <p className="last mt-0">Listening: 8</p>
              <p className="last mt-0">Writing: 8</p>
            </div>
            <div className="form-review-single-group">
              <p className="last mt-0">Reading: 7</p>
              <p className="last mt-0">Speaking: 6.5</p>
            </div>
          </div>
        </div>
        <div className="form-review-single-group form-single-group-alt">
          <p className='alt mb-4 mt-0'>GRE</p>
          <p className="first mb-8">Test Date: 17 Mar, 2022</p>
          <p className="reg">Overall Band Score: 7.5</p>
          <div className="form-review-group mt-16 mb-0">
            <div className="form-review-single-group">
              <p className="last mt-0">Verbal Reasoning: 152</p>
              <p className="last mt-0">Analytical Writing: 4.0</p>
            </div>
            <div className="form-review-single-group">
              <p className="last mt-0">Quantitative Reasoning: 158</p>
              <p className="last mt-0">Speaking: 6.5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-review-single">
        <div className="form-review-head">
          <h6>Documents</h6>
          <a>
            <FiEdit />
          </a>
        </div>
        <div className="document-single">
          <p className='intro'>IELTS Certificate</p>
          <div className="document-item">
            <p>ielts-certificate.pdf</p>
          </div>
        </div>
        <div className="document-single">
          <p className='intro'>GRE Certificate</p>
          <div className="document-item">
            <p>gre-certificate.pdf</p>
          </div>
        </div>
        <div className="document-single">
          <p className='intro'>Bachelor Degree</p>
          <div className="document-item">
            <p>my-bachelor-certificate.pdf</p>
          </div>
        </div>
        <div className="document-single">
          <p className='intro'>High School Certificate</p>
          <div className="document-item">
            <p>highschool-certificate.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewApplication;
