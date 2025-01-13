import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import Modal from '../common/Modal';
import GoogleLoginButton from './GoogleLoginButton';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={
        showSuccess ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-emerald-400">Account Created!</h3>
            <p className="text-gray-400 mt-2">Please check your email to verify your account.</p>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text">Create Account</h3>
            <p className="text-gray-400 mt-2 text-base font-normal">Join our community and start your journey!</p>
          </div>
        )
      }
    >
      {!showSuccess && (
        <>
          <SignUpForm onSuccess={handleSuccess} onSwitchToLogin={onSwitchToLogin} />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-[#1a1a1a]">Or</span>
            </div>
          </div>

          <GoogleLoginButton />
        </>
      )}
    </Modal>
  );
}