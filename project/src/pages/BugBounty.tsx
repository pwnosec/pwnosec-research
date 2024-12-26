import React, { useState } from 'react';
import { Search, Filter, Star, Calendar, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BugBounty {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  author: string;
  date: string;
  content: string;
  rating: number;
  comments: any[];
  tags: string[];
  url: string; // Add URL field for navigation
}

const BOUNTIES: BugBounty[] = [
  {
    id: '1',
    title: 'Critical Arbitrary Code Execution in Toyota Affecting Oracle Forms',
    severity: 'critical',
    category: 'Injection',
    author: 'Pwn0sec Research Team',
    date: '2024-03-15',
    content:
      'CVE-2012–3153 merupakan kerentanan kritis yang ditemukan dalam komponen Oracle Fusion Middleware WebLogic Server...',
    rating: 4.8,
    comments: [],
    tags: [
      'Arbitrary Code Execution',
      'Oracle Forms',
      'Oracle',
      'CVE-2012–3153',
    ],
    url: 'https://pwn0sec.medium.com/unauthenticated-rce-bug-bounty-poc-private-bug-bounty-program-cve-2020-11798-dbbb626b9fdb',
  },
  {
    id: '2',
    title:
      'Missing Function Level Access Control in Mozilla formula containsRegular Expression Denial of Service',
    severity: 'medium',
    category: 'Regular Expression',
    author: 'Pwn0sec Research Team',
    date: '2024-03-10',
    content:
      'Eksplorasi mendalam tentang kerentanan eksekusi kode jarak jauh...',
    rating: 4.5,
    comments: [],
    tags: [
      'Improper Access Control',
      'Regular Expression',
      'Bug Bounty',
      'Bedrock',
    ],
    url: 'https://hackerone.com/reports/1879548',
  },
  {
    id: '3',
    title:
      'Server-Side Request Forgery to Internal SMTP Access (Google scholar)',
    severity: 'high',
    category: 'Server-Side Request Forgery',
    author: 'Pwn0sec Research Team',
    date: '2023-11-03',
    content:
      'Google Scholar Server-Side Request Forgery (SSRF) adalah kerentanan di mana penyerang dapat mengirim permintaan yang terkontrol dan dibuat melalui aplikasi yang rentan. Kita dapat berkomunikasi dengan berbagai layanan yang berjalan pada protokol yang berbeda dengan memanfaatkan skema URI. Membuat server mengeluarkan permintaan bukanlah kerentanan itu sendiri, tetapi menjadi kerentanan ketika Anda dapat membuat permintaan ke hal-hal yang biasanya tidak dapat atau tidak seharusnya Anda akses, seperti jaringan internal atau layanan internal.',
    rating: 4.7,
    comments: [],
    tags: [
      'Server-Side Request Forgery',
      'Remote Code Execution',
      'SSRF Exploitation',
      'Google scholar',
      '0day',
    ],
    url: 'https://bughunters.google.com/profile/702cda82-b10f-4d6c-b509-65434bd89b15/awards',
  },
  {
    id: '4',
    title: 'How I Takeover a Machine Bank',
    severity: 'critical',
    category: 'Access Control',
    author: 'Pwn0sec Research Team',
    date: '2024-02-28',
    content: 'Saat melakukan pengintaian terhadap target kami...',
    rating: 4.6,
    comments: [],
    tags: [
      'Sensitive Exposure',
      'Credentials Leaked',
      'IoT Exploitation',
      'Machine Security',
    ],
    url: 'https://pwn0sec.medium.com/how-i-takeover-a-machine-bank-used-credentials-database-after-got-laravel-env-file-f8e9e278bcf0',
  },
];

const severityColors = {
  critical: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200',
};

export const BugBountyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const handleReadFullReport = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredBounties = BOUNTIES.filter((bounty) => {
    const matchesSearch =
      bounty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bounty.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity =
      selectedSeverity === 'all' || bounty.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header and search sections remain the same */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bug Bounty Writeups
        </h1>
        <p className="text-lg text-gray-600">
          Explore our collection of detailed bug bounty reports and security
          research findings. Learn from real-world vulnerabilities and improve
          your security testing skills.
        </p>
      </div>

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

      <div className="grid grid-cols-1 gap-6">
        {filteredBounties.map((bounty) => (
          <div
            key={bounty.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    severityColors[bounty.severity]
                  }`}
                >
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

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {bounty.title}
              </h2>
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
                <button
                  onClick={() => handleReadFullReport(bounty.url)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
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
