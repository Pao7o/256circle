import React from 'react';
import { Plus, Circle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollUtils';

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with advanced features.',
    status: 'In Progress',
    nextTask: 'Update payment gateway',
    taskDeadline: '2024-04-15',
    tasksRemaining: 3
  },
  {
    id: 2,
    name: 'Marketing Campaign',
    description: 'Digital marketing campaign for product launch.',
    status: 'Planning',
    nextTask: 'Content strategy review',
    taskDeadline: '2024-04-10',
    tasksRemaining: 5
  }
];

const statusColors = {
  'In Progress': 'text-blue-400',
  'Planning': 'text-amber-400',
  'Review': 'text-violet-400',
  'Completed': 'text-emerald-400'
};

export default function ProjectsSection() {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Active Projects</h2>
        <Link 
          to="/projects" 
          onClick={scrollToTop}
          className="button-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Circle className="w-2 h-2 text-violet-400" />
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-400">
                    • {project.tasksRemaining} {project.tasksRemaining === 1 ? 'task' : 'tasks'} remaining
                  </span>
                </div>
              </div>
            </div>
            
            <Link
              to="/active-projects"
              onClick={scrollToTop}
              className="button-primary flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span className="hidden sm:inline">View Details</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link 
          to="/active-projects"
          onClick={scrollToTop}
          className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-2"
        >
          See all active projects
        </Link>
      </div>
    </div>
  );
}