import React from "react";

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      {/* Page Header */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Reach out to us for inquiries, questions, or personalized support.
        </p>
      </div>

      {/* Contact Form and Details */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Contact Information
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center gap-4">
              <span className="text-violet-700 text-2xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="text-lg">+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-violet-700 text-2xl">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="text-lg">info@mekanrealestate.com</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-violet-700 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="text-lg">
                123 Main Street, Suite 101, Los Angeles, CA 90210
              </span>
            </li>
          </ul>
          {/* Social Media Buttons */}
          <div className="flex justify-start gap-6 mt-8">
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://wa.me/your_phone_number"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/whatsapp.png"
                  alt="WhatsApp"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/twitter.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
