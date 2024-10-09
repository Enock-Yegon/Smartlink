import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="container mx-auto p-16 mt-28">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form  */}
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">Get in Touch</h2>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input type="text" id="name" className="border rounded w-full p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input type="email" id="email" className="border rounded w-full p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="border rounded w-full p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea id="message" className="border rounded w-full p-2" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Send Message</button>
        </form>
        
        {/* Contact Information */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Email:</strong>
            <a href="mailto:smartlinkacademy@gmail.com" className='text-blue-600 hover:underline flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> 
              smartlinkacademy@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Phone:</strong>
            <a href="tel:+254728963403" className="text-blue-600 hover:underline flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> 
              +254728963403
            </a>
          </p>
          <p className="mb-2">
            <strong>Address:</strong>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 
              P.O BOX 103, SOTIK.
            </span>
          </p>
          <p className="mb-2">
            <strong>Business Hours:</strong>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2" /> 
              Mon-Fri, 8am - 5pm
            </span>
          </p>
          <div className="flex space-x-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-600 text-2xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    
      {/* Map */}
      <div className="mt-6">
        <h2 className="text-2xl mb-4">Our Location</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124318.06206418767!2d35.79838834732765!3d-0.2973394072431833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828ae5b1aa7afc9%3A0x9d9ee05e1a0da9d6!2sBomet%20County!5e0!3m2!1sen!2ske!4v1635607846534!5m2!1sen!2ske" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
