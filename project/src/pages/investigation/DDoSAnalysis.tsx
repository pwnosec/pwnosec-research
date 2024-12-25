import React from 'react';
import {
  Shield,
  Calendar,
  User,
  Link,
  AlertTriangle,
  CheckCircle,
  Cloud,
  Network,
  Server,
  Lock,
} from 'lucide-react';

export const DDoSAnalysis: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            DDoS Analysis
          </span>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">March 5, 2024</span>
          </div>
          <div className="flex items-center text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">Pwn0sec Research Team</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Emerging DDoS Attack Vectors in Cloud Infrastructure
        </h1>

        <img
          src="https://i.ibb.co.com/NT8VWFk/Black-and-Purple-Modern-Cyber-Security-Presentation-1.png"
          alt="Cloud Infrastructure DDoS Analysis"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Executive Summary
        </h2>
        <p className="text-gray-600 mb-4">
          Penelitian kami mengungkap tren baru dalam serangan DDoS yang
          memanfaatkan karakteristik unik dari infrastruktur cloud. Penyerang
          memanfaatkan auto-scaling, microservices, dan serverless functions
          untuk mengamplifikasi serangan dan menghindari deteksi tradisional.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Impact Assessment
              </h3>
              <div className="mt-2 text-sm text-yellow-700 space-y-1">
                <p>Attack Volume: 1.2 Tbps (Peak)</p>
                <p>Affected Services: Kubernetes, Lambda, Cloud Run</p>
                <p>Average Downtime: 4-6 hours</p>
                <p>Estimated Cost Impact: $50,000-100,000 per attack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attack Vectors Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          New Attack Vectors
        </h2>

        {/* Cloud-Native Attacks */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Cloud className="w-5 h-5 mr-2 text-blue-500" />
            Cloud-Native Attack Vectors
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Auto-Scaling Exploitation
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Triggering excessive auto-scaling events</li>
                <li>Resource exhaustion through scaling policies</li>
                <li>Cost-based denial of service</li>
                <li>Kubernetes HPA manipulation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Serverless Platform Attacks
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Concurrent execution limits abuse</li>
                <li>Cold start latency exploitation</li>
                <li>Function chaining attacks</li>
                <li>Resource quota exhaustion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Network Layer Attacks */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Network className="w-5 h-5 mr-2 text-green-500" />
            Advanced Network Layer Techniques
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Protocol Exploitation
              </h4>
              <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                {`- TCP State Exhaustion
- UDP Reflection/Amplification
- DNS Water Torture
- QUIC Protocol Abuse
- HTTP/3 Exploitation`}
              </pre>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Attack Characteristics
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Multi-vector attacks combining multiple protocols</li>
                <li>Dynamic attack pattern switching</li>
                <li>Geographically distributed attack sources</li>
                <li>Use of legitimate cloud resources</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Infrastructure Impact */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Server className="w-5 h-5 mr-2 text-purple-500" />
            Infrastructure Impact Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Resource Consumption
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    CPU: 85-95% utilization spike
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Memory: 90% consumption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Network: 1.2 Tbps peak traffic
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Service Disruption
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    API Response Time: 500% increase
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Error Rate: 60% of requests
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Service Availability: 75% decrease
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detection & Mitigation */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Detection & Mitigation Strategies
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-green-500" />
                Cloud-Native Defense
              </h3>
              <ul className="space-y-2">
                {[
                  'Implement adaptive auto-scaling policies',
                  'Use WAF with rate limiting',
                  'Deploy DDoS protection services',
                  'Enable anomaly detection',
                  'Implement resource quotas',
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
                Network Defense
              </h3>
              <ul className="space-y-2">
                {[
                  'Traffic pattern analysis',
                  'Protocol-specific filtering',
                  'Anycast network setup',
                  'BGP flowspec implementation',
                  'TCP/UDP protection',
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
                  {
                    text: 'Cloud Security Alliance - DDoS Protection',
                    url: '#',
                  },
                  { text: 'AWS Shield Advanced Documentation', url: '#' },
                  { text: 'Google Cloud Armor Best Practices', url: '#' },
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
                Research Papers
              </h3>
              <div className="space-y-2">
                {[
                  { text: 'Analysis of Cloud-Native DDoS Attacks', url: '#' },
                  { text: 'Serverless Security Challenges', url: '#' },
                  { text: 'Next-Gen DDoS Protection Methods', url: '#' },
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
