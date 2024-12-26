import React from 'react';
import { Shield, Target, Code, Database, Lock, Search } from 'lucide-react';
import { TeamMemberCard } from '../components/community/TeamMemberCard';
import { ExpertiseArea } from '../components/community/ExpertiseArea';
import { TEAM_MEMBERS } from '../data/teamMembers';

const EXPERTISE_AREAS = [
  {
    icon: Shield,
    title: 'Malware Analysis',
    description: 'Analisis mendalam terhadap berbagai jenis malware dan teknik evasion',
  },
  {
    icon: Target,
    title: 'Penetration Testing',
    description: 'Pengujian keamanan aplikasi web, mobile, dan infrastruktur',
  },
  {
    icon: Search,
    title: 'Threat Intelligence',
    description: 'Penelitian dan analisis ancaman siber terkini',
  },
  {
    icon: Code,
    title: 'Secure Development',
    description: 'Praktik pengembangan software yang aman dan secure code review',
  },
  {
    icon: Database,
    title: 'Digital Forensics',
    description: 'Investigasi insiden dan analisis forensik digital',
  },
  {
    icon: Lock,
    title: 'Cloud Security',
    description: 'Keamanan infrastruktur cloud dan container',
  },
];

export const Community: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Meet Our Research Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tim peneliti kami terdiri dari para ahli keamanan siber terkemuka
              dengan berbagai spesialisasi dan pengalaman yang luas dalam
              industri.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERTISE_AREAS.map((area, index) => (
              <ExpertiseArea key={index} {...area} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Kami selalu mencari talenta-talenta terbaik di bidang keamanan siber
            untuk bergabung dengan tim penelitian kami. Jika Anda memiliki
            passion dalam penelitian keamanan, mari bergabung dengan kami.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};