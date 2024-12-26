import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleResearchClick = () => {
    window.location.href = 'https://hackerboard.pwn0sec.com/';
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Shield className="w-20 h-20 text-cyan-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Penelitian & Inovasi Keamanan Siber Terdepan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Bergabunglah dengan komunitas peneliti keamanan elit kami dan berkontribusi untuk membuat dunia digital lebih aman. 
            Kami menggabungkan penelitian mutakhir dengan solusi praktis untuk melawan ancaman siber yang berkembang.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Gabung Komunitas
            </button>
            <button 
              onClick={handleResearchClick}
              className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Jelajahi Penelitian
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">150+</div>
              <div className="text-gray-400">Peneliti Keamanan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">300+</div>
              <div className="text-gray-400">Laporan Dipublikasikan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">50Jt+</div>
              <div className="text-gray-400">Ancaman Terdeteksi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">25+</div>
              <div className="text-gray-400">Negara Dilayani</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};