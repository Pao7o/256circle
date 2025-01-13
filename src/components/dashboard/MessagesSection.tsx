import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmojiAvatar from '../common/EmojiAvatar';
import { mockChats } from '../../data/mockMessages';
import { scrollToTop } from '../../utils/scrollUtils';

const messages = mockChats.slice(0, 3).map(chat => ({
  id: chat.id,
  from: chat.name,
  message: chat.lastMessage,
  time: chat.timestamp,
  unread: chat.unread
}));

export default function MessagesSection() {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Messages</h2>
        <Link 
          to="/messages" 
          onClick={scrollToTop}
          className="button-primary p-2"
        >
          <MessageSquare className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Link
            key={message.id}
            to="/messages"
            state={{ selectedChat: message.id }}
            onClick={scrollToTop}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/20 transition-colors"
          >
            <EmojiAvatar name={message.from} size="sm" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium truncate">{message.from}</h3>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                  {new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-gray-400 truncate">{message.message}</p>
            </div>
            {message.unread > 0 && (
              <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0" />
            )}
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/messages"
          onClick={scrollToTop}
          className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-2"
        >
          See all messages
        </Link>
      </div>
    </div>
  );
}