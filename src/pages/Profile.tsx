import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileSkills from '../components/profile/ProfileSkills';
import ProfileActivity from '../components/profile/ProfileActivity';
import ProfileSettings from '../components/profile/ProfileSettings';

export default function Profile() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ProfileHeader />
            <ProfileStats />
            <ProfileActivity />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ProfileSkills />
            <ProfileSettings />
          </div>
        </div>
      </div>
    </div>
  );
}