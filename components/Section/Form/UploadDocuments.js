import React, { useState } from 'react';
import Select from "react-select"
import Image from "next/image"

const uploadedTypes = [
  { value: "pdf", label: "Pdf" },
  { value: "png", label: "Png" },
  { value: "jpg", label: "Jpg" },
  { value: "jpeg", label: "Jpeg" },
  { value: "doc", label: "Doc" }
]


const UploadDocuments = () => {
  return (
    <div className="form__group-inner">
      <div className="form__group-intro">
        <h3>Upload Documents</h3>
        <p>Please be mindfull filling all the fields</p>
      </div>
      <div className="form-input-group">
        <h6>Document 1</h6>
        <div className="form-input-group-single">
          <label htmlFor="uploadedType">Document Type</label>
          <Select
            options={uploadedTypes}
            classNamePrefix="form-input-group-single-select"
            placeholder="Select Document Type"
            id="uploadedType"
            instanceId="uploadedType"
          />
        </div>
        <div className="document-upload">
          <Image src="/assets/images/upload.png" alt="Image" width="76" height="50" />
          <input type="file" />
          <p>Drag your file here, or <strong>Browse</strong></p>
          <p className='last'>Supports PDF, DOC, JPG, JPEG & PNG</p>
        </div>
      </div>
    </div>
  );
}

export default UploadDocuments;
