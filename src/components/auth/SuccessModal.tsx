import React from 'react';
import { CheckCircle } from 'lucide-react';
import Modal from '../common/Modal';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export default function SuccessModal({ isOpen, onClose, email }: SuccessModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Account Created!</h3>
        </div>
      }
    >
      <div className="text-center space-y-4">
        <p className="text-gray-400">
          Your account has been successfully created. Please check your email at <span className="text-white">{email}</span> to verify your account.
        </p>
        <button
          onClick={onClose}
          className="button-primary w-full"
        >
          Got it!
        </button>
      </div>
    </Modal>
  );
}