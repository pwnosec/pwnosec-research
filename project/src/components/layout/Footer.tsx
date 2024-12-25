import React from 'react';
import { NewsletterForm } from '../forms/NewsletterForm';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              PwnOsec Cybersecurity Research is a division of PT. PwnOsec
              Technologies Ltd, a company dedicated to research and development
              in the field of cybersecurity. We combine technological expertise
              with innovation to create revolutionary security solutions and
              protect the digital world from ever-evolving threats.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/investigations" className="hover:text-white">
                  Investigations
                </a>
              </li>
              <li>
                <a href="/bug-bounty" className="hover:text-white">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
};
