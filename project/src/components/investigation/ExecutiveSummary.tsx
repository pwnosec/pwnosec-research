import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ImpactMetric {
  label: string;
  value: string;
}

interface ExecutiveSummaryProps {
  summary: string;
  impactMetrics: ImpactMetric[];
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({
  summary,
  impactMetrics
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ringkasan Eksekutif</h2>
    <p className="text-gray-600 mb-4">{summary}</p>
    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
      <div className="flex">
        <AlertTriangle className="h-6 w-6 text-red-400" />
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Penilaian Dampak</h3>
          <div className="mt-2 text-sm text-red-700 space-y-1">
            {impactMetrics.map((metric, index) => (
              <p key={index}>{metric.label}: {metric.value}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);