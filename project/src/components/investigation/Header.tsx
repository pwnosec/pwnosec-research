import React from 'react';
import { Shield, Calendar, User } from 'lucide-react';

interface HeaderProps {
  title: string;
  date: string;
  author: string;
  type: string;
  typeColor: string;
  imageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  date,
  author,
  type,
  typeColor,
  imageUrl
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
      <span className={`${typeColor} px-3 py-1 rounded-full text-sm font-medium inline-flex items-center`}>
        <Shield className="w-4 h-4 mr-1" />
        {type}
      </span>
      <div className="flex items-center text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        <span className="text-sm">{date}</span>
      </div>
      <div className="flex items-center text-gray-500">
        <User className="w-4 h-4 mr-1" />
        <span className="text-sm">{author}</span>
      </div>
    </div>

    <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

    <img
      src={imageUrl}
      alt={title}
      className="w-full h-64 object-cover rounded-xl mb-6"
    />
  </div>
);