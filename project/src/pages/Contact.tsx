import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our research or services? We're here to help.
          Reach out to our team using any of the methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-cyan-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@pwnosec.com</p>
                  <p className="text-gray-600">support@pwnosec.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-cyan-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-cyan-500 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">
                    Cyber Building 2, 18th Floor<br />
                    Jl. Kuningan Barat No. 8<br />
                    Jakarta Selatan 12710<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};