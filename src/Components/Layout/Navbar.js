import React from 'react';
import { Link } from 'react-router-dom';
import SmartlinkLogo from '../../Assets/SmartlinkLogo.jpg'; // Adjust the path to your logo

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo and School Name */}
        <div className="flex items-center">
            <Link to="/" className="flex items-center">
          <img src={SmartlinkLogo} alt="School Logo" className="h-20 mr-10" />
          <h1 className="text-3xl font-bold text-violet-600">
            SMARTLINK <br></br>ACADEMY
          </h1>
          </Link>
        </div>

        {/* Navigation Links (optional) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="tex-xl text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="tex-xl text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="tex-xl text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
