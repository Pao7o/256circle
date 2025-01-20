import React, { useState } from 'react';
import { X, Users, Shield, Settings, UserPlus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmojiAvatar from '../common/EmojiAvatar';

interface Member {
  id: string;
  name: string;
  role: 'admin' | 'member';
  status: 'online' | 'offline';
  joinedAt: string;
}

interface GroupInfoProps {
  group: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    members: Member[];
    projectId?: string;
  };
  onClose: () => void;
  onMemberClick: (member: Member) => void;
}

export default function GroupInfo({ group, onClose, onMemberClick }: GroupInfoProps) {
  const admins = group.members.filter(m => m.role === 'admin');
  const members = group.members.filter(m => m.role === 'member');

  const MemberList = ({ members, title, icon }: { members: Member[], title: string, icon: JSX.Element }) => (
    <div>
      <h5 className="text-xs text-gray-400 mb-2 flex items-center gap-1">
        {icon}
        {title}
      </h5>
      <div className="space-y-2">
        {members.map(member => (
          <div key={member.id} className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:bg-violet-500/10 p-2 rounded-lg transition-colors flex-1"
              onClick={() => onMemberClick(member)}
            >
              <EmojiAvatar name={member.name} size="sm" />
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">
                  Joined {new Date(member.joinedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={`w-2 h-2 rounded-full ${
              member.status === 'online' ? 'bg-emerald-400' : 'bg-gray-400'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col bg-[#0f0f0f] border-l border-violet-500/20">
      <div className="p-4 border-b border-violet-500/20 flex items-center justify-between">
        <h3 className="font-semibold">Group Info</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          <div className="text-center">
            <EmojiAvatar name={group.name} size="lg" />
            <h2 className="text-xl font-semibold mt-3">{group.name}</h2>
            <p className="text-sm text-gray-400 mt-1">
              Created {new Date(group.createdAt).toLocaleDateString()}
            </p>
          </div>

          {group.description && (
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Description</h4>
              <p className="text-sm">{group.description}</p>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-400">Members ({group.members.length})</h4>
              <button className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
                <UserPlus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="space-y-4">
              {admins.length > 0 && (
                <MemberList members={admins} title="Admins" icon={<Shield className="w-3 h-3" />} />
              )}

              {members.length > 0 && (
                <MemberList members={members} title="Members" icon={<Users className="w-3 h-3" />} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-violet-500/20 space-y-2">
        <button className="w-full p-2 text-sm text-left hover:bg-violet-500/10 rounded-lg transition-colors flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Group Settings
        </button>
        <button className="w-full p-2 text-sm text-left hover:bg-rose-500/10 text-rose-400 rounded-lg transition-colors flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Leave Group
        </button>
      </div>
    </div>
  );
}