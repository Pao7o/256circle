import React from 'react';
import { Plus } from 'lucide-react';

const skills = [
  { name: 'React', level: 'Expert' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'AWS', level: 'Advanced' }
];

const levelColors = {
  'Beginner': 'bg-blue-500/10 text-blue-400',
  'Intermediate': 'bg-violet-500/10 text-violet-400',
  'Advanced': 'bg-emerald-500/10 text-emerald-400',
  'Expert': 'bg-amber-500/10 text-amber-400'
};

export default function ProfileSkills() {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <button className="button-primary p-2">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${levelColors[skill.level as keyof typeof levelColors]}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}