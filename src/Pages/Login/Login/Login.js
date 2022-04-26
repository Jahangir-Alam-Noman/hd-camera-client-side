/** @format */

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NewsLetter from "../../Home/NewsLetter/NewsLetter";
import Header from "../../Shared/Header/Header";

import "./Login.css";

const Login = () => {
  //   function ff() {
  //     let arr = "Successful LogIn ! ";
  //     alert(arr);
  //   }
  //   ff();
  const { signInWithGoogle, logOut } = useAuth();
  return (
    <div>
      <Header></Header>
      {/* <h1>This is login page</h1>
      <button onClick={signInWithGoogle} className='btn-danger'>
        {" "}
        Google{" "}
      </button> */}

      <div className='maincontainer'>
        <div className='customContainer'>
          <div id='output'></div>
          <div className='avatar'></div>
          <div className='form-box'>
            <input name='user' type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            {/* <button type='submit' onclick='ff()' className='login'>
              Login
            </button> */}

            <button className='facebook' type='submit'>
              Login
            </button>

            <h1 className='tex'>OR</h1>
            {/* <a href=' '>
              <button className='facebook' type='submit'>
                facebook
              </button>
            </a> */}

            <button onClick={signInWithGoogle} className='google' type='submit'>
              Google+
            </button>

            <div>
              Don't have an account ?
              <Link to='/register'>
                <a href='#' className='text-decoration-none'>
                  Sign Up
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

export default Login;
