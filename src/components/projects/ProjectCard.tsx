import React from 'react';
import { getProjectCardColor } from '../../utils/colorUtils';
import LikeButton from './LikeButton';
import TeamProgress from './TeamProgress';
import ProjectStartInfo from './ProjectStartInfo';
import EmojiAvatar from './EmojiAvatar';
import EscrowBadge from './EscrowBadge';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    category: string;
    skills: string[] | string;
    startDate: string;
    startType: string;
    duration: string;
    teamSize: string;
    likes: number;
    liked: boolean;
    useEscrow?: boolean;
    owner: {
      name: string;
    };
    currentMembers: number;
  };
  onClick: () => void;
  onLike: () => void;
}

export default function ProjectCard({ project, onClick, onLike }: ProjectCardProps) {
  if (!project || !project.owner) return null;

  const { gradientText, borderColor, skillsBg, skillsText } = getProjectCardColor(project.category);

  // Normalize skills to an array
  const skillsList = Array.isArray(project.skills) 
    ? project.skills 
    : (project.skills as string).split(',').map(skill => skill.trim());

  return (
    <div 
      onClick={onClick}
      className={`relative bg-black/30 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${borderColor} hover:z-10`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <EmojiAvatar name={project.owner.name} size="sm" />
          <div>
            <h3 className={`text-xl font-semibold ${gradientText}`}>{project.name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-400">by {project.owner.name}</p>
              {project.useEscrow && (
                <>
                  <span className="text-sm text-gray-400">•</span>
                  <EscrowBadge />
                </>
              )}
            </div>
          </div>
        </div>
        <LikeButton
          liked={project.liked}
          likes={project.likes}
          onLike={(e) => {
            e.stopPropagation();
            onLike();
          }}
        />
      </div>
      
      <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skillsList.map((skill, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded-full text-sm ${skillsBg} ${skillsText}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <TeamProgress 
          teamSize={parseInt(project.teamSize)} 
          currentMembers={project.currentMembers}
        />
        <ProjectStartInfo 
          startDate={project.startDate}
          startType={project.startType}
        />
      </div>
    </div>
  );
}