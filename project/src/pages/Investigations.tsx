import React, { useState } from 'react';
import { InvestigationCard } from '../components/investigations/InvestigationCard';
import { FilterBar } from '../components/investigations/FilterBar';
import { Investigation } from '../types';

const INVESTIGATIONS: Investigation[] = [
  {
    id: '1',
    title:
      'Analysis of Sophisticated Phishing Campaign Targeting Financial Institutions',
    summary:
      'Deep dive into a highly sophisticated phishing campaign that targeted major financial institutions using advanced social engineering techniques and convincing domain spoofing.',
    type: 'phishing',
    date: '2024-03-15',
    author: 'Pwn0sec Research Team',
    content:
      'Detailed technical analysis of a sophisticated phishing campaign...',
    infographic:
      'https://i.ibb.co.com/pQNBjLf/Black-and-Purple-Modern-Cyber-Security-Presentation-2.png',
    tags: ['finance', 'social-engineering', 'domain-spoofing'],
  },
  {
    id: '2',
    title: 'BlackCat Ransomware: Technical Analysis and IOCs',
    summary:
      'Comprehensive analysis of the BlackCat (ALPHV) ransomware strain, including its encryption methods, persistence mechanisms, and network behavior patterns.',
    type: 'ransomware',
    date: '2024-03-10',
    author: 'Pwn0sec Research Team',
    content: 'Technical deep dive into the BlackCat ransomware...',
    infographic:
      'https://i.ibb.co.com/HgJd7b1/Black-and-Purple-Modern-Cyber-Security-Presentation.png',
    tags: ['malware-analysis', 'ransomware', 'ioc'],
  },
  {
    id: '3',
    title: 'Emerging DDoS Attack Vectors in Cloud Infrastructure',
    summary:
      'Investigation into new DDoS attack vectors targeting cloud infrastructure, including analysis of amplification techniques and mitigation strategies.',
    type: 'ddos',
    date: '2024-03-05',
    author: 'Pwn0sec Research Team',
    content: 'Analysis of emerging DDoS attack vectors...',
    infographic:
      'https://i.ibb.co.com/NT8VWFk/Black-and-Purple-Modern-Cyber-Security-Presentation-1.png',
    tags: ['cloud-security', 'ddos', 'infrastructure'],
  },
  {
    id: '4',
    title: 'Supply Chain Attack: Compromised NPM Packages Analysis',
    summary:
      'Investigation of a sophisticated supply chain attack involving compromised NPM packages that targeted cryptocurrency wallets and development environments.',
    type: 'other',
    date: '2024-02-28',
    author: 'Pwn0sec Research Team',
    content: 'Detailed analysis of the supply chain attack...',
    infographic:
      'https://i.ibb.co.com/zsgm0bV/Black-and-Purple-Modern-Cyber-Security-Presentation-2.png',
    tags: ['supply-chain', 'npm', 'cryptocurrency'],
  },
];

export const Investigations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredInvestigations = INVESTIGATIONS.filter((investigation) => {
    const matchesSearch =
      investigation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investigation.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === 'all' || investigation.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cybercrime Investigations
        </h1>
        <p className="text-lg text-gray-600">
          Explore our latest cybersecurity research and detailed analysis of
          emerging threats, attack patterns, and defensive strategies. Our team
          provides in-depth technical investigations to help you understand and
          protect against evolving cyber threats.
        </p>
      </div>

      <FilterBar
        searchTerm={searchTerm}
        selectedType={selectedType}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInvestigations.map((investigation) => (
          <InvestigationCard
            key={investigation.id}
            investigation={investigation}
          />
        ))}
      </div>
    </div>
  );
};
