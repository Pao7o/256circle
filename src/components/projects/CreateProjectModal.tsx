import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CreateProjectModalProps {
  onClose: () => void;
  onCreate: (project: any) => void;
}

const categories = [
  'E-commerce',
  'SaaS',
  'Digital Marketing',
  'Mobile App',
  'Web Development',
  'Blockchain',
  'AI/ML',
  'Content Creation',
  'Others'
];

const durations = [
  '1 week or less',
  '1 week - 1 month',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  '1+ year'
];

export default function CreateProjectModal({ onClose, onCreate }: CreateProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    skills: '',
    startDate: '',
    teamSize: '',
    duration: '',
    visibility: 'public',
    startType: 'date',
    useEscrow: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]" 
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div className="bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold gradient-text">Create New Project</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Project Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Description
              </label>
              <textarea
                required
                rows={4}
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Category
              </label>
              <select
                required
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Required Skills (comma-separated)
              </label>
              <input
                type="text"
                required
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="e.g., React, Node.js, Marketing"
              />
            </div>

            {/* Start Type */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Start Type
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-violet-500"
                    name="startType"
                    value="date"
                    checked={formData.startType === 'date'}
                    onChange={(e) => setFormData({ ...formData, startType: e.target.value })}
                  />
                  <span className="ml-2 text-gray-400">Specific Date</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-violet-500"
                    name="startType"
                    value="team"
                    checked={formData.startType === 'team'}
                    onChange={(e) => setFormData({ ...formData, startType: e.target.value })}
                  />
                  <span className="ml-2 text-gray-400">When Team is Complete</span>
                </label>
              </div>
            </div>

            {/* Start Date - Only show if startType is 'date' */}
            {formData.startType === 'date' && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500 [color-scheme:dark]"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
            )}

            {/* Team Size */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Team Size (number of members needed)
              </label>
              <input
                type="number"
                required
                min="1"
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Estimated Duration
              </label>
              <select
                required
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              >
                <option value="">Select duration</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Visibility
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-violet-500"
                    name="visibility"
                    value="public"
                    checked={formData.visibility === 'public'}
                    onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                  />
                  <span className="ml-2 text-gray-400">Public</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-violet-500"
                    name="visibility"
                    value="private"
                    checked={formData.visibility === 'private'}
                    onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                  />
                  <span className="ml-2 text-gray-400">Private</span>
                </label>
              </div>
            </div>

            {/* Escrow Option */}
            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.useEscrow}
                  onChange={(e) => setFormData({ ...formData, useEscrow: e.target.checked })}
                  className="form-checkbox text-violet-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Use Escrow Service</span>
                    <Link 
                      to="/services"
                      className="text-sm text-violet-400 hover:text-violet-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Enable our escrow service to ensure secure and fair distribution of funds among team members.
                  </p>
                </div>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 button-primary"
              >
                Create Project
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}