import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Site</h1>
        {/* Add a navigation bar or anything you want */}
      </header>
      
      {/* This is where the nested routes will be rendered */}
      <Outlet />
      
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default Layout;
