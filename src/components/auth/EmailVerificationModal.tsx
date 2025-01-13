import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Modal from '../common/Modal';

interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<void>;
}

export default function EmailVerificationModal({ isOpen, onClose, email, onVerify }: EmailVerificationModalProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onVerify(code);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Invalid verification code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Verify Your Email"
    >
      <div className="space-y-6">
        <div className="text-center">
          <Mail className="w-12 h-12 text-violet-400 mx-auto mb-4" />
          <p className="text-gray-400">
            We've sent a verification code to <span className="text-white">{email}</span>
          </p>
        </div>

        {error && (
          <div className="text-rose-500 text-sm text-center bg-rose-500/10 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500 text-center text-2xl tracking-widest"
              placeholder="Enter code"
              maxLength={6}
              pattern="\d{6}"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || code.length !== 6}
            className="w-full button-primary flex items-center justify-center gap-2 group py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              'Verifying...'
            ) : (
              <>
                Verify Email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </Modal>
  );
}