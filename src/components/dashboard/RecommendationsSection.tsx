import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectDetails from '../projects/ProjectDetails';

const recommendations = [
  {
    id: 1,
    name: 'E-commerce Integration',
    category: 'Development',
    match: '95%',
    budget: '$2,500',
    description: 'Looking for experienced developers to build a modern e-commerce platform with advanced features.',
    skills: 'React, Node.js, Stripe',
    startDate: '2024-04-15',
    startType: 'date',
    duration: '3-6 months',
    teamSize: '4',
    likes: 15,
    liked: false,
    useEscrow: true,
    owner: {
      name: 'Sarah Johnson',
      rating: 4.9,
      completedProjects: 12
    },
    currentMembers: 1
  },
  {
    id: 2,
    name: 'Content Marketing',
    category: 'Marketing',
    match: '88%',
    budget: '$1,800',
    description: 'Seeking content creators and marketing experts for a large-scale digital campaign.',
    skills: 'Content Creation, SEO, Social Media',
    startDate: '',
    startType: 'team',
    duration: '2-3 months',
    teamSize: '3',
    likes: 8,
    liked: false,
    useEscrow: true,
    owner: {
      name: 'Mike Wilson',
      rating: 4.7,
      completedProjects: 8
    },
    currentMembers: 1
  },
  {
    id: 3,
    name: 'Mobile App UI/UX',
    category: 'Design',
    match: '82%',
    budget: '$3,200',
    description: 'Design and implement a modern mobile app interface for a fintech startup.',
    skills: 'UI/UX, React Native, Figma',
    startDate: '2024-04-20',
    startType: 'date',
    duration: '2-4 months',
    teamSize: '2',
    likes: 12,
    liked: false,
    useEscrow: true,
    owner: {
      name: 'Emma Davis',
      rating: 4.8,
      completedProjects: 15
    },
    currentMembers: 0
  }
];

export default function RecommendationsSection() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleSeeAll = () => {
    navigate('/projects/recommended');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recommended for You</h2>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="group p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all block"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-emerald-400">{item.match} match</p>
                <p className="text-sm text-gray-400">{item.budget}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(item)}
                className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-2"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleSeeAll}
          className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-2"
        >
          See all recommendations
        </button>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}