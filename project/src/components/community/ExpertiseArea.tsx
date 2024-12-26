import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseAreaProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ExpertiseArea: React.FC<ExpertiseAreaProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="text-cyan-500 mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);