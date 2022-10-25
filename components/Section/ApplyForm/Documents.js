import React from 'react';
import Select from 'react-select';
const Documents = () => {
  const optionsDocument = [
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
    { value: "html", label: "Html" }
  ]
  return (
    <>
      <div className="form-sing">
        <div className='form-container-single'>
          <div className="form-group-intro">
            <h2>Upload Documents</h2>
            <p>Please be mindfull filling all the fields</p>
          </div>
          <div className='form-single'>
            <h5 className='score-meta'>Document 1</h5>
            <div className="form-single__group">
              <label htmlFor="applyDocument">Document Type</label>
              <Select options={optionsDocument} id="applyDocument" classNamePrefix='react-selet' placeholder="Select Type" instanceId="Document" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documents;
