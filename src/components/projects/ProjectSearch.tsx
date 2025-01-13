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
        placeholder="Search projects..."
        className="w-full bg-black/30 border border-violet-500/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-violet-500"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}