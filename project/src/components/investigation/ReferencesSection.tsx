import React from 'react';
import { Link } from 'lucide-react';

const technicalDocs = [
  { text: 'NPM Security Best Practices', url: '#' },
  { text: 'Supply Chain Attack Patterns', url: '#' },
  { text: 'Cryptocurrency Wallet Security', url: '#' }
];

const relatedArticles = [
  { text: 'CISA Advisory - NPM Supply Chain', url: '#' },
  { text: 'GitHub Security Lab Report', url: '#' },
  { text: 'NodeJS Security Working Group', url: '#' }
];

export const ReferencesSection: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Referensi & Sumber Daya
    </h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Dokumentasi Teknis
          </h3>
          <div className="space-y-2">
            {technicalDocs.map((ref, index) => (
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
            Artikel Terkait
          </h3>
          <div className="space-y-2">
            {relatedArticles.map((ref, index) => (
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
);