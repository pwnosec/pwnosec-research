import React from 'react';
import { CheckCircle } from 'lucide-react';

const developerStrategies = [
  'Gunakan npm audit secara rutin',
  'Implementasi lockfile (package-lock.json)',
  'Verifikasi integritas paket dengan checksums',
  'Terapkan CI/CD scanning untuk dependensi',
  'Batasi scope instalasi paket NPM'
];

const maintainerStrategies = [
  'Aktifkan 2FA untuk akun NPM',
  'Gunakan signing key untuk paket',
  'Review dependencies secara berkala',
  'Monitor aktivitas paket mencurigakan',
  'Implementasi security policy'
];

export const MitigationSection: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategi Mitigasi</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Untuk Developer
          </h3>
          <ul className="space-y-2">
            {developerStrategies.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Untuk Maintainer
          </h3>
          <ul className="space-y-2">
            {maintainerStrategies.map((strategy, index) => (
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
);