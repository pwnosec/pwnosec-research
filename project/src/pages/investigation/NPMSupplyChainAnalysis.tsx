import React from 'react';
import { Header } from '../../components/investigation/Header';
import { ExecutiveSummary } from '../../components/investigation/ExecutiveSummary';
import { TechnicalAnalysis } from '../../components/investigation/TechnicalAnalysis';
import { IOCSection } from '../../components/investigation/IOCSection';
import { MitigationSection } from '../../components/investigation/MitigationSection';
import { ReferencesSection } from '../../components/investigation/ReferencesSection';

export const NPMSupplyChainAnalysis: React.FC = () => {
  const headerProps = {
    title: 'Supply Chain Attack: Analisis Paket NPM yang Dikompromikan',
    date: '28 Februari 2024',
    author: 'Pwn0sec Research Team',
    type: 'Supply Chain Attack',
    typeColor: 'bg-purple-100 text-purple-800',
    imageUrl:
      'https://i.ibb.co.com/zsgm0bV/Black-and-Purple-Modern-Cyber-Security-Presentation-2.png',
  };

  const executiveSummaryProps = {
    summary: `Tim peneliti kami telah mengidentifikasi dan menganalisis serangan supply chain yang sangat canggih 
    yang menargetkan ekosistem NPM. Serangan ini melibatkan manipulasi paket-paket populer untuk 
    mencuri kredensial cryptocurrency dan mengkompromikan lingkungan pengembangan.`,
    impactMetrics: [
      { label: 'Tingkat Keparahan', value: 'Kritis' },
      { label: 'Paket Terdampak', value: '37 paket NPM populer' },
      { label: 'Total Download', value: '>2.8 juta' },
      { label: 'Estimasi Kerugian Cryptocurrency', value: '$4.3 juta' },
    ],
  };

  const technicalAnalysisProps = {
    methodologies: [
      'Pengambilalihan akun maintainer melalui credential stuffing',
      'Injeksi kode berbahaya ke dalam dependensi populer',
      'Teknik obfuskasi canggih untuk menghindari deteksi',
      'Pemanfaatan fitur postinstall untuk eksekusi payload',
      'Penggunaan DNS dinamis untuk komunikasi C2',
    ],
    maliciousCode: `// Contoh kode berbahaya yang diinjeksi
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Fungsi untuk mencari file konfigurasi wallet
async function scanForWallets(dir) {
  // Kode untuk mencari wallet.dat dan file konfigurasi
}

// Fungsi untuk mengekstrak kredensial
function extractCredentials(data) {
  // Dekripsi dan ekstraksi informasi sensitif
}

// Fungsi untuk mengirim data ke C2
async function exfiltrateData(data) {
  // Komunikasi dengan server C2
}`,
    infectionStages: [
      {
        stage: 'Tahap 1',
        title: 'Kompromisasi Awal',
        description:
          'Pengambilalihan akun maintainer dan injeksi kode berbahaya',
      },
      {
        stage: 'Tahap 2',
        title: 'Penyebaran',
        description:
          'Publikasi versi baru dengan kode berbahaya ke NPM registry',
      },
      {
        stage: 'Tahap 3',
        title: 'Eksekusi',
        description:
          'Aktivasi payload saat instalasi paket dan pencarian wallet',
      },
      {
        stage: 'Tahap 4',
        title: 'Eksfiltrasi',
        description: 'Pengiriman data cryptocurrency ke server C2',
      },
    ],
  };

  const iocProps = {
    compromisedPackages: [
      'crypto-utils@2.1.4',
      'wallet-validator@1.2.3',
      'blockchain-helper@3.0.1',
      'defi-connector@1.0.8',
      'web3-tools@2.2.1',
    ],
    c2Domains: [
      'api-cdn.secure-node[.]com',
      'npm-stats.analytics[.]org',
      'package-metrics.info[.]cc',
      'cdn-delivery.cloud[.]net',
    ],
    fileHashes: [
      '7a9d9d9f9c8b8a7b6c5d4e3f2g1h0i9j8k7l6m5n4o3p2q1r0s9t8u7v6w5x4y3z2',
      'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2g3',
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header {...headerProps} />
      <ExecutiveSummary {...executiveSummaryProps} />
      <TechnicalAnalysis {...technicalAnalysisProps} />
      <IOCSection {...iocProps} />
      <MitigationSection />
      <ReferencesSection />
    </div>
  );
};
