import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface InterestsStepProps {
  onNext: (interests: string[]) => void;
  onBack: () => void;
}

const availableInterests = [
  'E-commerce',
  'SaaS',
  'Digital Marketing',
  'Mobile Apps',
  'Web Development',
  'Blockchain',
  'AI/ML',
  'Content Creation',
  'UI/UX Design',
  'DevOps',
  'Cloud Computing',
  'Data Science',
  'Cybersecurity',
  'IoT',
  'Game Development',
  'AR/VR'
];

export default function InterestsStep({ onNext, onBack }: InterestsStepProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    if (selectedInterests.length > 0) {
      onNext(selectedInterests);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Your Interests</h3>
        <p className="text-gray-400">Select areas that interest you (minimum 1)</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableInterests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`p-3 rounded-lg text-sm text-left transition-all ${
              selectedInterests.includes(interest)
                ? 'bg-violet-500/20 border-violet-500'
                : 'bg-black/30 border-violet-500/20 hover:border-violet-500/50'
            } border`}
          >
            <div className="flex items-center justify-between">
              <span>{interest}</span>
              {selectedInterests.includes(interest) && (
                <Check className="w-4 h-4 text-violet-400" />
              )}
            </div>
          </button>
        ))}
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
          disabled={selectedInterests.length === 0}
          className="flex-1 button-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Complete Profile
        </button>
      </div>
    </div>
  );
}