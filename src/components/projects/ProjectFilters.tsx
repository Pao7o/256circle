import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

interface ProjectFiltersProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sort: SortOption) => void;
}

export interface FilterOptions {
  category: string;
  duration: string;
  teamSize: string;
}

export type SortOption = 'newest' | 'oldest' | 'mostLiked';

export default function ProjectFilters({
  isOpen,
  onOpenChange,
  onFilterChange,
  onSortChange
}: ProjectFiltersProps) {
  return (
    <div className="flex gap-4 items-center">
      {/* Sort Dropdown */}
      <div className="relative">
        <select
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="bg-black/30 border border-violet-500/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-violet-500 appearance-none pr-8 text-sm"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="mostLiked">Most Liked</option>
        </select>
        <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      {/* Filter Button */}
      <button
        onClick={() => onOpenChange(!isOpen)}
        className="button-primary flex items-center gap-2"
      >
        <Filter className="w-5 h-5" />
        Filter
      </button>
    </div>
  );
}