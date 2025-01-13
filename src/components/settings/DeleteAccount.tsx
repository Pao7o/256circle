import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import SettingsCard from './SettingsCard';
import Modal from '../common/Modal';

export default function DeleteAccount() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <SettingsCard title="Danger Zone" icon={Trash2} variant="danger">
        <div>
          <p className="text-gray-400 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button 
            onClick={() => setShowConfirmation(true)}
            className="bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Delete Account
          </button>
        </div>
      </SettingsCard>

      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Delete Account"
      >
        <div className="space-y-4">
          <p className="text-gray-400">
            Are you sure you want to delete your account? All of your data will be permanently removed.
            This action cannot be undone.
          </p>
          
          <div className="pt-4 flex gap-4">
            <button
              onClick={() => setShowConfirmation(false)}
              className="flex-1 button-primary"
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Yes, delete my account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}