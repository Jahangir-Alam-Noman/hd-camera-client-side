/** @format */

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  const location = useLocation();
  if (isLoading) {
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AdminRoute;
