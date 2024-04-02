import React, { useRef, useState } from "react";
import "./filedStyles.scss";
import { FiUpload } from "react-icons/fi";

function CommonUploadFile({ label, placeholder, labelClassName }) {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileInputChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName("");
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <p className={labelClassName} style={{ marginBottom: "8px" }}>
        {label}
      </p>
      <div className="file-input-container">
        <input
          type="text"
          className="file-input"
          placeholder={placeholder}
          readOnly
          value={selectedFileName}
        />
        <button className="choose-file-button" onClick={handleFileButtonClick}>
          <FiUpload style={{ fontSize: "12px", marginRight: "5px" }} /> {label}
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
      </div>
    </>
  );
}

export default CommonUploadFile;
