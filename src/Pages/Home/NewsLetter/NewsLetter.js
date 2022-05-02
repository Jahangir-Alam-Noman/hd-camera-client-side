/** @format */

import React from "react";
import "./NewsLetter.css";
import newsletter1 from "../../../images/products/product-7.jpg";

const NewsLetter = () => {
  return (
    <div>
      <section className='newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 pt-5 '>
              <div className='content'>
                <form>
                  <h2 className='fw-bolder'>SUBSCRIBE OUR NEWSLETTER</h2>
                  <div className='input-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter your email'
                    />
                    <span className='input-group-btn'>
                      <button className='btn' type='submit'>
                        Subscribe Now
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-sm-4 '>
              <div className='content'>
                <img src={newsletter1} alt='' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
