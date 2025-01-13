import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface SkillsStepProps {
  onNext: (skills: Skill[]) => void;
  onBack: () => void;
}

const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;

export default function SkillsStep({ onNext, onBack }: SkillsStepProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<Skill['level']>('Intermediate');

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    
    setSkills([...skills, { 
      name: newSkill.trim(), 
      level: newSkillLevel 
    }]);
    setNewSkill('');
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (skills.length > 0) {
      onNext(skills);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Your Skills</h3>
        <p className="text-gray-400">Add your technical and professional skills</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-1 bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="Enter a skill..."
          />
          <select
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(e.target.value as Skill['level'])}
            className="bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          >
            {skillLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <button
            onClick={handleAddSkill}
            className="button-primary p-2"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 bg-black/30 rounded-lg"
            >
              <div>
                <span className="font-medium">{skill.name}</span>
                <span className={`ml-2 text-sm px-2 py-1 rounded-full ${
                  skill.level === 'Expert' ? 'bg-amber-500/10 text-amber-400' :
                  skill.level === 'Advanced' ? 'bg-emerald-500/10 text-emerald-400' :
                  skill.level === 'Intermediate' ? 'bg-violet-500/10 text-violet-400' :
                  'bg-blue-500/10 text-blue-400'
                }`}>
                  {skill.level}
                </span>
              </div>
              <button
                onClick={() => handleRemoveSkill(index)}
                className="text-gray-400 hover:text-rose-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={skills.length === 0}
          className="flex-1 button-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}