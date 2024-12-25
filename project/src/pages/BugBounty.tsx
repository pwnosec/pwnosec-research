import React, { useState } from 'react';
import { BugBounty } from '../types';
import { Search, Filter, Star, Calendar, User, Tag } from 'lucide-react';

const BOUNTIES: BugBounty[] = [
  {
    id: '1',
    title: 'Critical SQL Injection in GitLab CE/EE Affecting GraphQL',
    severity: 'critical',
    category: 'Injection',
    author: 'Pwn0sec Research Team',
    date: '2024-03-15',
    content: 'A detailed analysis of a critical SQL injection vulnerability discovered in GitLab CE/EE affecting the GraphQL endpoint. This vulnerability could allow an attacker to execute arbitrary SQL commands on the backend database server.',
    rating: 4.8,
    comments: [],
    tags: ['SQL Injection', 'GraphQL', 'GitLab', 'CVE-2023-XXXX']
  },
  {
    id: '2',
    title: 'Remote Code Execution via File Upload in WordPress Plugin',
    severity: 'critical',
    category: 'File Upload',
    author: 'Pwn0sec Research Team',
    date: '2024-03-10',
    content: 'An in-depth exploration of a remote code execution vulnerability found in a popular WordPress plugin through unrestricted file upload functionality. The vulnerability allows attackers to upload and execute malicious PHP files.',
    rating: 4.5,
    comments: [],
    tags: ['RCE', 'WordPress', 'File Upload', 'Plugin Security']
  },
  {
    id: '3',
    title: 'Authentication Bypass in Azure Active Directory B2C',
    severity: 'high',
    category: 'Authentication',
    author: 'Pwn0sec Research Team',
    date: '2024-03-05',
    content: 'A comprehensive analysis of an authentication bypass vulnerability discovered in Azure AD B2C that could allow attackers to bypass MFA and gain unauthorized access to user accounts.',
    rating: 4.7,
    comments: [],
    tags: ['Azure', 'Authentication Bypass', 'MFA', 'Cloud Security']
  },
  {
    id: '4',
    title: 'IDOR Vulnerability in AWS Cognito User Pools',
    severity: 'high',
    category: 'Access Control',
    author: 'Pwn0sec Research Team',
    date: '2024-02-28',
    content: 'A detailed writeup on an Insecure Direct Object Reference (IDOR) vulnerability found in AWS Cognito User Pools that could allow unauthorized access to user data across different pools.',
    rating: 4.6,
    comments: [],
    tags: ['AWS', 'IDOR', 'Cognito', 'Cloud Security']
  }
];

const severityColors = {
  critical: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200'
};

export const BugBountyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const filteredBounties = BOUNTIES.filter(bounty => {
    const matchesSearch = bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bounty.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || bounty.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bug Bounty Writeups</h1>
        <p className="text-lg text-gray-600">
          Explore our collection of detailed bug bounty reports and security research findings.
          Learn from real-world vulnerabilities and improve your security testing skills.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search writeups..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 h-5 w-5" />
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Writeups Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredBounties.map((bounty) => (
          <div key={bounty.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${severityColors[bounty.severity]}`}>
                  {bounty.severity.toUpperCase()}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bounty.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <User className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bounty.author}</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  <span className="text-sm">{bounty.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">{bounty.title}</h2>
              <p className="text-gray-600 mb-4">{bounty.content}</p>

              <div className="flex flex-wrap gap-2">
                {bounty.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Read Full Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};