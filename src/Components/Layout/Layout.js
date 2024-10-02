import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Importing Navbar component

const Layout = () => {
  return (
    <div>
      {/* Navbar will always be rendered */}
      <Navbar />

      {/* The Outlet component will render the current route */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
