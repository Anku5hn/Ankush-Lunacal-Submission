import React, { useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";
const AboutWidget = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [experiences, setExperiences] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const handleAboutMe = () => {
    setAboutMe(true);
    setExperiences(false);
    setRecommended(false);
  };
  const handleExperiences = () => {
    setAboutMe(false);
    setExperiences(true);
    setRecommended(false);
  };
  const handleRecommended = () => {
    setAboutMe(false);
    setExperiences(false);
    setRecommended(true);
  };
  return (
    <>
      <div className="about-container">
        <div className="about--help-container">
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
        <div className="about--buttons-container">
          <div className="about--buttons">
            <button
              className={`button-animation ${aboutMe && "button-bg-gray"}`}
              onClick={handleAboutMe}
            >
              About Me
            </button>
            <button
              className={`button-animation ${experiences && "button-bg-gray"}`}
              onClick={handleExperiences}
            >
              Experiences
            </button>
            <button
              className={`button-animation ${recommended && "button-bg-gray"}`}
              onClick={handleRecommended}
            >
              Recommended
            </button>
          </div>
          <div className="about--text">
            <p className="text-custom-gray-five text-[20px]">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.{" "}
            </p>
            <br />
            <p className="text-custom-gray-five text-[20px]">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutWidget;