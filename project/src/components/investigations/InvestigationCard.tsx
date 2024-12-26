import React from 'react';
import { Calendar, User, ExternalLink, Shield, AlertTriangle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Investigation } from '../../types';
import { getTypeColor } from '../../utils/colors';

interface Props {
  investigation: Investigation;
}

export const InvestigationCard: React.FC<Props> = ({ investigation }) => {
  const typeColor = getTypeColor(investigation.type);
  
  const TypeIcon = {
    phishing: Globe,
    ransomware: Shield,
    ddos: AlertTriangle,
    other: ExternalLink
  }[investigation.type];

  // Fungsi untuk menghasilkan URL yang valid
  const getInvestigationPath = (title: string) => {
    return `/investigations/${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;
  };

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {investigation.infographic && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={investigation.infographic} 
            alt={investigation.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColor}`}>
            <TypeIcon className="w-4 h-4 mr-1" />
            {investigation.type.charAt(0).toUpperCase() + investigation.type.slice(1)}
          </span>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{investigation.date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">{investigation.author}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{investigation.title}</h3>
        <p className="text-gray-600 mb-4">{investigation.summary}</p>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-2">
            {investigation.tags?.map((tag, index) => (
              <span key={index} className="text-sm text-gray-500">#{tag}</span>
            ))}
          </div>
          <Link 
            to={getInvestigationPath(investigation.title)}
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Read Analysis
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
};