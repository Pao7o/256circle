import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProjectSearch from '../components/projects/ProjectSearch';
import ProjectFilters from '../components/projects/ProjectFilters';
import Modal from '../components/common/Modal';
import FilterContent from '../components/projects/FilterContent';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectDetails from '../components/projects/ProjectDetails';
import CreateProjectModal from '../components/projects/CreateProjectModal';

export default function AllProjects() {
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    duration: '',
    teamSize: ''
  });
  const [sortBy, setSortBy] = useState('newest');

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: '',
      duration: '',
      teamSize: ''
    });
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold gradient-text">All Projects</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="button-primary flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <ProjectSearch onSearch={setSearchQuery} />
          <ProjectFilters
            isOpen={showFilters}
            onOpenChange={setShowFilters}
            onFilterChange={() => {}}
            onSortChange={setSortBy}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your project cards here */}
        </div>

        {/* Modals */}
        <Modal
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          title="Filter Projects"
        >
          <FilterContent
            filters={filters}
            onFilterChange={handleFilterChange}
            onClose={() => setShowFilters(false)}
            onReset={handleResetFilters}
          />
        </Modal>

        {showCreateModal && (
          <CreateProjectModal
            onClose={() => setShowCreateModal(false)}
            onCreate={() => {}}
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