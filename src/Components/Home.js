import React from 'react';
// import SmartlinkLogo from './Components/Images/SmartlinkLogo.jpg';

const Home = () => {
    return (
      <div className="font-sans">
        {/* Hero Section */}
        <header className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to Smartlink Academy</h1>
          <p className="text-xl mb-8">Empowering students through personalized learning experiences.</p>
          <a href="/about" className="bg-yellow-500 text-blue-600 px-6 py-3 rounded hover:bg-yellow-400 transition">
            Learn More
          </a>
        </header>
  
        {/* Features Section */}
        <section className="p-10">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Personalized Learning</h3>
              <p>Tailored learning paths to meet each student's needs.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Collaborative Environment</h3>
              <p>Encouraging teamwork and collaboration among students.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="font-semibold text-xl">Innovative Curriculum</h3>
              <p>Curriculum that fosters creativity and critical thinking.</p>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="bg-gray-200 py-10">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <blockquote className="italic text-lg">
                "Khan Lab School has transformed my learning experience!"
              </blockquote>
              <p className="font-bold mt-4">- Student Name</p>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="bg-yellow-300 text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
          <p>Be a part of our innovative learning community.</p>
          <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">
            Sign Up
          </a>
        </section>
  
        {/* Footer Section */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Smartlink Academy. All rights reserved.</p>
        </footer>
      </div>
    );
  };

export default Home;
