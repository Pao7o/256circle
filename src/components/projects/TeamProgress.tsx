import React from 'react';
import { Users } from 'lucide-react';

interface TeamProgressProps {
  teamSize: number;
  currentMembers?: number;
}

export default function TeamProgress({ teamSize, currentMembers = 0 }: TeamProgressProps) {
  const progress = (currentMembers / teamSize) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <Users className="w-4 h-4" />
          <span>{currentMembers}/{teamSize} members</span>
        </div>
        <span className="text-violet-400">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-black/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-violet-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}