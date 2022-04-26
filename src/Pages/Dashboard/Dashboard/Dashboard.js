/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";

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
                  {/* <a className='s-sidebar__nav-link' href='#0'>
                    <i className='fa fa-home'></i>
                    <em>Home</em>
                  </a> */}
                  {/* <img src={logo} alt='' className='ms-5' /> */}
                  <h1 className='text-white fw-bolder ms-5 '>Garcia</h1>
                </Link>
              </li>
              <li>
                <a className='s-sidebar__nav-link' href='#0'>
                  <i className='fa fa-user'></i>
                  <em>My Profile</em>
                </a>
              </li>
              <li>
                <a className='s-sidebar__nav-link' href='#0'>
                  <i className='fa fa-camera'></i>
                  <em>Camera</em>
                </a>
              </li>
              <li>
                <a className='s-sidebar__nav-link' href='#0'>
                  <i className='fa fa-user'></i>
                  <em>My Profile</em>
                </a>
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
