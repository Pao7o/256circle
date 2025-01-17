import React from 'react';
import { X, Calendar, Clock, Users, Tag, ArrowRight, Send, Shield, ShieldCheck } from 'lucide-react';
import { getProjectCardColor } from '../../utils/colorUtils';
import TeamProgress from './TeamProgress';
import ProjectStartInfo from './ProjectStartInfo';
import EmojiAvatar from './EmojiAvatar';
import EscrowBadge from './EscrowBadge';
import { usePreventScroll } from '../../hooks/usePreventScroll';
import UserDetailsModal from '../collaborate/UserDetailsModal';

interface ProjectDetailsProps {
  project: {
    id: number;
    name: string;
    description: string;
    category: string;
    skills: {
      name: string;
      requiredCount: number;
    }[];
    startDate: string;
    startType: string;
    duration: string;
    teamSize: string;
    useEscrow?: boolean;
    budget?: number;
    complexity?: string;
    owner: {
      id: number;
      name: string;
      rating: number;
      completedProjects: number;
      email: string;
    };
    currentMembers?: number;
  };
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [showOwnerInfo, setShowOwnerInfo] = React.useState(false);
  const [showApplyModal, setShowApplyModal] = React.useState(false);
  const [applicationMessage, setApplicationMessage] = React.useState('');
  const [selectedOwner, setSelectedOwner] = React.useState<any | null>(null);
  const { gradientText, borderColor, skillsBg, skillsText, iconColor } = getProjectCardColor(project.category);

  // Prevent scrolling when modal is open
  usePreventScroll(true);

  const handleApply = () => {
    console.log('Application submitted:', applicationMessage);
    setShowApplyModal(false);
    setApplicationMessage('');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" 
        onClick={onClose} 
      />
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        // Prevent scroll on this div
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div 
          className={`bg-[#1a1a1a] rounded-xl border p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto ${borderColor}`}
          // Prevent scroll propagation
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className={`text-2xl font-bold ${gradientText}`}>{project.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-400">by {project.owner.name}</p>
                {project.useEscrow && (
                  <>
                    <span className="text-gray-400">•</span>
                    <EscrowBadge />
                  </>
                )}
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Project Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Description</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.skills?.map((skill: any) => (
                  <div 
                    key={skill.name} 
                    className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {skill.name} 
                    <span className="ml-2 bg-violet-500/40 px-2 rounded-full text-xs">
                      {skill.requiredCount} needed
                    </span>
                  </div>
                ))}
              </div>
              {project.skills && (
                <div className="text-sm text-gray-400">
                  Total people required: {project.skills.reduce((total: number, skill: any) => total + skill.requiredCount, 0)}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className={`w-5 h-5 ${iconColor}`} />
                <ProjectStartInfo startDate={project.startDate} startType={project.startType} />
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className={`w-5 h-5 ${iconColor}`} />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className={`w-5 h-5 ${iconColor}`} />
                <span>{project.teamSize} members needed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Tag className={`w-5 h-5 ${iconColor}`} />
                <span>{project.category}</span>
              </div>
              {project.budget && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className={`w-5 h-5 ${iconColor}`} />
                  <span>Budget: ${project.budget}</span>
                </div>
              )}
              {project.complexity && (
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className={`w-5 h-5 ${iconColor}`} />
                  <span>Complexity: {project.complexity}</span>
                </div>
              )}
            </div>

            {/* Team Progress */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Team Progress</h3>
              <TeamProgress 
                teamSize={parseInt(project.teamSize)} 
                currentMembers={project.currentMembers}
              />
            </div>

            {/* Owner Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Project Owner</h3>
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center text-xl font-bold text-violet-400 cursor-pointer hover:opacity-80"
                  onClick={() => setSelectedOwner({
                    id: project.owner.id,
                    name: project.owner.name,
                    skills: project.skills,
                    experience: 'Senior',
                    projectsCompleted: 15,
                    rating: 4.7,
                    location: 'San Francisco, CA',
                    availability: 'Open to new projects',
                  })}
                >
                  {project.owner.name[0].toUpperCase()}
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-white cursor-pointer hover:text-violet-400"
                    onClick={() => setSelectedOwner({
                      id: project.owner.id,
                      name: project.owner.name,
                      skills: project.skills,
                      experience: 'Senior',
                      projectsCompleted: 15,
                      rating: 4.7,
                      location: 'San Francisco, CA',
                      availability: 'Open to new projects',
                    })}
                  >
                    {project.owner.name}
                  </h3>
                  <p className="text-sm text-gray-400">{project.owner.email}</p>
                </div>
              </div>
            </div>

            {selectedOwner && (
              <UserDetailsModal 
                user={{
                  uid: selectedOwner.id.toString(),
                  username: selectedOwner.name,
                  email: `${selectedOwner.name.toLowerCase().replace(' ', '.')}@example.com`,
                  skills: selectedOwner.skills,
                  bio: `${selectedOwner.experience} level professional with ${selectedOwner.projectsCompleted} completed projects.`,
                  completedProjects: selectedOwner.projectsCompleted,
                  rating: selectedOwner.rating,
                  location: selectedOwner.location,
                  joinDate: '2023-01-15', // Date fictive
                  socialLinks: {
                    linkedin: `https://linkedin.com/in/${selectedOwner.name.toLowerCase().replace(' ', '-')}`,
                    github: `https://github.com/${selectedOwner.name.toLowerCase().replace(' ', '-')}`,
                    portfolio: `https://${selectedOwner.name.toLowerCase().replace(' ', '-')}.dev`,
                    twitter: `https://twitter.com/${selectedOwner.name.toLowerCase().replace(' ', '')}`
                  },
                  availability: selectedOwner.availability,
                  expertise: selectedOwner.skills.slice(0, 3), // Première 3 compétences comme expertise
                  languages: ['English', 'French'] // Exemple de langues
                }} 
                onClose={() => setSelectedOwner(null)} 
              />
            )}

            {/* Actions */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={() => setShowApplyModal(true)}
                className="button-primary flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Apply to Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Info Modal */}
      {showOwnerInfo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowOwnerInfo(false)} />
          <div className="bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full max-w-md relative z-[70]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold gradient-text">Owner Profile</h3>
              <button onClick={() => setShowOwnerInfo(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <EmojiAvatar name={project.owner.name} size="lg" />
              <div>
                <h4 className="text-lg font-semibold text-gray-200">{project.owner.name}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>⭐ {project.owner.rating.toFixed(1)}</span>
                  <span>{project.owner.completedProjects} completed projects</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 button-primary">Contact Owner</button>
              <button 
                onClick={() => setShowOwnerInfo(false)}
                className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowApplyModal(false)} />
          <div className="bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full max-w-md relative z-[70]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold gradient-text">Apply to Project</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message to the Owner
                </label>
                <textarea
                  rows={6}
                  value={applicationMessage}
                  onChange={(e) => setApplicationMessage(e.target.value)}
                  placeholder="Introduce yourself and explain why you'd be a great fit for this project..."
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleApply}
                  className="flex-1 button-primary"
                >
                  Submit Application
                </button>
                <button 
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {project.useEscrow && (
        <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <ShieldCheck className="w-6 h-6 text-green-500 mr-3" />
            <span className="text-green-300">
              Escrow Protection Enabled
            </span>
          </div>
          <a 
            href="/escrow" 
            className="text-violet-500 hover:text-violet-400 flex items-center text-sm"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      )}
    </>
  );
}