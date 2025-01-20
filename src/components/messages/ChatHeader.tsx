import React from 'react';
import { ArrowLeft } from 'lucide-react';
import EmojiAvatar from '../common/EmojiAvatar';

interface ChatHeaderProps {
  chat: {
    id: string;
    type: 'group' | 'direct';
    name: string;
    members?: number;
    projectId?: string;
  };
  onBack: () => void;
  onHeaderClick: () => void;
}

export default function ChatHeader({ chat, onBack, onHeaderClick }: ChatHeaderProps) {
  return (
    <div className="p-4 border-b border-violet-500/20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack} 
          className="md:hidden text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onHeaderClick}
        >
          <EmojiAvatar name={chat.name} size="md" />
          <div>
            <h2 className="font-semibold">{chat.name}</h2>
            {chat.type === 'group' && (
              <p className="text-xs text-gray-400">
                {chat.members} members
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}