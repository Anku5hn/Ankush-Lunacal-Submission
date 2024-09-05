import React, { useRef, useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";
import Images from "./Images.jsx";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
const GalleryWidget = () => {
  const [imgData, setImgData] = useState([{ imgNo: "0", imgName: "imgName" }]);
  const handleAddImage = () => {
    setImgData([...imgData, { imgNo: "0", imgName: "imgName" }]);
  };
  const galleryRef = useRef(null);
  const handleGalleryScroll = (value) => {
    galleryRef.current.scrollLeft += value;
  };
  return (
    <>
      <div className="gallery-container">
        <div className="gallery--help-container">
          <img
            src={Help}
            alt="help-logo"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src={Frame}
            alt="frame-logo"
            style={{ width: "24px", height: "30px" }}
          />
          <div></div>
        </div>
        <div className="gallery--btnImg-container">
          <div className="gallery--button-container">
            <div className="gallery---btn">
              <button>
                <p>Gallery</p>
              </button>
              <div className="gallery---addImg">
                <div className="add-img-btn">
                  <button onClick={handleAddImage}>+Add Image</button>
                </div>
                <button
                  className="bck-btn scroll-btn"
                  onClick={() => {
                    handleGalleryScroll(-50);
                  }}
                >
                  <ArrowLeftOutlined />
                </button>
                <button
                  className="fwd-btn scroll-btn"
                  onClick={() => {
                    handleGalleryScroll(50);
                  }}
                >
                  <ArrowRightOutlined />
                </button>
              </div>
            </div>

            <div className="imgs-flexbox" ref={galleryRef}>
              <Images />
              {imgData.map((val, index) => (
                <Images no={val.imgNo} idx={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryWidget;