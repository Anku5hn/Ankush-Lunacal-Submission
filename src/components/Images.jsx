import React from "react";
import SampleImage from "../assets/images/Sample-Image.jpg";
const Images = (props) => {
  return (
    <>
      <div className={`images-container ${props.idx}`}>
        <div className="images-sizing">
          <img
            src={SampleImage}
            alt={`image-no: ${props.no}`}
            className="imgs-widget"
          />
        </div>
      </div>
    </>
  );
};
export default Images;