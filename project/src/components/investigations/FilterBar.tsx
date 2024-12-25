import React from 'react';
import { Search, Filter } from 'lucide-react';

interface Props {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export const FilterBar: React.FC<Props> = ({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange
}) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search investigations..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Filter className="text-gray-400 h-5 w-5" />
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="phishing">Phishing</option>
          <option value="ransomware">Ransomware</option>
          <option value="ddos">DDoS</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};