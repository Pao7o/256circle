import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Star, 
  Award, 
  Briefcase, 
  MapPin, 
  Calendar, 
  X, 
  Code, 
  Globe, 
  Cpu, 
  PenTool,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { usePreventScroll } from '../../hooks/usePreventScroll';

interface UserDetailsModalProps {
  user: {
    uid: string;
    username: string;
    email: string;
    skills?: string[];
    bio?: string;
    completedProjects?: number;
    rating?: number;
    location?: string;
    joinDate?: string;
    socialLinks?: {
      linkedin?: string;
      github?: string;
      portfolio?: string;
      twitter?: string;
    };
    expertise?: string[];
    languages?: string[];
    availability?: string;
  };
  onClose: () => void;
}

export default function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'contact'>('overview');
  const [message, setMessage] = useState('');
  const { user: currentUser } = useAuthStore();

  // Prevent scrolling when modal is open
  usePreventScroll(true);

  const handleSendMessage = () => {
    if (!message.trim() || !currentUser) return;
    
    // TODO: Implémenter la logique réelle d'envoi de message
    console.log('Sending message to', user.username, ':', message);
    
    // Réinitialiser le message après l'envoi
    setMessage('');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]" 
        onClick={onClose} 
      />
      <div 
        className="fixed inset-0 z-[90] flex items-center justify-center p-4 overflow-y-auto"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div 
          className="bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Bouton de fermeture */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header du profil */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 bg-violet-500/20 rounded-full flex items-center justify-center text-4xl font-bold text-violet-400 mr-6">
              {user.username[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">{user.username}</h2>
              <p className="text-gray-400">{user.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-300">{user.rating?.toFixed(1)} Rating</span>
                <Briefcase className="w-5 h-5 text-green-500 ml-4" />
                <span className="text-sm text-gray-300">{user.completedProjects} Projects</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 ${
                activeTab === 'overview' 
                  ? 'text-violet-500 border-b-2 border-violet-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 ${
                activeTab === 'contact' 
                  ? 'text-violet-500 border-b-2 border-violet-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Contenu des tabs */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Colonne de gauche */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Professional Profile</h3>
                
                {user.bio && (
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-gray-300 mb-2">Bio</h4>
                    <p className="text-gray-400">{user.bio}</p>
                  </div>
                )}

                {user.skills && user.skills.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-md font-medium text-gray-300 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Colonne de droite */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Additional Details</h3>
                
                <div className="space-y-3">
                  {user.location && (
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  
                  {user.joinDate && (
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2 text-green-500" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  )}
                  
                  {user.availability && (
                    <div className="flex items-center text-gray-400">
                      <Award className="w-5 h-5 mr-2 text-purple-500" />
                      <span>{user.availability}</span>
                    </div>
                  )}
                </div>

                {user.socialLinks && (
                  <div className="mt-6">
                    <h4 className="text-md font-medium text-gray-300 mb-2">Social Links</h4>
                    <div className="flex gap-4">
                      {user.socialLinks.linkedin && (
                        <a 
                          href={user.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                      {user.socialLinks.github && (
                        <a 
                          href={user.socialLinks.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {user.socialLinks.portfolio && (
                        <a 
                          href={user.socialLinks.portfolio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                        >
                          <PenTool className="w-6 h-6" />
                        </a>
                      )}
                      {user.socialLinks.twitter && (
                        <a 
                          href={user.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Onglet de contact */}
          {activeTab === 'contact' && (
            <div>
              {currentUser ? (
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">Send a Message</h3>
                  <div className="relative">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={`Send a message to ${user.username}...`}
                      className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500 resize-none h-32"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="absolute bottom-2 right-2 bg-violet-500 text-white rounded-full p-2 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-violet-500" />
                  <p>Please log in to send a message</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
