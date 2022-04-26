/** @format */

import React from "react";
import "./MotionCamera.css";
import motionCam1 from "../../../images/motionCam-1.jpg";
import motionCam2 from "../../../images/motionCam-2.jpg";

const MotionCamera = () => {
  return (
    <div>
      <div className='container pt-4 pb-5'>
        {/* <h2 className='text-center'>Zoom Image On Mouse Over</h2> */}
        <div className='row'>
          <div className='col-sm-6'>
            <div className='item'>
              <img src={motionCam1} className='img-thumbnail' />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='item'>
              <img src={motionCam2} className='img-thumbnail' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionCamera;
