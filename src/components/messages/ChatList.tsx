import React from 'react';
import { Search, Users } from 'lucide-react';
import EmojiAvatar from '../common/EmojiAvatar';

interface Member {
  id: string;
  name: string;
  role: 'admin' | 'member';
  status: 'online' | 'offline';
  joinedAt: string;
}

interface GroupChat {
  id: string;
  type: 'group';
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  memberCount: number;
  projectId: string;
  description: string;
  createdAt: string;
  members: Member[];
}

interface DirectChat {
  id: string;
  type: 'direct';
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

type Chat = GroupChat | DirectChat;

interface ChatListProps {
  chats: Chat[];
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
}

export default function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <div className="w-80 border-r border-violet-500/20 flex flex-col">
      <div className="p-4 border-b border-violet-500/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-9 pr-4 py-2 bg-black/30 border border-violet-500/20 rounded-lg text-sm focus:outline-none focus:border-violet-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`w-full p-4 flex items-center gap-3 hover:bg-violet-500/10 transition-colors ${
              selectedChat === chat.id ? 'bg-violet-500/10' : ''
            }`}
          >
            <div className="relative">
              <EmojiAvatar name={chat.name} size="md" />
              {chat.type === 'group' && (
                <div className="absolute -bottom-1 -right-1 bg-violet-500/20 p-1 rounded-full">
                  <Users className="w-3 h-3 text-violet-400" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-medium truncate">{chat.name}</h3>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                  {new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              {chat.type === 'group' && (
                <p className="text-xs text-violet-400 mt-1">{chat.memberCount} members</p>
              )}
            </div>
            
            {chat.unread > 0 && (
              <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center">
                <span className="text-xs">{chat.unread}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}