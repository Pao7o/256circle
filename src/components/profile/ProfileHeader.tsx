import React, { useState } from 'react';
import { Mail, MapPin, Link as LinkIcon, Pencil } from 'lucide-react';
import EmojiAvatar from '../common/EmojiAvatar';
import { useAuthStore } from '../../stores/authStore';
import Modal from '../common/Modal';

export default function ProfileHeader() {
  const { user } = useAuthStore();
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <EmojiAvatar name={user?.username || ''} size="lg" />
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            <p className="text-gray-400 mt-1">Full Stack Developer</p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-violet-400 hover:text-violet-300">github.com/johndoe</a>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowEditModal(true)}
            className="button-primary flex items-center gap-2"
          >
            <Pencil className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Profile"
        maxWidth="max-w-xl"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Display Name
            </label>
            <input
              type="text"
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
              defaultValue={user?.username}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Location
            </label>
            <input
              type="text"
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
              defaultValue="San Francisco, CA"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Website
            </label>
            <input
              type="url"
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
              defaultValue="https://github.com/johndoe"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              className="flex-1 button-primary"
            >
              Save Changes
            </button>
            <button
              onClick={() => setShowEditModal(false)}
              className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}