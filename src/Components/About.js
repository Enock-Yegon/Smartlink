import React from 'react';

const About = () => {
  const teamMembers = [
    { name: 'Alice Johnson', title: 'CEO', bio: 'Alice has over 20 years of experience in the tech industry.', image: 'path/to/alice.jpg' },
    { name: 'Bob Smith', title: 'CTO', bio: 'Bob is an expert in software development and cloud computing.', image: 'path/to/bob.jpg' },
    { name: 'Charlie Brown', title: 'CFO', bio: 'Charlie specializes in financial planning and analysis.', image: 'path/to/charlie.jpg' },
  ];

  const testimonials = [
    { quote: 'This company changed my life!', author: 'John Doe' },
    { quote: 'Amazing service and support!', author: 'Jane Smith' },
  ];

  return (
    <div className="container mx-auto p-16 mt-28">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

      {/* Mission Statement */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          Our mission is to provide innovative solutions that empower individuals and organizations to achieve their goals.
        </p>
      </section>

      {/* Company History */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Company History</h2>
        <p className="mt-2">
          Founded in 2005, our school has grown from a small pre-school to a leading primary and junior secondary schooln.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Core Values</h2>
        <ul className="mt-2 list-disc list-inside">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      </section>

      {/* Team Introductions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-4 rounded shadow-md text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="text-xl font-bold mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
        <div className="mt-2">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="border-l-4 border-blue-600 pl-4 italic my-2">
              <p>"{testimonial.quote}"</p>
              <footer className="mt-1">- {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Get In Touch</h2>
        <p className="mt-2">
          Want to know more about our school? <a href="/contact" className="text-blue-600 hover:underline">Contact us!</a>
        </p>
      </section>
    </div>
  );
};

export default About;
