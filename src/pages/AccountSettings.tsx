import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SecuritySettings from '../components/settings/SecuritySettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import PreferenceSettings from '../components/settings/PreferenceSettings';
import PaymentSettings from '../components/settings/PaymentSettings';
import DeleteAccount from '../components/settings/DeleteAccount';

export default function AccountSettings() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <Link 
          to="/profile"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </Link>
        
        <h1 className="text-3xl font-bold gradient-text mb-8">Account Settings</h1>
        
        <div className="space-y-8">
          <SecuritySettings />
          <NotificationSettings />
          <PreferenceSettings />
          <PaymentSettings />
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
}