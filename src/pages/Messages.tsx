import React, { useState, useEffect } from 'react';
import { Send, Paperclip, Image } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import BackToDashboard from '../components/common/BackToDashboard';
import ChatList from '../components/messages/ChatList';
import ChatHeader from '../components/messages/ChatHeader';
import GroupInfo from '../components/messages/GroupInfo';
import EmojiAvatar from '../components/common/EmojiAvatar';
import { mockChats, mockChatMessages } from '../data/mockMessages';

export default function Messages() {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showChatList, setShowChatList] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const state = location.state as { selectedChat?: string };
    if (state?.selectedChat) {
      setSelectedChat(state.selectedChat);
      setShowChatList(false);
    }
  }, [location.state]);

  const currentChat = mockChats.find(chat => chat.id === selectedChat);
  const currentMessages = selectedChat ? mockChatMessages[selectedChat] : [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setNewMessage('');
  };

  const handleBack = () => {
    setShowChatList(true);
    setSelectedChat(null);
    setShowGroupInfo(false);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="flex bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl h-[calc(100vh-8rem)] relative overflow-hidden">
          {/* Chat List */}
          <div className={`
            absolute md:relative w-full md:w-80 h-full bg-[#0f0f0f] md:bg-transparent z-30
            transition-transform duration-300
            ${showChatList ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            <ChatList
              chats={mockChats}
              selectedChat={selectedChat}
              onSelectChat={(chatId) => {
                setSelectedChat(chatId);
                setShowChatList(false);
              }}
            />
          </div>

          {/* Main Chat Area */}
          <div className={`
            absolute md:relative inset-0 md:inset-auto flex-1 bg-[#0f0f0f] md:bg-transparent z-20
            transition-transform duration-300
            ${selectedChat ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}>
            {selectedChat && currentChat ? (
              <div className="flex flex-col h-full">
                <ChatHeader
                  chat={{
                    id: currentChat.id,
                    type: currentChat.type,
                    name: currentChat.name,
                    members: currentChat.type === 'group' ? currentChat.memberCount : undefined,
                    projectId: currentChat.type === 'group' ? currentChat.projectId : undefined
                  }}
                  onShowInfo={() => setShowGroupInfo(true)}
                  onBack={handleBack}
                />

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.map((message) => (
                    <div key={message.id} className="flex items-start gap-3">
                      <EmojiAvatar name={message.senderName} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium">{message.senderName}</span>
                          <span className="text-xs text-gray-400">
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-gray-300 mt-1 break-words">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-violet-500/20">
                  <div className="flex gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
                        title="Attach file"
                      >
                        <Paperclip className="w-5 h-5 text-gray-400" />
                      </button>
                      <button
                        type="button"
                        className="p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
                        title="Send image"
                      >
                        <Image className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-500"
                    />
                    <button
                      type="submit"
                      className="button-primary flex items-center gap-2 whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" />
                      <span className="hidden sm:inline">Send</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
                Select a conversation to start messaging
              </div>
            )}
          </div>

          {/* Group Info Sidebar */}
          {currentChat?.type === 'group' && showGroupInfo && (
            <div className={`
              absolute md:relative w-80 h-full bg-[#0f0f0f] md:bg-transparent z-40
              transition-transform duration-300
              ${showGroupInfo ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <GroupInfo
                group={currentChat}
                onClose={() => setShowGroupInfo(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}