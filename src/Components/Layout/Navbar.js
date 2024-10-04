import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmartlinkLogo from '../../Assets/SmartlinkLogo.jpg'; // Adjust the path to your logo

const Navbar = () => {
  const location = useLocation(); // Using useLocation to get the current path
    return (
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-6">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={SmartlinkLogo} alt="School Logo" className="h-20 mr-10" />
              <h1 className="text-3xl font-bold text-violet-600">
                SMARTLINK <br /> ACADEMY
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <Link to="/" className={`text-xl ${location.pathname === '/' ? 'text-red-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
              Home
            </Link>
            <Link to="/about" className={`text-xl ${location.pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
              About
            </Link>
            <Link to="/contact" className={`text-xl ${location.pathname === '/contact' ? 'text-green-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>
              Contact
            </Link>
            {/* Conditionally render the Sign In button */}
            {location.pathname !== '/register' && location.pathname !== '/login' && (
              <div className="ml-auto bg-blue-600 text-white px-6 py-30 rounded hover:bg-blue-500 transition">
                <Link to="/login">Sign In</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
