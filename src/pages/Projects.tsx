import React, { useState } from 'react';
import { Plus, Search, Filter, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectSearch from '../components/projects/ProjectSearch';
import ProjectFilters from '../components/projects/ProjectFilters';
import Modal from '../components/common/Modal';
import FilterContent from '../components/projects/FilterContent';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectDetails from '../components/projects/ProjectDetails';
import CreateProjectModal from '../components/projects/CreateProjectModal';
import { useAuthStore } from '../stores/authStore';

const initialProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with advanced features and integrations.',
    category: 'E-commerce',
    skills: 'React, Node.js, PostgreSQL',
    startDate: '2024-04-01',
    startType: 'date',
    duration: '3-6 months',
    teamSize: '4',
    likes: 12,
    liked: false,
    useEscrow: true,
    owner: {
      name: 'John Doe',
      rating: 4.8,
      completedProjects: 15
    },
    currentMembers: 2
  },
  {
    id: 2,
    name: 'Marketing Campaign',
    description: 'Launching a comprehensive digital marketing campaign for a new product.',
    category: 'Digital Marketing',
    skills: 'Social Media, Content Creation, SEO',
    startDate: '',
    startType: 'team',
    duration: '1-3 months',
    teamSize: '3',
    likes: 8,
    liked: false,
    useEscrow: false,
    owner: {
      name: 'Alice Smith',
      rating: 4.9,
      completedProjects: 23
    },
    currentMembers: 1
  }
];

export default function Projects() {
  const { user } = useAuthStore();
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    duration: '',
    teamSize: '',
    escrow: false
  });
  const [sortBy, setSortBy] = useState('newest');
  const [projects, setProjects] = useState(initialProjects);

  const handleCreateProject = (formData: any) => {
    const newProject = {
      id: Date.now(),
      ...formData,
      likes: 0,
      liked: false,
      currentMembers: 0,
      owner: {
        name: user?.username || 'Anonymous',
        rating: 5.0,
        completedProjects: 0
      }
    };

    setProjects(prev => [newProject, ...prev]);
    setShowCreateModal(false);
  };

  const filteredProjects = projects.filter(project => {
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.category && project.category !== filters.category) {
      return false;
    }
    if (filters.duration && project.duration !== filters.duration) {
      return false;
    }
    if (filters.teamSize && project.teamSize !== filters.teamSize) {
      return false;
    }
    if (filters.escrow && !project.useEscrow) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Discover Exciting Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Find opportunities to collaborate, innovate, and grow with talented creators and entrepreneurs.
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="button-primary flex items-center gap-2 mx-auto group text-lg px-8 py-3"
          >
            <Plus className="w-5 h-5" />
            Create Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <ProjectSearch onSearch={setSearchQuery} />
          <ProjectFilters
            isOpen={showFilters}
            onOpenChange={setShowFilters}
            onFilterChange={() => {}}
            onSortChange={setSortBy}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              onLike={() => {
                setProjects(prev => prev.map(p => {
                  if (p.id === project.id) {
                    return {
                      ...p,
                      liked: !p.liked,
                      likes: p.liked ? p.likes - 1 : p.likes + 1
                    };
                  }
                  return p;
                }));
              }}
            />
          ))}
        </div>

        {/* Modals */}
        <Modal
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          title="Filter Projects"
        >
          <FilterContent
            filters={filters}
            onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
            onClose={() => setShowFilters(false)}
            onReset={() => setFilters({ category: '', duration: '', teamSize: '', escrow: false })}
          />
        </Modal>

        {showCreateModal && (
          <CreateProjectModal
            onClose={() => setShowCreateModal(false)}
            onCreate={handleCreateProject}
          />
        )}

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