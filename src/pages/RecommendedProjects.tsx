import React, { useState } from 'react';
import BackToDashboard from '../components/common/BackToDashboard';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectDetails from '../components/projects/ProjectDetails';

const recommendedProjects = [
  {
    id: 1,
    name: 'E-commerce Integration',
    description: 'Looking for experienced developers to build a modern e-commerce platform with advanced features.',
    category: 'E-commerce',
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
    currentMembers: 1,
    match: '95%'
  },
  {
    id: 2,
    name: 'Content Marketing Campaign',
    description: 'Seeking content creators and marketing experts for a large-scale digital campaign.',
    category: 'Digital Marketing',
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
    currentMembers: 1,
    match: '88%'
  },
  {
    id: 3,
    name: 'Mobile App UI/UX',
    description: 'Design and implement a modern mobile app interface for a fintech startup.',
    category: 'Mobile App',
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
    currentMembers: 0,
    match: '82%'
  }
];

export default function RecommendedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projects, setProjects] = useState(recommendedProjects);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleLike = (projectId: number) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          liked: !p.liked,
          likes: p.liked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text">Recommended Projects</h1>
          <p className="text-gray-400 mt-2">Projects that match your skills and preferences</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                  {project.match} match
                </span>
              </div>
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
                onLike={() => handleLike(project.id)}
              />
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}