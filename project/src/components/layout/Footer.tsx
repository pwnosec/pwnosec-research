import React from 'react';
import { NewsletterForm } from '../forms/NewsletterForm';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-cyan-500 mr-2" />
              <span className="font-bold text-xl">PwnOsec Research</span>
            </div>
            <p className="text-gray-400 mb-4">
              PwnOsec Cybersecurity Research adalah divisi dari PT. PwnOsec
              Technologies Ltd, perusahaan yang berdedikasi untuk penelitian dan pengembangan
              di bidang keamanan siber. Kami menggabungkan keahlian teknologi
              dengan inovasi untuk menciptakan solusi keamanan revolusioner dan
              melindungi dunia digital dari ancaman yang terus berkembang.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
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
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Buletin</h3>
            <NewsletterForm />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Hak Cipta © {new Date().getFullYear()} PT. PwnOsec Technologies Ltd (PWN GROUPS). Seluruh hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};