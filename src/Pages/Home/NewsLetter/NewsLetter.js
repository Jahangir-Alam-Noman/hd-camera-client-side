/** @format */

import React from "react";
import "./NewsLetter.css";
import newsletter1 from "../../../images/products/product-7.jpg";

const NewsLetter = () => {
  return (
    <div>
      <section class='newsletter'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-8 pt-5 '>
              <div class='content'>
                <form>
                  <h2 className='fw-bolder'>SUBSCRIBE OUR NEWSLETTER</h2>
                  <div class='input-group'>
                    <input
                      type='email'
                      class='form-control'
                      placeholder='Enter your email'
                    />
                    <span class='input-group-btn'>
                      <button class='btn' type='submit'>
                        Subscribe Now
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div class='col-sm-4 '>
              <div class='content'>
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
