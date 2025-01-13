import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    equity: '',
    equityJustification: '',
    hasSkills: 'no',
    ownSkills: '',
    delegatedSkills: '',
    contactMethod: '',
    email: '',
    acceptCommission: false,
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* General Information */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Project Name *
        </label>
        <input
          type="text"
          required
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          placeholder="Name of your startup or idea"
          value={formData.projectName}
          onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
        />
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Project Description *
        </label>
        <textarea
          required
          rows={4}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          placeholder="Describe your project (min 250 characters)"
          minLength={250}
          maxLength={2000}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <div className="mt-2 flex items-center gap-4">
          <button
            type="button"
            className="button-primary flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Attach Document
          </button>
          <span className="text-sm text-gray-400">PDF, PPT, or DOC</span>
        </div>
      </div>

      {/* Financial Structure */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Desired Equity Percentage * (max 99%)
          </label>
          <input
            type="number"
            required
            min="1"
            max="99"
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="e.g., 70"
            value={formData.equity}
            onChange={(e) => setFormData({ ...formData, equity: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Justify your equity percentage *
          </label>
          <textarea
            required
            rows={3}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="Explain why this percentage is fair"
            value={formData.equityJustification}
            onChange={(e) => setFormData({ ...formData, equityJustification: e.target.value })}
          />
        </div>
      </div>

      {/* Skills and Roles */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Skills you can manage independently (optional)
          </label>
          <textarea
            rows={2}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="List the skills and responsibilities you can handle"
            value={formData.ownSkills}
            onChange={(e) => setFormData({ ...formData, ownSkills: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Skills to be delegated *
          </label>
          <textarea
            required
            rows={2}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="List the skills and responsibilities you need help with"
            value={formData.delegatedSkills}
            onChange={(e) => setFormData({ ...formData, delegatedSkills: e.target.value })}
          />
        </div>
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Preferred contact method *
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="form-radio text-violet-500"
              required
            />
            <span className="ml-2 text-gray-400">Email</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="platform"
              checked={formData.contactMethod === 'platform'}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="form-radio text-violet-500"
            />
            <span className="ml-2 text-gray-400">Platform Messaging</span>
          </label>
        </div>
        
        {formData.contactMethod === 'email' && (
          <div className="mt-2">
            <input
              type="email"
              required
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
              placeholder="Your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        )}
      </div>

      {/* Consent */}
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            required
            checked={formData.acceptCommission}
            onChange={(e) => setFormData({ ...formData, acceptCommission: e.target.checked })}
            className="form-checkbox text-violet-500"
          />
          <span className="ml-2 text-sm text-gray-400">
            I accept the 5% platform commission *
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            required
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            className="form-checkbox text-violet-500"
          />
          <span className="ml-2 text-sm text-gray-400">
            I accept the incubator terms and conditions *
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full button-primary flex items-center justify-center gap-2 group py-3"
      >
        Submit Application
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}