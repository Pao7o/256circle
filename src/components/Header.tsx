import React, { useContext } from 'react';
import { Menu, LayoutDashboard, MessageSquare, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { LoginContext } from '../App';
import { useAuthStore } from '../stores/authStore';
import EmojiAvatar from './common/EmojiAvatar';
import { useNavigationStore } from '../stores/navigationStore';

export default function Header() {
  const { setShowLogin } = useContext(LoginContext);
  const { user, isAuthenticated } = useAuthStore();
  const { toggle } = useNavigationStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-2 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Menu Button and Logo */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button 
              onClick={toggle}
              className="md:hidden p-2 hover:bg-violet-500/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="font-semibold text-xl whitespace-nowrap hover:opacity-80 transition-opacity">
              256 Circle
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard"
                  className="button-primary p-2"
                  title="Dashboard"
                >
                  <LayoutDashboard className="w-4 h-4" />
                </Link>
                <Link 
                  to="/messages"
                  className="button-primary p-2"
                  title="Messages"
                >
                  <MessageSquare className="w-4 h-4" />
                </Link>
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <EmojiAvatar name={user?.username || ''} size="md" />
                </Link>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="button-primary flex items-center gap-2 whitespace-nowrap"
              >
                <CircleUserRound className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}