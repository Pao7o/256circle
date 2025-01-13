import React from 'react';
import { Settings, Bell, Shield, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate, Link } from 'react-router-dom';

export default function ProfileSettings() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <div className="space-y-2">
        <Link 
          to="/settings"
          className="w-full p-3 text-left hover:bg-violet-500/10 rounded-lg transition-colors flex items-center gap-3"
        >
          <Settings className="w-5 h-5 text-violet-400" />
          <span>Account Settings</span>
        </Link>
        
        <button className="w-full p-3 text-left hover:bg-violet-500/10 rounded-lg transition-colors flex items-center gap-3">
          <Bell className="w-5 h-5 text-violet-400" />
          <span>Notifications</span>
        </button>
        
        <button className="w-full p-3 text-left hover:bg-violet-500/10 rounded-lg transition-colors flex items-center gap-3">
          <Shield className="w-5 h-5 text-violet-400" />
          <span>Privacy & Security</span>
        </button>
        
        <button 
          onClick={handleLogout}
          className="w-full p-3 text-left hover:bg-rose-500/10 text-rose-400 rounded-lg transition-colors flex items-center gap-3"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}