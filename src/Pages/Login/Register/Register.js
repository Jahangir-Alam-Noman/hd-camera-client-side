/** @format */

import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../../Home/NewsLetter/NewsLetter";
import Header from "../../Shared/Header/Header";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <Header></Header>
      <div className='maincontainer'>
        <div className='customContainer'>
          <div id='output'></div>
          <div className='avatar'></div>
          <div className='form-box'>
            <input name='name' type='text' placeholder='Name' />
            <input name='email' type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            {/* <button
              type='submit'
              onclick='ff()'
              className='login text-dark btn-success'>
              Sign Up
            </button> */}

            <button className='facebook' type='submit'>
              Sign Up
            </button>

            <div>
              Already Account ?
              <Link to='/login'>
                <a href='#' className='text-decoration-none'>
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Register;
