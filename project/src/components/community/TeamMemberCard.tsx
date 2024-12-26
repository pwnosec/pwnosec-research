import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full md:w-48 object-cover"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-cyan-600 font-medium">{member.role}</p>
          <p className="text-sm text-gray-500">{member.specialization}</p>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Certifications:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.certifications.map((cert, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4">
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              className="text-gray-400 hover:text-gray-600"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              className="text-gray-400 hover:text-gray-600"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              className="text-gray-400 hover:text-gray-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.socialLinks.email && (
            <a
              href={member.socialLinks.email}
              className="text-gray-400 hover:text-gray-600"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);