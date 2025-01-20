import React, { useState, useEffect } from 'react';
import { Send, Paperclip, Image } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import BackToDashboard from '../components/common/BackToDashboard';
import ChatList from '../components/messages/ChatList';
import ChatHeader from '../components/messages/ChatHeader';
import GroupInfo from '../components/messages/GroupInfo';
import EmojiAvatar from '../components/common/EmojiAvatar';
import UserDetailsModal from '../components/collaborate/UserDetailsModal';
import { mockChats, mockChatMessages } from '../data/mockMessages';
import { Message } from '../types/chat';

export default function Messages() {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showChatList, setShowChatList] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockChatMessages);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    console.log('Mock Chats:', mockChats);
    console.log('Mock Chat Messages:', mockChatMessages);
  }, []);

  useEffect(() => {
    console.log('Initial Chats:', mockChats);
    if (mockChats.length > 0) {
      const defaultChat = mockChats.find(chat => chat.type === 'group') || mockChats[0];
      console.log('Default Selected Chat:', defaultChat);
      setSelectedChat(defaultChat.id);
      setShowChatList(false);
    }
  }, [mockChats]);

  useEffect(() => {
    const state = location.state as { selectedChat?: string };
    if (state?.selectedChat) {
      setSelectedChat(state.selectedChat);
      setShowChatList(false);
    }
  }, [location.state]);

  const currentChat = mockChats.find(chat => chat.id === selectedChat);
  const currentMessages = selectedChat ? messages[selectedChat] || [] : [];

  console.log('Selected Chat:', selectedChat);
  console.log('Current Chat:', currentChat);
  console.log('Current Messages:', currentMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChat) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      content: newMessage,
      senderName: 'You',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), newMsg],
    }));

    setNewMessage('');
  };

  const handleBack = () => {
    setShowChatList(true);
    setSelectedChat(null);
    setShowGroupInfo(false);
  };

  const handleGroupMemberClick = (member: any) => {
    setSelectedUser({
      username: member.name,
      email: `${member.name.toLowerCase().replace(' ', '.')}@example.com`, // Mock email
      rating: 4.5,
      completedProjects: 8,
      skills: ['UI/UX Design', 'Product Management', 'Digital Marketing'], // Mock skills
      bio: `Mid-level professional with experience in ${member.name}'s domain`,
      location: 'New York, NY', // Mock location
      joinDate: member.joinedAt,
      availability: 'Part-time',
      socialLinks: {
        linkedin: `https://linkedin.com/in/${member.name.toLowerCase().replace(' ', '-')}`,
        github: `https://github.com/${member.name.toLowerCase().replace(' ', '-')}`,
        portfolio: `https://${member.name.toLowerCase().replace(' ', '')}.dev`,
        twitter: `https://twitter.com/${member.name.toLowerCase().replace(' ', '')}`
      }
    });
  };

  const handleHeaderClick = () => {
    if (!currentChat) return;

    if (currentChat.type === 'direct') {
      setSelectedUser({
        username: currentChat.name,
        email: `${currentChat.name.toLowerCase().replace(' ', '.')}@example.com`, // Mock email
        rating: 4.5,
        completedProjects: 8,
        skills: ['UI/UX Design', 'Product Management', 'Digital Marketing'], // Mock skills
        bio: `Mid-level professional with experience in ${currentChat.name}'s domain`,
        location: 'New York, NY', // Mock location
        joinDate: '2023-01-15', // Mock join date
        availability: 'Part-time',
        socialLinks: {
          linkedin: `https://linkedin.com/in/${currentChat.name.toLowerCase().replace(' ', '-')}`,
          github: `https://github.com/${currentChat.name.toLowerCase().replace(' ', '-')}`,
          portfolio: `https://${currentChat.name.toLowerCase().replace(' ', '')}.dev`,
          twitter: `https://twitter.com/${currentChat.name.toLowerCase().replace(' ', '')}`
        }
      });
    } else {
      setShowGroupInfo(true);
    }
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
                console.log('Chat selected:', chatId);
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
                  onHeaderClick={handleHeaderClick}
                />

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No messages in this conversation
                    </div>
                  ) : (
                    currentMessages.map((message) => (
                      <div key={message.id} className={`flex items-start gap-3 ${message.senderName === 'You' ? 'justify-end' : 'justify-start'}`}>
                        {message.senderName !== 'You' && (
                          <div 
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setSelectedUser({
                              username: message.senderName,
                              email: `${message.senderName.toLowerCase().replace(' ', '.')}@example.com`, // Mock email
                              rating: 4.5,
                              completedProjects: 8,
                              skills: ['UI/UX Design', 'Product Management', 'Digital Marketing'], // Mock skills
                              bio: `Mid-level professional with experience in ${message.senderName}'s domain`,
                              location: 'New York, NY', // Mock location
                              joinDate: '2023-01-15', // Mock join date
                              availability: 'Part-time',
                              socialLinks: {
                                linkedin: `https://linkedin.com/in/${message.senderName.toLowerCase().replace(' ', '-')}`,
                                github: `https://github.com/${message.senderName.toLowerCase().replace(' ', '-')}`,
                                portfolio: `https://${message.senderName.toLowerCase().replace(' ', '')}.dev`,
                                twitter: `https://twitter.com/${message.senderName.toLowerCase().replace(' ', '')}`
                              }
                            })}
                          >
                            <EmojiAvatar name={message.senderName} size="sm" />
                          </div>
                        )}
                        <div className={`min-w-0 ${message.senderName === 'You' ? 'max-w-[80%]' : 'flex-1'}`}>
                          {message.senderName !== 'You' && (
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="font-medium">{message.senderName}</span>
                            </div>
                          )}
                          <div className={`flex flex-col ${message.senderName === 'You' ? 'items-end' : 'items-start'}`}>
                            <p className={`break-words rounded-lg p-3 ${
                              message.senderName === 'You' 
                                ? 'bg-violet-600 text-white' 
                                : 'bg-gray-700/50 text-gray-300'
                            }`}>
                              {message.content}
                            </p>
                            <span className="text-xs text-gray-400 mt-1">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
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
                onMemberClick={handleGroupMemberClick}
              />
            </div>
          )}
        </div>
      </div>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}