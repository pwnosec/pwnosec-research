import React, { useState } from 'react';
import {
  Search,
  Filter,
  Code,
  AlertTriangle,
  ExternalLink,
  Shield,
  Terminal,
  GitBranch,
} from 'lucide-react';

interface PoC {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'network' | 'hardware' | 'cloud';
  severity: 'critical' | 'high' | 'medium' | 'low';
  author: string;
  date: string;
  tags: string[];
  cve?: string;
  githubUrl?: string;
}

const PROOF_OF_CONCEPTS: PoC[] = [
  {
    id: '1',
    title: 'Remote Code Execution in Ferari Private Bug Bounty Program',
    description:
      'This document provides a comprehensive presentation on CVE-2020-11798, a Remote Code Execution (RCE) vulnerability discovered in specific software. It covers the technical details of the vulnerability, including the vulnerable code, steps to execute a proof of concept (PoC), and a relevant presentation video. Through this document, readers are expected to gain an understanding of how this vulnerability can be exploited and the mitigation steps that can be taken. CVE-2020-11798 is a vulnerability found in software utilizing Apache Commons Collections. This vulnerability allows attackers to execute arbitrary code on vulnerable systems without requiring authentication. It is highly critical due to its remote exploitability, enabling attackers to take full control of affected systems.',
    category: 'web',
    severity: 'critical',
    author: 'Pwn0sec Research Team',
    date: '2024-03-15',
    tags: ['rce', 'ferari', 'hackerone', 'private-program'],
    cve: 'CVE-2020–11798',
    githubUrl:
      'https://pwn0sec.medium.com/unauthenticated-rce-bug-bounty-poc-private-bug-bounty-program-cve-2020-11798-dbbb626b9fdb',
  },
  {
    id: '2',
    title: 'Android WebView JavaScript Interface Exploitation',
    description:
      'Exploitation of insecure WebView implementation in Android applications, allowing arbitrary code execution through JavaScript interface injection.',
    category: 'mobile',
    severity: 'high',
    author: 'Pwn0sec Research Team',
    date: '2024-03-10',
    tags: ['android', 'webview', 'javascript', 'mobile-security'],
    cve: 'CVE-2024-5678',
    githubUrl: 'https://github.com/pwn0sec/android-webview-poc',
  },
  {
    id: '3',
    title: 'AWS Lambda Function URL Authentication Bypass',
    description:
      'A proof of concept demonstrating authentication bypass in AWS Lambda Function URLs through manipulation of IAM policies and request signatures.',
    category: 'cloud',
    severity: 'critical',
    author: 'Pwn0sec Research Team',
    date: '2024-03-05',
    tags: ['aws', 'lambda', 'authentication', 'cloud-security'],
    cve: 'CVE-2024-9012',
    githubUrl: 'https://github.com/pwn0sec/lambda-auth-bypass',
  },
  {
    id: '4',
    title: 'Router Firmware Buffer Overflow Exploitation',
    description:
      'Detailed analysis and exploitation of buffer overflow vulnerability in popular router firmware, leading to remote code execution with root privileges.',
    category: 'hardware',
    severity: 'critical',
    author: 'Pwn0sec Research Team',
    date: '2024-02-28',
    tags: ['iot', 'buffer-overflow', 'firmware', 'router'],
    cve: 'CVE-2024-3456',
    githubUrl: 'https://github.com/pwn0sec/router-firmware-exploit',
  },
];

const severityColors = {
  critical: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200',
};

const categoryIcons = {
  web: Code,
  mobile: Terminal,
  network: GitBranch,
  hardware: Shield,
  cloud: ExternalLink,
};

export const ProofOfConcepts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const filteredPocs = PROOF_OF_CONCEPTS.filter((poc) => {
    const matchesSearch =
      poc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      poc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || poc.category === selectedCategory;
    const matchesSeverity =
      selectedSeverity === 'all' || poc.severity === selectedSeverity;
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Proof of Concepts
        </h1>
        <p className="text-lg text-gray-600">
          Explore our collection of security proof of concepts, demonstrating
          various vulnerabilities and exploitation techniques. All PoCs are
          disclosed responsibly and published after vendor patches.
        </p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <AlertTriangle className="h-6 w-6 text-yellow-400" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Responsible Usage Notice
            </h3>
            <p className="mt-2 text-sm text-yellow-700">
              These proof of concepts are provided for educational and research
              purposes only. Use them responsibly and only on systems you own or
              have explicit permission to test.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search PoCs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="network">Network</option>
                <option value="hardware">Hardware</option>
                <option value="cloud">Cloud</option>
              </select>
            </div>
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
      </div>

      {/* PoC Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPocs.map((poc) => {
          const CategoryIcon = categoryIcons[poc.category];
          return (
            <div
              key={poc.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      severityColors[poc.severity]
                    }`}
                  >
                    {poc.severity.toUpperCase()}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    <CategoryIcon className="w-4 h-4 mr-1" />
                    {poc.category.charAt(0).toUpperCase() +
                      poc.category.slice(1)}
                  </span>
                  {poc.cve && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      {poc.cve}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {poc.title}
                </h2>
                <p className="text-gray-600 mb-4">{poc.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {poc.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>{poc.author}</span>
                    <span>{poc.date}</span>
                  </div>
                  {poc.githubUrl && (
                    <a
                      href={poc.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-500 hover:text-cyan-600"
                    >
                      View on Medium
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
