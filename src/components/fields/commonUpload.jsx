import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./filedStyles.scss";

const CommonUpload = ({ label }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div>
        <label >{label}</label>
      </div>
      <br />
      <div>
        <div style={{ border: "solid 1px black", width: "300px" }}>
          <input
            type="file"
            id="customFile"
            onChange={handleImageChange}
            multiple
            style={{ display: "none", height: "40px" }} // hide the default file input
          />
          <button
            onClick={() => document.getElementById("customFile").click()}
            className="uploadFileBtn"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              height: "40px",
              backgroundColor: "#6150e1",
              color: "white",
              padding: "0px 15px",
              border: "none",
            }}
          >
            <FileUploadIcon sx={{fontSize:"16px",marginRight:"5px"}} />
            Choose File
          </button>
        </div>
      </div>
      {/* Render the uploaded files */}
      <br />
      {images.length > 0 && (
        <div>
          {/* <h5>Uploaded Files:</h5> */}
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <div
              className="uploadedFile"
                style={{
                  backgroundColor: "#efedfc",
                  padding: "5px 10px",
                  width: "300px",
                  marginRight: "10px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {image.name}
              </div>
              <DeleteIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonUpload;
