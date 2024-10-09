import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SmartlinkLogo from '../Assets/SmartlinkLogo.jpg'; // Adjust path to your logo

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit the form data
    console.log("Registration successful:", formData);
    // You can add your registration logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col p-8">
      {/* Logo and School Name at the Top Left */}
      <div className="flex items-center mb-8">
        <Link to="/" className="flex items-center">
          <img src={SmartlinkLogo} alt="School Logo" className="h-16 mr-6 rounded-full shadow-md hover:opacity-90 transition-opacity duration-200" />
          <h1 className="text-3xl font-extrabold tracking-wide text-[#0000A0] shadow-sm leading-tight hover:text-blue-800 transition-colors duration-300">
            SMARTLINK <br /> ACADEMY
          </h1>
        </Link>
      </div>

      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="name" // Corrected to match state
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
              >
                REGISTER
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 text-sm">
            Already have an account ?&nbsp;
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
