import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Research',
      description:
        'Penelitian mutakhir tentang ancaman siber dan vektor serangan yang berkembang',
    },
    {
      icon: Target,
      title: 'Vulnerability Assessment',
      description:
        'Layanan penilaian keamanan komprehensif dan pengujian penetrasi',
    },
    {
      icon: Users,
      title: 'Expert Community',
      description:
        'Akses ke jaringan peneliti keamanan dan profesional terkemuka',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description:
        'Penelitian pemenang penghargaan dan kontribusi untuk keamanan siber',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mengapa Memilih PwnOsec Research
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menggabungkan keahlian teknologi dengan inovasi untuk
            menciptakan solusi keamanan revolusioner dan melindungi organisasi
            dari ancaman siber yang terus berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-cyan-500 mb-4">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
