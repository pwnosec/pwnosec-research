import React from 'react';
import { Database } from 'lucide-react';

interface IOCSectionProps {
  compromisedPackages: string[];
  c2Domains: string[];
  fileHashes: string[];
}

export const IOCSection: React.FC<IOCSectionProps> = ({
  compromisedPackages,
  c2Domains,
  fileHashes
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Indikator Kompromi (IOC)
    </h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Database className="w-5 h-5 mr-2 text-red-500" />
            Paket NPM yang Dikompromikan
          </h3>
          <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
            {compromisedPackages.join('\n')}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Domain C2</h3>
          <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
            {c2Domains.join('\n')}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            File Hash (SHA-256)
          </h3>
          <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
            {fileHashes.join('\n')}
          </pre>
        </div>
      </div>
    </div>
  </section>
);