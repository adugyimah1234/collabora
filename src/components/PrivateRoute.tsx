import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  // This prop indicates whether the route should be protected
  isProtected: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isProtected }) => {
  const { token } = useAuth(); // Check if the user is authenticated

  if (isProtected && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;