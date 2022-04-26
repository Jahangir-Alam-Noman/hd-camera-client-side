/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import NewsLetter from "../NewsLetter/NewsLetter";
// import useAuth from '../../../hooks/useAuth';
import "./About.css";

const About = () => {
  // const { logOut } = useAuth();
  return (
    <div>
      <Header></Header>
      {/* <h1>This is about page</h1>
            <button onClick={logOut} classNameName="btn-danger"> Logout </button> */}

      {/* Banner part  */}
      <div className='row overlay '>
        <h1 className='text-muted text-center'>About Us</h1>
        <p className='text-center'>
          <span className='text-muted pe-2'>
            What We Do The Best For Your Camera !
          </span>
        </p>
      </div>

      {/* Breadcrumb part */}
      <nav aria-label='breadcrumb '>
        <ol className='breadcrumb container'>
          <li className='breadcrumb-item'>
            <Link to='/home' className='active'>
              Home
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <span className='text-muted'>About</span>
          </li>
        </ol>
      </nav>

      <div className='aboutus-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6 col-xs-12'>
              <div className='aboutus'>
                <h2 className='aboutus-title'>About Us</h2>
                <p className='aboutus-text'>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in.
                </p>
                <p className='aboutus-text'>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                </p>
                <Link to='/home'>
                  <a className='aboutus-more'>read more</a>
                </Link>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 col-xs-12'>
              <div className='aboutus-banner'>
                <img
                  src='http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='col-md-5 col-sm-6 col-xs-12'>
              <div className='feature'>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      {/* <span className='glyphicon glyphicon-cog icon'></span> */}
                      <span>
                        {" "}
                        <i className='fa fa-cog icon' aria-hidden='true'></i>
                      </span>
                    </div>
                    <div className='feature-content'>
                      <h4>Work with heart</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      {/* <span className='glyphicon glyphicon-cog icon'></span> */}
                      <span>
                        {" "}
                        <i className='fa fa-cog icon' aria-hidden='true'></i>
                      </span>
                    </div>
                    <div className='feature-content'>
                      <h4>Reliable services</h4>
                      <p>
                        Donec vitae sapien ut libero venenatis faucibu. Nullam
                        quis ante. Etiam sit amet orci eget eros faucibus
                        tincidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className='feature-box'>
                  <div className='clearfix'>
                    <div className='iconset'>
                      {/* <span className='glyphicon glyphicon-cog icon'></span> */}
                      <span>
                        {" "}
                        <i className='fa fa-cog icon' aria-hidden='true'></i>
                      </span>
                    </div>
                    <div className='feature-content'>
                      <h4>Great support</h4>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante, dapibus in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter></NewsLetter>
    </div>
  );
};

export default About;
