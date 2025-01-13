import React from 'react';

interface FilterContentProps {
  filters: {
    category: string;
    duration: string;
    teamSize: string;
    escrow: boolean;
  };
  onFilterChange: (key: string, value: any) => void;
  onClose: () => void;
  onReset: () => void;
}

export default function FilterContent({ filters, onFilterChange, onClose, onReset }: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
        >
          <option value="">All Categories</option>
          <option value="E-commerce">E-commerce</option>
          <option value="SaaS">SaaS</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Mobile App">Mobile App</option>
          <option value="Web Development">Web Development</option>
          <option value="Blockchain">Blockchain</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Content Creation">Content Creation</option>
        </select>
      </div>

      {/* Duration Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Duration
        </label>
        <select
          value={filters.duration}
          onChange={(e) => onFilterChange('duration', e.target.value)}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
        >
          <option value="">All Durations</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="1+ year">1+ year</option>
        </select>
      </div>

      {/* Team Size Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Team Size
        </label>
        <select
          value={filters.teamSize}
          onChange={(e) => onFilterChange('teamSize', e.target.value)}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
        >
          <option value="">All Team Sizes</option>
          <option value="1-2 people">1-2 people</option>
          <option value="3-5 people">3-5 people</option>
          <option value="6-10 people">6-10 people</option>
          <option value="11-20 people">11-20 people</option>
          <option value="20+ people">20+ people</option>
        </select>
      </div>

      {/* Escrow Filter */}
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.escrow}
            onChange={(e) => onFilterChange('escrow', e.target.checked)}
            className="form-checkbox text-violet-500"
          />
          <span className="text-sm font-medium text-gray-400">
            Show only escrow-protected projects
          </span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={onReset}
          className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        >
          Reset
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        >
          Apply
        </button>
      </div>
    </div>
  );
}