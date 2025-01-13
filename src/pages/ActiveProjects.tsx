import React, { useState } from 'react';
import { Circle, MessageSquare, ListTodo, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToDashboard from '../components/common/BackToDashboard';
import ProjectDetails from '../components/projects/ProjectDetails';

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with advanced features and integrations.',
    category: 'E-commerce',
    skills: 'React, Node.js, PostgreSQL',
    status: 'In Progress',
    nextTask: 'Update payment gateway',
    taskDeadline: '2024-04-15',
    tasksRemaining: 3,
    team: ['John Doe', 'Alice Cooper', 'Bob Wilson'],
    progress: 65,
    startDate: '2024-03-01',
    startType: 'date',
    duration: '3-6 months',
    teamSize: '5',
    owner: {
      name: 'John Smith',
      rating: 4.8,
      completedProjects: 15
    },
    currentMembers: 3
  },
  // ... other projects remain the same
];

const statusColors = {
  'In Progress': 'text-blue-400',
  'Planning': 'text-amber-400',
  'Review': 'text-violet-400',
  'Completed': 'text-emerald-400'
};

export default function ActiveProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Active Projects</h1>
            <p className="text-gray-400 mt-2">Track your ongoing projects and tasks</p>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Circle className="w-2 h-2 text-violet-400" />
                    <h3 className="text-xl font-medium">{project.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-400">
                      • {project.tasksRemaining} {project.tasksRemaining === 1 ? 'task' : 'tasks'} remaining
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/pending-actions"
                    className="flex-1 sm:flex-none button-primary flex items-center justify-center gap-2"
                  >
                    <ListTodo className="w-4 h-4" />
                    <span className="hidden sm:inline">Pending Tasks</span>
                  </Link>
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="flex-1 sm:flex-none button-primary flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Project Details</span>
                  </button>
                  <Link
                    to="/messages"
                    className="flex-1 sm:flex-none button-primary flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="hidden sm:inline">Team Chat</span>
                  </Link>
                </div>
              </div>

              <div className="mt-4 bg-black/20 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Next Task</p>
                <p className="font-medium">{project.nextTask}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Due: {new Date(project.taskDeadline).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.map((member, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-violet-500/20 border-2 border-[#0f0f0f] flex items-center justify-center text-sm"
                      title={member}
                    >
                      {member.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
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