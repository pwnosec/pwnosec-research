import React from 'react';
import {
  Shield,
  Calendar,
  User,
  Link,
  AlertTriangle,
  CheckCircle,
  Target,
  Lock,
  Zap,
  Database,
} from 'lucide-react';

export const PhishingCampaignAnalysis: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Phishing Analysis
          </span>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">March 15, 2024</span>
          </div>
          <div className="flex items-center text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">Pwn0sec Research Team</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Analysis of Sophisticated Phishing Campaign Targeting Financial
          Institutions
        </h1>

        <img
          src="https://i.ibb.co.com/pQNBjLf/Black-and-Purple-Modern-Cyber-Security-Presentation-2.png"
          alt="Phishing Campaign Analysis"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Executive Summary
        </h2>
        <p className="text-gray-600 mb-4">
          Pada awal Maret 2024, tim peneliti kami mengidentifikasi kampanye
          phishing canggih yang menargetkan berbagai lembaga keuangan di Asia
          Tenggara. Kampanye ini menggunakan kombinasi teknik social engineering
          tingkat lanjut, domain spoofing yang meyakinkan, dan malware khusus
          untuk mencuri kredensial perbankan serta membypass mekanisme
          two-factor authentication (2FA).
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Penilaian Dampak
              </h3>
              <div className="mt-2 text-sm text-yellow-700 space-y-1">
                <p>Tingkat Keparahan: Tinggi</p>
                <p>Lembaga Terdampak: 15+ Bank dan Lembaga Keuangan</p>
                <p>Estimasi Kerugian: Rp 35,7 Miliar</p>
                <p>Area Terdampak: Indonesia, Malaysia, Singapura, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Analisis Mendalam
        </h2>

        <div className="space-y-6">
          {/* Attack Timeline */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-red-500" />
              Timeline Serangan
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                  Fase 1
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 font-medium">
                    Persiapan Infrastruktur
                  </p>
                  <p className="text-gray-600">
                    Pembuatan domain palsu, sertifikat SSL, dan server C2
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                  Fase 2
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 font-medium">
                    Pengumpulan Target
                  </p>
                  <p className="text-gray-600">
                    Pengumpulan data karyawan dan nasabah melalui OSINT
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                  Fase 3
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 font-medium">Distribusi Email</p>
                  <p className="text-gray-600">
                    Pengiriman email phishing yang ditargetkan
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                  Fase 4
                </div>
                <div className="flex-grow">
                  <p className="text-gray-800 font-medium">Eksfiltrasi Data</p>
                  <p className="text-gray-600">
                    Pencurian kredensial dan bypass 2FA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Attack Techniques */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Teknik Serangan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">
                  Social Engineering
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Impersonasi pejabat bank senior</li>
                  <li>Manipulasi psikologis berbasis urgensi</li>
                  <li>Pemalsuan dokumen resmi bank</li>
                  <li>Penggunaan bahasa lokal yang akurat</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">Teknik Teknis</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Domain spoofing dengan IDN homograph</li>
                  <li>Reverse proxy untuk situs palsu</li>
                  <li>Man-in-the-middle untuk 2FA</li>
                  <li>Eksploitasi zero-day di aplikasi mobile</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Infrastructure Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-purple-500" />
              Analisis Infrastruktur
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Domain Pattern
                </h4>
                <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                  {`Pattern: bank-{institution}-secure-{random}.com
Registrar: NameCheap, GoDaddy
SSL Issuer: Let's Encrypt
Server: Nginx/1.20.1 dengan custom configuration
Hosting: Mix of AWS, Digital Ocean, dan Linode`}
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Karakteristik Teknis
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Load balancing menggunakan Cloudflare</li>
                  <li>Anti-bot protection dengan custom JavaScript</li>
                  <li>Geofencing untuk target spesifik</li>
                  <li>Enkripsi end-to-end untuk data curian</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Analisis Dampak
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Dampak Finansial
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span>Kerugian langsung: Rp 35,7 Miliar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span>Biaya pemulihan sistem: Rp 12,3 Miliar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span>Kompensasi nasabah: Rp 8,5 Miliar</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Dampak Non-Finansial
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Penurunan kepercayaan nasabah</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Peningkatan pengawasan regulator</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Kerusakan reputasi jangka panjang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mitigation Strategies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Strategi Mitigasi
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-green-500" />
                Mitigasi Teknis
              </h3>
              <ul className="space-y-2">
                {[
                  'Implementasi DMARC, SPF, dan DKIM',
                  'Penggunaan hardware security key untuk 2FA',
                  'Penerapan anomaly detection berbasis AI',
                  'Monitoring domain lookalike secara real-time',
                  'Implementasi zero trust architecture',
                ].map((strategy, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-500" />
                Mitigasi Non-Teknis
              </h3>
              <ul className="space-y-2">
                {[
                  'Pelatihan kesadaran keamanan rutin',
                  'Simulasi phishing berkala',
                  'Pembaruan kebijakan keamanan',
                  'Koordinasi dengan CERT nasional',
                  'Program bug bounty internal',
                ].map((strategy, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Referensi & Sumber Daya
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Dokumen Teknis
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'MITRE ATT&CK - Phishing Techniques', url: '#' },
                  { text: 'Financial Sector Phishing Trends 2024', url: '#' },
                  { text: 'Domain Monitoring Best Practices', url: '#' },
                ].map((ref, index) => (
                  <div key={index} className="flex items-center">
                    <Link className="w-4 h-4 text-cyan-500 mr-2" />
                    <a href={ref.url} className="text-cyan-500 hover:underline">
                      {ref.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Regulasi & Standar
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'OJK - Panduan Keamanan Siber', url: '#' },
                  { text: 'ISO 27001:2013 Implementation', url: '#' },
                  { text: 'NIST Cybersecurity Framework', url: '#' },
                ].map((ref, index) => (
                  <div key={index} className="flex items-center">
                    <Link className="w-4 h-4 text-cyan-500 mr-2" />
                    <a href={ref.url} className="text-cyan-500 hover:underline">
                      {ref.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
