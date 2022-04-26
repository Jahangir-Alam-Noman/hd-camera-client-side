/** @format */

import React from "react";
import "./DigitalCam.css";
import digitalCam1 from "../../../images/digitalCam-1.jpg";
import digitalCam2 from "../../../images/digitalCam-2.jpg";
import digitalCam3 from "../../../images/digitalCam-3.jpg";

const DigitalCam = () => {
  return (
    <div>
      <div className='container pt-4 pb-5'>
        {/* <h2 className='text-center'>Zoom Image On Mouse Over</h2> */}
        <div className='row'>
          <div className='col-sm-3'>
            <div className='item'>
              <img src={digitalCam1} className='img-thumbnail' />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='item'>
              <img src={digitalCam2} className='img-thumbnail' />
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='item'>
              <img src={digitalCam3} className='img-thumbnail' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCam;
