import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Tag, ArrowRight, Send, Shield } from 'lucide-react';
import { getProjectCardColor } from '../../utils/colorUtils';
import TeamProgress from './TeamProgress';
import ProjectStartInfo from './ProjectStartInfo';
import EmojiAvatar from './EmojiAvatar';
import EscrowBadge from './EscrowBadge';
import { Link } from 'react-router-dom';

interface ProjectDetailsProps {
  project: {
    id: number;
    name: string;
    description: string;
    category: string;
    skills: string;
    startDate: string;
    startType: string;
    duration: string;
    teamSize: string;
    useEscrow?: boolean;
    owner: {
      name: string;
      rating: number;
      completedProjects: number;
    };
    currentMembers?: number;
  };
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [showOwnerInfo, setShowOwnerInfo] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState('');
  const { gradientText, borderColor, skillsBg, skillsText, iconColor } = getProjectCardColor(project.category);

  const handleApply = () => {
    console.log('Application submitted:', applicationMessage);
    setShowApplyModal(false);
    setApplicationMessage('');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className={`bg-[#1a1a1a] rounded-xl border p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto ${borderColor}`}>
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
            </div>

            {/* Team Progress */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Team Progress</h3>
              <TeamProgress 
                teamSize={parseInt(project.teamSize)} 
                currentMembers={project.currentMembers}
              />
            </div>

            {/* Required Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.split(',').map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${skillsBg} ${skillsText}`}
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Escrow Information */}
            <div className="p-4 bg-violet-500/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-violet-400" />
                <h3 className="text-lg font-semibold text-gray-200">
                  {project.useEscrow ? 'Escrow Protected' : 'Escrow Status'}
                </h3>
              </div>
              <p className="text-gray-400">
                {project.useEscrow 
                  ? 'This project uses our escrow service to ensure secure and fair payment distribution among team members.'
                  : 'This project does not use escrow protection. Exercise caution and verify team members before proceeding.'}
              </p>
              <Link 
                to="/services"
                className="text-violet-400 hover:text-violet-300 text-sm inline-flex items-center gap-1 mt-2"
              >
                Learn more about escrow
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowOwnerInfo(true)}
                className="flex-1 button-primary flex items-center justify-center gap-2 group"
              >
                See Owner Info
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setShowApplyModal(true)}
                className="flex-1 button-primary flex items-center justify-center gap-2 group"
              >
                Apply Now
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    </>
  );
}