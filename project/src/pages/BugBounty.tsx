import React, { useState } from 'react';
import { BugBounty } from '../types';
import { Search, Filter, Star, Calendar, User, Tag } from 'lucide-react';

const BOUNTIES: BugBounty[] = [
  {
    id: '1',
    title: 'Critical Arbitrary Code Execution in Toyota Affecting Oracle Forms',
    severity: 'critical',
    category: 'Injection',
    author: 'Pwn0sec Research Team',
    date: '2024-03-15',
    content:
      'CVE-2012–3153 merupakan kerentanan kritis yang ditemukan dalam komponen Oracle Fusion Middleware WebLogic Server. Kerentanan ini memungkinkan penyerang jarak jauh yang tidak terautentikasi untuk mendapatkan akses ke sistem target melalui eksploitasi JMX (Java Management Extensions) pada server WebLogic. Kerentanan ini secara khusus berdampak pada beberapa versi WebLogic Server yang digunakan dalam lingkungan Toyota Company, memberikan potensi bagi pelaku jahat untuk mengambil alih kontrol server dan merusak sistem aplikasi perusahaan.',
    rating: 4.8,
    comments: [],
    tags: [
      'Arbitrary Code Execution',
      'Oracle Forms',
      'Oracle',
      'CVE-2012–3153',
    ],
  },
  {
    id: '2',
    title: 'Remote Code Execution via File Upload in WordPress Plugin',
    severity: 'critical',
    category: 'File Upload',
    author: 'Pwn0sec Research Team',
    date: '2024-03-10',
    content:
      'Eksplorasi mendalam tentang kerentanan eksekusi kode jarak jauh yang ditemukan di plugin WordPress populer melalui fungsionalitas pengunggahan file yang tidak dibatasi. Kerentanan ini memungkinkan penyerang untuk mengunggah dan mengeksekusi file PHP berbahaya.',
    rating: 4.5,
    comments: [],
    tags: ['RCE', 'WordPress', 'File Upload', 'Plugin Security'],
  },
  {
    id: '3',
    title:
      'HTTP Server Path Traversal or Remote Code Execution via CVE-2021–42013',
    severity: 'high',
    category: 'Authentication',
    author: 'Pwn0sec Research Team',
    date: '2024-03-05',
    content:
      'Kerentanan penelusuran jalur diperkenalkan karena perubahan kode baru yang ditambahkan untuk normalisasi jalur, yaitu untuk jalur URL untuk menghapus bagian yang tidak diinginkan atau berbahaya dari nama jalur, tetapi tidak cukup untuk mendeteksi teknik yang berbeda dalam mengkodekan karakter penelusuran jalur “titik-titik garis miring (../)” Untuk mencegah serangan penelusuran jalur, fungsi normalisasi yang bertanggung jawab untuk menyelesaikan nilai yang dikodekan URL dari URI yang diminta, menyelesaikan nilai Unicode satu per satu. Oleh karena itu, ketika URL mengkodekan titik kedua sebagai %2e, logika gagal mengenali %2e sebagai titik sehingga tidak mendekodekannya, hal ini mengubah karakter ../ menjadi .%2e/ dan melewati pemeriksaan. Bersama dengan bypass pemeriksaan penelusuran jalur, agar server HTTP Apache menjadi rentan, konfigurasi Server HTTP harus berisi direktori direktori untuk seluruh sistem berkas server sebagai Require all granted atau direktori direktori harus benar-benar hilang dari file konfigurasi.',
    rating: 4.7,
    comments: [],
    tags: [
      'Path Traversal',
      'Remote Code Execution',
      'Oracle Fusion',
      'WebLogic Server',
      'CVE-2021–42013',
    ],
  },
  {
    id: '4',
    title: 'How I Takeover a Machine Bank',
    severity: 'critical',
    category: 'Access Control',
    author: 'Pwn0sec Research Team',
    date: '2024-02-28',
    content:
      'Saat melakukan pengintaian terhadap target kami, kami menemukan sebuah subdomain. Selama proses penemuan konten pada subdomain ini, kami menemukan kesalahan 403 ketika mencoba mengakses file .env. Namun, perlu dicatat bahwa ada beberapa batasan tertentu yang diberlakukan saat mengakses langsung catatan CNAME mereka, misalnya, yang dihosting di bankaltimtara.co.id dan muncul sebagai *.eform.bankaltimtara.co.id. Menariknya, tidak ada batasan seperti itu, sehingga kami berhasil mengakses file .env. Exploiting this Vulnerability Setelah melakukan pengintaian, ditemukan subdomain yang merupakan kerangka kerja backend yang dimaksud adalah laravel. Setelah menemukan subdomain, saya mulai melakukan penemuan konten ke subdomain tersebut dan menemukan bahwa file .env diungkapkan melalui pwnfuzz Sekarang ketika kita membuka jalur .env kita di browser kita dan itu menunjukkan bahwa kita mendapat status 200 file dapat diakses',
    rating: 4.6,
    comments: [],
    tags: [
      'Sensitive Exposure',
      'Credentials Leaked',
      'IoT Exploitation',
      'Machine Security',
    ],
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
