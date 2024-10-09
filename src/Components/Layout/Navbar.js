import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmartlinkLogo from '../../Assets/SmartlinkLogo.jpg';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-lg z-50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo and School Name */}
        <div className="flex items-center -ml-16">
          <Link to="/" className="flex items-center">
            <img src={SmartlinkLogo} alt="School Logo" className="h-16 mr-6 rounded-full shadow-md hover:opacity-90 transition-opacity duration-200" />
            <h1 className="text-3xl font-extrabold tracking-wide text-[#0000A0] shadow-sm leading-tight hover:text-blue-800 transition-colors duration-300">
              SMARTLINK <br /> ACADEMY
            </h1>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-xl ${location.pathname === '/' ? 'text-yellow-600 font-bold' : 'text-gray-800 font-bold hover:text-yellow-600'}`}>
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-xl ${location.pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-800 font-bold hover:text-blue-600'}`}>
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-xl ${location.pathname === '/contact' ? 'text-green-600 font-bold' : 'text-gray-800 font-bold hover:text-green-600'}`}>
            Contact
          </Link>
           {/* Apply Now Button */}
           {location.pathname !== '/apply' && (
            <Link to="/apply" className="text-gray-800 font-bold">
              Apply Now
            </Link>
          )}
          {/* Sign In Button */}
          {location.pathname !== '/register' && location.pathname !== '/login' && (
            <Link to="/login" className="text-gray-800 font-bold">
              Portal
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
