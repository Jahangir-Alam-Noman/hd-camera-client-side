/** @format */

import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <div className='s-layout'>
        {/* Sidebar  */}
        <div className='s-layout__sidebar'>
          <a className='s-sidebar__trigger' href='#0'>
            <i className='fa fa-bars'></i>
          </a>
          <nav className='s-sidebar__nav'>
            <ul>
              <li>
                <Link to='/home' className='text-decoration-none'>
                  <h1 className='text-white fw-bolder ms-5 '>Garcia</h1>
                </Link>
              </li>
              <li>
                <Link to='payment'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-shopping-cart'></i>
                    <em>Payment</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='myOrder'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-first-order'></i>
                    <em>My Order</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='review'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-bars'></i>
                    <em>Review</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='manageAllOrder'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-sort'></i>
                    <em>ManageAllOrder</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='addProduct'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-product-hunt'></i>
                    <em>Add Product</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='makeAdmin'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-lock'></i>
                    <em>Make Admin</em>
                  </a>
                </Link>
              </li>
              <li>
                <Link to='manageProduct'>
                  <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-user'></i>
                    <em>ManageProduct</em>
                  </a>
                </Link>
              </li>
              <li>
                <a className='s-sidebar__nav-link' href='#0'>
                  <button
                    onClick={logOut}
                    type='button'
                    className='btn btn-danger ms-5'>
                    Log Out
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Content */}
        <main className='s-layout__content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
