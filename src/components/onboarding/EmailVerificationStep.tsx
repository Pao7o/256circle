import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailVerificationStepProps {
  email: string;
  onNext: () => void;
}

export default function EmailVerificationStep({ email, onNext }: EmailVerificationStepProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="bg-violet-500/10 p-4 rounded-full">
          <Mail className="w-12 h-12 text-violet-400" />
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-2">Verify Your Email</h3>
        <p className="text-gray-400">
          We've sent a verification link to <span className="text-white">{email}</span>
        </p>
      </div>

      <div className="bg-black/30 p-4 rounded-lg text-sm text-gray-400">
        <p>Please check your inbox and click the verification link to continue.</p>
        <p className="mt-2">Don't see the email? Check your spam folder.</p>
      </div>

      <button
        onClick={onNext}
        className="w-full button-primary flex items-center justify-center gap-2 group py-3"
      >
        Continue to Profile Setup
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}