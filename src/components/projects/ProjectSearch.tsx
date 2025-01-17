import React from 'react';
import { Search } from 'lucide-react';

interface ProjectSearchProps {
  onSearch: (query: string) => void;
}

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search projects by name, skills, or category..."
        className="w-full px-4 py-3 pl-10 bg-[#1a1a1a] border border-violet-500/20 rounded-full text-white focus:outline-none focus:border-violet-500 transition-colors"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}