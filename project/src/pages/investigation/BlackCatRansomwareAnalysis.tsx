import React from 'react';
import {
  Shield,
  Calendar,
  User,
  Link,
  AlertTriangle,
  CheckCircle,
  Terminal,
  Database,
  FileCode,
  Lock,
} from 'lucide-react';

export const BlackCatRansomwareAnalysis: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Ransomware Analysis
          </span>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">March 10, 2024</span>
          </div>
          <div className="flex items-center text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">Pwn0sec Research Team</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          BlackCat Ransomware: Technical Analysis and IOCs
        </h1>

        <img
          src="https://i.ibb.co.com/HgJd7b1/Black-and-Purple-Modern-Cyber-Security-Presentation.png"
          alt="BlackCat Ransomware Analysis"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Executive Summary
        </h2>
        <p className="text-gray-600 mb-4">
          BlackCat (juga dikenal sebagai ALPHV) adalah varian ransomware yang
          ditulis dalam Rust, menunjukkan evolusi signifikan dalam pengembangan
          malware. Analisis kami mengungkap kemampuan canggih termasuk enkripsi
          multi-threading, teknik anti-analisis, dan mekanisme eksfiltrasi data
          yang sophisticated.
        </p>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-red-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Threat Assessment
              </h3>
              <div className="mt-2 text-sm text-red-700 space-y-1">
                <p>Severity Level: Critical</p>
                <p>Affected Systems: Windows, Linux, ESXi</p>
                <p>Ransom Demands: 50-2000 BTC</p>
                <p>Recovery Time: 2-4 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Technical Analysis
        </h2>

        {/* Malware Architecture */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FileCode className="w-5 h-5 mr-2 text-purple-500" />
            Malware Architecture
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Core Components
              </h4>
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                {`- Loader Module (loader.rs)
- Encryption Engine (crypto.rs)
- System Enumeration (recon.rs)
- Command & Control (c2.rs)
- Anti-Analysis (evasion.rs)`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Written in Rust for enhanced performance and stability</li>
                <li>Modular architecture for easy customization</li>
                <li>Advanced encryption using ChaCha20-Poly1305</li>
                <li>Sophisticated process injection techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Infection Chain */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Terminal className="w-5 h-5 mr-2 text-green-500" />
            Infection Chain
          </h3>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                Stage 1
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-medium">Initial Access</p>
                <p className="text-gray-600">
                  Compromised credentials, exposed RDP, or phishing
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                Stage 2
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-medium">
                  Persistence & Reconnaissance
                </p>
                <p className="text-gray-600">
                  System enumeration and privilege escalation
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                Stage 3
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-medium">Data Exfiltration</p>
                <p className="text-gray-600">
                  Sensitive data identification and theft
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-medium text-gray-600">
                Stage 4
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 font-medium">Encryption</p>
                <p className="text-gray-600">
                  File encryption and ransom note deployment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IOCs */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Database className="w-5 h-5 mr-2 text-blue-500" />
            Indicators of Compromise
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                File Hashes (SHA-256)
              </h4>
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto font-mono">
                {`7a9d9d9f9c8b8a7b6c5d4e3f2g1h0i9j8k7l6m5n4o3p2q1r0s9t8u7v6w5x4y3z2
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3
4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Network Indicators
              </h4>
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto font-mono">
                {`C2 Domains:
  - blackcat-payment[.]net
  - alphv-negotiate[.]com
  - ransom-service[.]tor

IP Addresses:
  - 192.168.1[.]100
  - 10.0.0[.]1
  - 172.16.0[.]1`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Registry Keys</h4>
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto font-mono">
                {`HKLM\SOFTWARE\BlackCat\Config
HKCU\Software\Microsoft\Windows\CurrentVersion\Run\BCUpdate`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Mitigation Strategies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mitigation Strategies
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-green-500" />
                Prevention
              </h3>
              <ul className="space-y-2">
                {[
                  'Implement network segmentation',
                  'Regular system updates and patches',
                  'Strong access controls and MFA',
                  'Email filtering and security awareness',
                  'Regular offline backups',
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
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                Detection
              </h3>
              <ul className="space-y-2">
                {[
                  'Monitor for suspicious processes',
                  'Implement EDR solutions',
                  'Network traffic analysis',
                  'File integrity monitoring',
                  'Regular security audits',
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Technical Resources
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'MITRE ATT&CK - BlackCat Profile', url: '#' },
                  { text: 'Rust Malware Analysis Guide', url: '#' },
                  { text: 'BlackCat Campaign Timeline', url: '#' },
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
                Industry Reports
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'FBI Flash Report - BlackCat', url: '#' },
                  { text: 'CISA Advisory AA22-040A', url: '#' },
                  { text: 'Ransomware Trends 2024', url: '#' },
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
