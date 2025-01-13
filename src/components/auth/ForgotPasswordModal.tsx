import React, { useState } from 'react';
import { Mail, ArrowRight, X } from 'lucide-react';
import Modal from '../common/Modal';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically call an API to handle password reset
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Reset Password"
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-gray-400">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-violet-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full button-primary flex items-center justify-center gap-2 group py-2"
          >
            Send Reset Link
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="mb-4 text-emerald-400">
            <Mail className="w-12 h-12 mx-auto mb-2" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Check your email</h3>
          <p className="text-gray-400">
            We've sent password reset instructions to {email}
          </p>
        </div>
      )}
    </Modal>
  );
}