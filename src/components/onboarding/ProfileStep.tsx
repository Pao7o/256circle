import React, { useState } from 'react';
import { MapPin, Globe, Briefcase } from 'lucide-react';

interface ProfileData {
  fullName: string;
  location: string;
  website: string;
  bio: string;
  title: string;
  yearsOfExperience: string;
}

interface ProfileStepProps {
  onNext: (data: ProfileData) => void;
  onBack: () => void;
}

export default function ProfileStep({ onNext, onBack }: ProfileStepProps) {
  const [formData, setFormData] = useState<ProfileData>({
    fullName: '',
    location: '',
    website: '',
    bio: '',
    title: '',
    yearsOfExperience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Complete Your Profile</h3>
        <p className="text-gray-400">Tell us more about yourself</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Professional Title
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="e.g. Full Stack Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Years of Experience
          </label>
          <select
            required
            value={formData.yearsOfExperience}
            onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          >
            <option value="">Select experience</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Bio
          </label>
          <textarea
            required
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="Tell us about yourself..."
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-violet-500"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Website
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-violet-500"
              placeholder="https://your-website.com"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 button-primary"
        >
          Continue
        </button>
      </div>
    </form>
  );
}