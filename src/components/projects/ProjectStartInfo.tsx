import React from 'react';
import { Calendar } from 'lucide-react';

interface ProjectStartInfoProps {
  startDate: string;
  startType: string;
}

export default function ProjectStartInfo({ startDate, startType }: ProjectStartInfoProps) {
  const getStartsIn = () => {
    if (startType === 'team') {
      return 'Starts when team is complete';
    }

    if (!startDate) return '';

    const start = new Date(startDate);
    const now = new Date();
    const diffTime = start.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Started';
    if (diffDays === 0) return 'Starts today';
    if (diffDays === 1) return 'Starts tomorrow';
    return `Starts in ${diffDays} days`;
  };

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <Calendar className="w-4 h-4" />
      <span>{getStartsIn()}</span>
    </div>
  );
}