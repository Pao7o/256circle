import React from 'react';
import { Bell, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  {
    id: 1,
    type: 'review',
    title: 'Review Project Proposal',
    project: 'E-commerce Platform',
    deadline: '2024-04-10',
    priority: 'high'
  },
  {
    id: 2,
    type: 'task',
    title: 'Update Payment Gateway',
    project: 'E-commerce Platform',
    deadline: '2024-04-15',
    priority: 'medium'
  }
];

export default function PendingActions() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <Link 
          to="/active-projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowRight className="w-4 h-4" />
          <span>See all active projects</span>
        </Link>
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Pending Actions</h1>
            <p className="text-gray-400 mt-2">Tasks requiring your attention</p>
          </div>
        </div>

        <div className="space-y-4">
          {actions.map((action) => (
            <div
              key={action.id}
              className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-violet-500/10 rounded-lg">
                    <Bell className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-400">Project: {action.project}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        Due: {new Date(action.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    action.priority === 'high' 
                      ? 'bg-rose-500/10 text-rose-400'
                      : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {action.priority}
                  </span>
                  <button className="button-primary flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}