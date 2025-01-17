import React, { useState } from 'react';
import { 
  PlusCircle, 
  Rocket, 
  Filter, 
  Code, 
  PenTool, 
  Database, 
  Zap, 
  Cpu, 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Terminal, 
  Shield, 
  Compass 
} from 'lucide-react';
import toast from 'react-hot-toast';

import ProjectSearch from '../components/projects/ProjectSearch';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectDetails from '../components/projects/ProjectDetails';
import CreateProjectModal from '../components/projects/CreateProjectModal';
import ProjectCard from '../components/projects/ProjectCard';

import { useAuthStore } from '../stores/authStore';

const projectCategories = [
  { 
    name: 'Web Development', 
    icon: null,
    color: 'text-blue-500' 
  },
  { 
    name: 'Digital Marketing', 
    icon: null,
    color: 'text-green-500' 
  },
  { 
    name: 'AI/Machine Learning', 
    icon: null,
    color: 'text-purple-500' 
  },
  { 
    name: 'Mobile App Development', 
    icon: null,
    color: 'text-cyan-500' 
  },
  { 
    name: 'E-commerce', 
    icon: null,
    color: 'text-orange-500' 
  },
  { 
    name: 'Blockchain', 
    icon: null,
    color: 'text-indigo-500' 
  },
  { 
    name: 'Game Development', 
    icon: null,
    color: 'text-red-500' 
  },
  { 
    name: 'Content Creation', 
    icon: null,
    color: 'text-yellow-500' 
  },
  { 
    name: 'SaaS', 
    icon: null,
    color: 'text-pink-500' 
  },
  { 
    name: 'IoT', 
    icon: null,
    color: 'text-teal-500' 
  }
];

const skillCategories = {
  'Technical Skills': [
    { name: 'Full-Stack Development', icon: Code },
    { name: 'Frontend Development', icon: PenTool },
    { name: 'Backend Development', icon: Terminal },
    { name: 'Mobile Development', icon: null },
    { name: 'Cloud Computing', icon: null },
    { name: 'DevOps', icon: Zap },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'AI/Machine Learning', icon: Cpu },
    { name: 'Data Science', icon: Database },
    { name: 'Blockchain', icon: Briefcase },
    { name: 'Embedded Systems', icon: null },
    { name: 'Network Engineering', icon: null }
  ],
  'Design & Creative': [
    { name: 'UI/UX Design', icon: PenTool },
    { name: 'Graphic Design', icon: Globe },
    { name: 'Motion Graphics', icon: TrendingUp },
    { name: 'Brand Strategy', icon: Rocket },
    { name: '3D Modeling', icon: null },
    { name: 'Animation', icon: null },
    { name: 'Video Editing', icon: null }
  ],
  'Business & Strategy': [
    { name: 'Product Management', icon: Compass },
    { name: 'Digital Marketing', icon: TrendingUp },
    { name: 'Business Development', icon: Briefcase },
    { name: 'Startup Consulting', icon: Rocket },
    { name: 'Market Research', icon: null },
    { name: 'Sales Strategy', icon: null },
    { name: 'Customer Success', icon: null }
  ],
  'Content & Communication': [
    { name: 'Technical Writing', icon: null },
    { name: 'Content Marketing', icon: null },
    { name: 'SEO Optimization', icon: null },
    { name: 'Social Media Management', icon: null },
    { name: 'Copywriting', icon: null },
    { name: 'Translation Services', icon: null }
  ]
};

const teamSizeOptions = [
  '1-3 members',
  '4-6 members', 
  '7-10 members',
  '10+ members'
];

const complexityLevels = [
  'Beginner',
  'Intermediate', 
  'Advanced',
  'Expert'
];

const initialProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with advanced features and integrations.',
    category: 'Web Development',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    startDate: '2024-04-01',
    startType: 'date',
    duration: '3-6 months',
    teamSize: '4',
    likes: 12,
    liked: false,
    useEscrow: true,
    visibility: 'public',
    owner: {
      name: 'John Doe',
      rating: 4.8,
      completedProjects: 15
    },
    currentMembers: 2,
    budget: 15000,
    complexity: 'Advanced'
  },
  {
    id: 2,
    name: 'Marketing Campaign',
    description: 'Launching a comprehensive digital marketing campaign for a new product.',
    category: 'Digital Marketing',
    skills: ['Social Media', 'Content Creation', 'SEO'],
    startDate: '',
    startType: 'team',
    duration: '1-3 months',
    teamSize: '3',
    likes: 8,
    liked: false,
    useEscrow: false,
    visibility: 'public',
    owner: {
      name: 'Alice Smith',
      rating: 4.9,
      completedProjects: 23
    },
    currentMembers: 1,
    budget: 5000,
    complexity: 'Intermediate'
  },
  {
    id: 3,
    name: 'AI-Powered Recommendation System',
    description: 'Developing an advanced machine learning recommendation engine.',
    category: 'AI/Machine Learning',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
    startDate: '2024-05-15',
    startType: 'date',
    duration: '6-12 months',
    teamSize: '5',
    likes: 25,
    liked: false,
    useEscrow: true,
    visibility: 'public',
    owner: {
      name: 'Dr. Emily Chen',
      rating: 4.9,
      completedProjects: 12
    },
    currentMembers: 3,
    budget: 35000,
    complexity: 'Advanced'
  }
];

