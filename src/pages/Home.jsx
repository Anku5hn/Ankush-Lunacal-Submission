import React from "react";
import AboutWidget from "../components/AboutWidget.jsx";
import GalleryWidget from "../components/GalleryWidget.jsx";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home--empty-container"></div>
        <div className="home--widget-container">
          <AboutWidget />
          <hr className="home--hr" />
          <GalleryWidget />
        </div>
      </div>
    </>
  );
};
export default Home;