import React from 'react';
import { Info, Users, ArrowLeft } from 'lucide-react';
import EmojiAvatar from '../common/EmojiAvatar';

interface ChatHeaderProps {
  chat: {
    id: string;
    type: 'direct' | 'group';
    name: string;
    members?: number;
    projectId?: string;
  };
  onShowInfo: () => void;
  onBack: () => void;
}

export default function ChatHeader({ chat, onShowInfo, onBack }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b border-violet-500/20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="md:hidden p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="relative">
          <EmojiAvatar name={chat.name} size="md" />
          {chat.type === 'group' && (
            <div className="absolute -bottom-1 -right-1 bg-violet-500/20 p-1 rounded-full">
              <Users className="w-3 h-3 text-violet-400" />
            </div>
          )}
        </div>
        <div>
          <h2 className="font-semibold">{chat.name}</h2>
          {chat.type === 'group' && (
            <p className="text-sm text-violet-400">{chat.members} members</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {chat.type === 'group' && (
          <button 
            onClick={onShowInfo}
            className="p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
            title="Group Info"
          >
            <Info className="w-5 h-5 text-violet-400" />
          </button>
        )}
      </div>
    </div>
  );
}