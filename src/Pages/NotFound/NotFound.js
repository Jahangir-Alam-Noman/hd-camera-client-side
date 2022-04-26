/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <div className=' bg-light text-dark not_found mt-2 text-center'>
        <div>
          <h1>
            4{" "}
            <span>
              <i className='fa fa-frown-o' aria-hidden='true'></i>
            </span>{" "}
            4
          </h1>
          <h3>Oops! Page not found!</h3>
          <Link to='/home'>
            {" "}
            <button
              type='button'
              className='btn btn-outline-dark mt-4 px-3 py-2'>
              Go back to home page
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
