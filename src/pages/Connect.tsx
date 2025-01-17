import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  UserPlus, 
  Star, 
  Globe,
  Code,
  PenTool,
  Database,
  Layers,
  Zap,
  Briefcase,
  TrendingUp,
  Cpu,
  Terminal,
  Compass,
  Shield,
  Rocket
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import UserDetailsModal from '../components/collaborate/UserDetailsModal';

const skillCategories = {
  'Technical Skills': [
    { name: 'Full-Stack Development', icon: Code },
    { name: 'Frontend Development', icon: PenTool },
    { name: 'Backend Development', icon: Terminal },
    { name: 'Mobile Development', icon: null },
    { name: 'Cloud Computing', icon: Layers },
    { name: 'DevOps', icon: Zap },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'AI/Machine Learning', icon: Cpu },
    { name: 'Data Science', icon: Database },
    { name: 'Blockchain', icon: Briefcase }
  ],
  'Design & Creative': [
    { name: 'UI/UX Design', icon: PenTool },
    { name: 'Graphic Design', icon: Globe },
    { name: 'Motion Graphics', icon: TrendingUp },
    { name: 'Brand Strategy', icon: Rocket }
  ],
  'Business & Strategy': [
    { name: 'Product Management', icon: Compass },
    { name: 'Digital Marketing', icon: TrendingUp },
    { name: 'Business Development', icon: Briefcase },
    { name: 'Startup Consulting', icon: Rocket }
  ]
};

const experienceLevels = [
  'Beginner', 
  'Junior', 
  'Mid-Level', 
  'Senior', 
  'Expert'
];

const availabilityOptions = [
  'Full-time', 
  'Part-time', 
  'Freelance', 
  'Open to Projects'
];

const sampleCollaborators = [
  {
    id: 1,
    name: 'Alex Rodriguez',
    skills: ['Full-Stack Development', 'DevOps', 'Cloud Computing'],
    experience: 'Senior',
    availability: 'Full-time',
    rating: 4.8,
    projectsCompleted: 12,
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Emma Chen',
    skills: ['UI/UX Design', 'Product Management', 'Digital Marketing'],
    experience: 'Mid-Level',
    availability: 'Part-time',
    rating: 4.5,
    projectsCompleted: 8,
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    skills: ['Mobile Development', 'AI/Machine Learning', 'Blockchain'],
    experience: 'Expert',
    availability: 'Freelance',
    rating: 4.9,
    projectsCompleted: 20,
    location: 'Berlin, Germany'
  }
];

export default function Connect() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const filteredCollaborators = sampleCollaborators.filter(collaborator => 
    (searchTerm === '' || collaborator.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedSkills.length === 0 || selectedSkills.some(skill => collaborator.skills.includes(skill))) &&
    (selectedExperience.length === 0 || selectedExperience.includes(collaborator.experience)) &&
    (selectedAvailability.length === 0 || selectedAvailability.includes(collaborator.availability))
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
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Collaborate & Connect</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the perfect collaborators for your next breakthrough project
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-xl">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search collaborators by name..." 
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-violet-500/20 rounded-full text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-500 p-2 rounded-full hover:bg-violet-600 transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl h-fit">
            <h3 className="text-xl font-bold gradient-text mb-4 flex items-center">
              <Filter className="mr-2 w-5 h-5" /> Filters
            </h3>
            
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
                      {skill.icon && <skill.icon className="w-3 h-3" />}
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-6">
              <h4 className="text-md font-semibold text-gray-300 mb-2">Experience Level</h4>
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => toggleFilter(selectedExperience, setSelectedExperience, level)}
                    className={`px-2 py-1 rounded-full text-xs transition-colors ${
                      selectedExperience.includes(level) 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-md font-semibold text-gray-300 mb-2">Availability</h4>
              <div className="flex flex-wrap gap-2">
                {availabilityOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => toggleFilter(selectedAvailability, setSelectedAvailability, option)}
                    className={`px-2 py-1 rounded-full text-xs transition-colors ${
                      selectedAvailability.includes(option) 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Collaborators List */}
          <div className="md:col-span-3 space-y-4">
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {filteredCollaborators.map(collaborator => (
                <div 
                  key={collaborator.id}
                  onClick={() => setSelectedUser(collaborator)}
                  className="bg-[#1a1a1a] border border-violet-500/20 rounded-xl p-6 cursor-pointer hover:border-violet-500 transition-all group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center text-3xl font-bold text-violet-400 mr-4">
                      {collaborator.name[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold gradient-text group-hover:text-violet-400 transition-colors">
                        {collaborator.name}
                      </h3>
                      <p className="text-sm text-gray-400">{collaborator.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collaborator.skills.slice(0, 3).map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-violet-500/10 text-violet-400 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {collaborator.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      {collaborator.projectsCompleted} Projects
                    </div>
                    <div className="flex items-center gap-1">
                      <UserPlus className="w-4 h-4 text-blue-500" />
                      {collaborator.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCollaborators.length === 0 && (
              <div className="text-center text-gray-500 py-16">
                No collaborators found matching your filters
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal pour les détails de l'utilisateur */}
      {selectedUser && (
        <UserDetailsModal 
          user={{
            uid: selectedUser.id.toString(),
            username: selectedUser.name,
            email: `${selectedUser.name.toLowerCase().replace(' ', '.')}@example.com`,
            skills: selectedUser.skills,
            bio: `${selectedUser.experience} level professional with ${selectedUser.projectsCompleted} completed projects.`,
            completedProjects: selectedUser.projectsCompleted,
            rating: selectedUser.rating,
            location: selectedUser.location,
            joinDate: '2023-01-15', // Date fictive
            socialLinks: {
              linkedin: `https://linkedin.com/in/${selectedUser.name.toLowerCase().replace(' ', '-')}`,
              github: `https://github.com/${selectedUser.name.toLowerCase().replace(' ', '-')}`,
              portfolio: `https://${selectedUser.name.toLowerCase().replace(' ', '-')}.dev`,
              twitter: `https://twitter.com/${selectedUser.name.toLowerCase().replace(' ', '')}`
            },
            availability: selectedUser.availability,
            expertise: selectedUser.skills.slice(0, 3), // Première 3 compétences comme expertise
            languages: ['English', 'French'] // Exemple de langues
          }} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </div>
  );
}
