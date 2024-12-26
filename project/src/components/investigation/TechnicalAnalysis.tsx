import React from 'react';
import { Package, Code, GitBranch } from 'lucide-react';

interface InfectionStage {
  stage: string;
  title: string;
  description: string;
}

interface TechnicalAnalysisProps {
  methodologies: string[];
  maliciousCode: string;
  infectionStages: InfectionStage[];
}

export const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = ({
  methodologies,
  maliciousCode,
  infectionStages
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Analisis Teknis</h2>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Package className="w-5 h-5 mr-2 text-purple-500" />
        Vektor Serangan
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Metodologi Serangan</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {methodologies.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Code className="w-5 h-5 mr-2 text-blue-500" />
        Analisis Kode Berbahaya
      </h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Karakteristik Payload</h4>
          <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
            {maliciousCode}
          </pre>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <GitBranch className="w-5 h-5 mr-2 text-green-500" />
        Rantai Infeksi
      </h3>
      <div className="space-y-4">
        {infectionStages.map((stage, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 w-24 font-medium text-gray-600">
              {stage.stage}
            </div>
            <div className="flex-grow">
              <p className="text-gray-800 font-medium">{stage.title}</p>
              <p className="text-gray-600">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);