export default function Projects() {
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTeamSizes, setSelectedTeamSizes] = useState<string[]>([]);
  const [selectedComplexity, setSelectedComplexity] = useState<string[]>([]);
  const [showEscrowOnly, setShowEscrowOnly] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [projects, setProjects] = useState(initialProjects);
  const [featuredCategory, setFeaturedCategory] = useState<string | null>(null);

  const handleCreateProject = (newProject: any) => {
    const projectWithId = {
      ...newProject,
      id: Date.now(),
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    setProjects(prev => [...prev, projectWithId]);
    toast.success('Project created successfully!');
  };

  const filteredProjects = projects.filter(project => 
    (searchTerm === '' || 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    
    (selectedSkills.length === 0 || 
      selectedSkills.some(skill => project.skills.includes(skill))) &&
    
    (selectedCategories.length === 0 || 
      selectedCategories.includes(project.category)) &&
    
    (selectedTeamSizes.length === 0 || 
      selectedTeamSizes.some(size => {
        const teamSize = parseInt(project.teamSize || '0');
        switch(size) {
          case '1-3 members': return teamSize >= 1 && teamSize <= 3;
          case '4-6 members': return teamSize >= 4 && teamSize <= 6;
          case '7-10 members': return teamSize >= 7 && teamSize <= 10;
          case '10+ members': return teamSize > 10;
          default: return false;
        }
      })) &&
    
    (selectedComplexity.length === 0 || 
      selectedComplexity.includes(project.complexity)) &&
    
    (!showEscrowOnly || project.useEscrow)
  );

  const toggleFilter = (filterState: any, setFilterState: any, value: string) => {
    setFilterState(prev => 
      prev.includes(value) 
        ? prev.filter((v: string) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête et barre de recherche */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-4">Explore Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover innovative projects and opportunities to make an impact
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-xl">
              <ProjectSearch 
                onSearch={(term) => setSearchTerm(term)}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filtres */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl h-fit">
            <h3 className="text-xl font-bold gradient-text mb-4 flex items-center">
              <Filter className="mr-2 w-5 h-5" /> Filters
            </h3>
            
            {/* Catégories de projets */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-gray-300 mb-2">Project Categories</h4>
              <div className="flex flex-wrap gap-2">
                {projectCategories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => toggleFilter(selectedCategories, setSelectedCategories, category.name)}
                    className={`px-2 py-1 rounded-full text-xs transition-colors flex items-center gap-1 ${
                      selectedCategories.includes(category.name)
                        ? 'bg-violet-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Compétences */}
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h4 className="text-md font-semibold text-gray-300 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <button
                      key={skill.name}
                      onClick={() => toggleFilter(selectedSkills, setSelectedSkills, skill.name)}
                      className={`px-2 py-1 rounded-full text-xs transition-colors flex items-center gap-1 ${
                        selectedSkills.includes(skill.name) 
                          ? 'bg-violet-500 text-white' 
                          : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                      }`}
                    >
                      {skill.icon && <skill.icon className="w-3 h-3 mr-1" />}
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Taille d'équipe */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-gray-300 mb-2">Team Size</h4>
              <div className="flex flex-wrap gap-2">
                {teamSizeOptions.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleFilter(selectedTeamSizes, setSelectedTeamSizes, size)}
                    className={`px-2 py-1 rounded-full text-xs transition-colors ${
                      selectedTeamSizes.includes(size) 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Niveau de complexité */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-gray-300 mb-2">Project Complexity</h4>
              <div className="flex flex-wrap gap-2">
                {complexityLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => toggleFilter(selectedComplexity, setSelectedComplexity, level)}
                    className={`px-2 py-1 rounded-full text-xs transition-colors ${
                      selectedComplexity.includes(level) 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtre Escrow */}
            <div className="mb-6">
              <h4 className="text-md font-semibold text-gray-300 mb-2">Additional Filters</h4>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="escrow-filter"
                  checked={showEscrowOnly}
                  onChange={() => setShowEscrowOnly(!showEscrowOnly)}
                  className="mr-2 text-violet-500 focus:ring-violet-500"
                />
                <label 
                  htmlFor="escrow-filter" 
                  className="text-gray-300 flex items-center"
                >
                  Escrow Projects Only
                </label>
              </div>
            </div>
          </div>

          {/* Grille de projets */}
          <div className="md:col-span-3">
            {/* Bouton de création de projet */}
            <div className="mb-6 text-right">
              <button 
                onClick={() => setShowCreateModal(true)}
                className="button-primary flex items-center gap-3 ml-auto px-8 py-3 text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-violet-500/25"
              >
                <PlusCircle className="w-6 h-6" /> 
                Create New Project
              </button>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-violet-500/10">
                <Rocket className="w-16 h-16 mx-auto text-violet-400 mb-4 animate-gentle-bounce" />
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">
                  No Projects Found
                </h2>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or create a new project
                </p>
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="button-secondary hover:scale-105 transition-transform"
                >
                  Create New Project
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {filteredProjects.map(project => (
                  <div key={project.id} className="transform hover:scale-[1.02] transition-transform duration-300">
                    <ProjectCard 
                      project={project}
                      onProjectClick={() => setSelectedProject(project)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
  );
}