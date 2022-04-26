/** @format */

import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import DigitalCam from "../DigitalCam/DigitalCam";
import MotionCamera from "../MotionCamera/MotionCamera";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <DigitalCam></DigitalCam>
      <Services></Services>
      <MotionCamera></MotionCamera>
      <NewsLetter></NewsLetter>
      {/* <About></About> */}
    </div>
  );
};

export default Home;
