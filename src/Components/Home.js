import React from 'react';
import SmartlinkLogo from '../Assets/SmartlinkLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <header className="bg-[url('./Assets/SmartlinkLogo.jpg')] bg-cover bg-center text-white text-center py-60">
                <h1 className="text-6xl font-bold mb-4 text-white-800">Welcome to Smartlink Academy</h1>
                <p className="text-2xl mb-8 text-white-800 py-4 italic">Empowering students through personalized learning experiences.</p>
                <a href="/about" className="bg-green-500 text-white-600 px-6 py-3 rounded hover:bg-green-400 transition">
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
                            "Smartlink Academy has transformed my learning experience!"
                        </blockquote>
                        <p className="font-bold mt-4">- Gabriel Kipkorir Bett</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-yellow-300 text-center py-10">
                <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
                <p>Be a part of our innovative learning community.</p>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-600 text-white text-center py-4">
                <div>
                    <p>&copy; {new Date().getFullYear()} Smartlink Academy. All rights reserved.</p>
                </div>
                <div className="mt-4">
                    <p>Follow us on:</p>
                </div>
                <div className="flex items-center justify-center space-x-8 sm:space-x-16 mt-2">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter profile"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-600 text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
