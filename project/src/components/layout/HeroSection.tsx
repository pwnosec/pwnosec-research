import React from 'react';
import { Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Shield className="w-20 h-20 text-cyan-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Cybersecurity Research Community
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our community of security researchers, share knowledge, and contribute to making the digital world safer.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Join Community
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explore Research
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};