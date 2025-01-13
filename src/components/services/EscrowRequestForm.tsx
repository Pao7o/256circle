import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function EscrowRequestForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    transactionType: '',
    amount: '',
    description: '',
    buyerEmail: '',
    sellerEmail: '',
    terms: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Transaction Type *
        </label>
        <select
          required
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          value={formData.transactionType}
          onChange={(e) => setFormData({ ...formData, transactionType: e.target.value })}
        >
          <option value="">Select type</option>
          <option value="digital">Digital Product</option>
          <option value="service">Service</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Transaction Amount (USD) *
        </label>
        <input
          type="number"
          required
          min="1"
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Transaction Description *
        </label>
        <textarea
          required
          rows={3}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          placeholder="Describe the transaction"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Buyer Email *
          </label>
          <input
            type="email"
            required
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="buyer@example.com"
            value={formData.buyerEmail}
            onChange={(e) => setFormData({ ...formData, buyerEmail: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Seller Email *
          </label>
          <input
            type="email"
            required
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
            placeholder="seller@example.com"
            value={formData.sellerEmail}
            onChange={(e) => setFormData({ ...formData, sellerEmail: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Terms and Conditions *
        </label>
        <textarea
          required
          rows={3}
          className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          placeholder="Specify the terms of the transaction"
          value={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
        />
      </div>

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            required
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            className="form-checkbox text-violet-500"
          />
          <span className="ml-2 text-sm text-gray-400">
            I accept the 2.5% escrow service fee and terms of service *
          </span>
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 button-primary flex items-center justify-center gap-2 group py-3"
        >
          Submit Non-Project Transaction
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}