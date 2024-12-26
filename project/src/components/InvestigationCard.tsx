import React from 'react';
import { Shield, Calendar, User } from 'lucide-react';
import { Investigation } from '../types';

interface Props {
  investigation: Investigation;
}

const InvestigationCard: React.FC<Props> = ({ investigation }) => {
  const typeColors = {
    phishing: 'bg-blue-100 text-blue-800',
    ransomware: 'bg-red-100 text-red-800',
    ddos: 'bg-yellow-100 text-yellow-800',
    other: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[investigation.type]}`}>
            {investigation.type.charAt(0).toUpperCase() + investigation.type.slice(1)}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {investigation.date}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{investigation.title}</h3>
        <p className="text-gray-600 mb-4">{investigation.summary}</p>
        
        <div className="flex items-center text-gray-500 text-sm">
          <User className="w-4 h-4 mr-1" />
          <span>{investigation.author}</span>
        </div>
      </div>
      
      {investigation.infographic && (
        <div className="border-t border-gray-100">
          <img 
            src={investigation.infographic} 
            alt="Investigation Infographic" 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
    </div>
  );
};