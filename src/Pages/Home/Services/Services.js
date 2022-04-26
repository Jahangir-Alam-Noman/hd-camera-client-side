/** @format */

import React from "react";
import "./Services.css";
import product1 from "../../../images/products/product-1.jpg";
import product2 from "../../../images/products/product-3.jpg";
import product3 from "../../../images/products/product-7.jpg";
import product4 from "../../../images/products/product-14.jpg";
import product5 from "../../../images/products/product-15.jpg";
import product6 from "../../../images/products/product-16.jpg";
const Services = () => {
  return (
    <div>
      <div className='container mt-40 mb-30'>
        <h2 className='text-start pb-4 fw-bolder'>Popular in this week</h2>
        <div className='row mt-30'>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product1} />
              <div className='box-content'>
                <h4 className='title'>willimson</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product2} />
              <div className='box-content'>
                <h4 className='title'>Kristiana</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product3} />
              <div className='box-content'>
                <h4 className='title'>Kristiana</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-30 pt-3'>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product4} />
              <div className='box-content'>
                <h4 className='title'>willimson</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product5} />
              <div className='box-content'>
                <h4 className='title'>Kristiana</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='box21'>
              <img className='pic-1' src={product6} />
              <div className='box-content'>
                <h4 className='title'>Kristiana</h4>
                <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mattis augue in odio suscipit, at.
                </p>
                <a className='read-more' href='#'>
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
