import React from 'react';
import { KeyRound, Shield, Smartphone } from 'lucide-react';
import SettingsCard from './SettingsCard';

export default function SecuritySettings() {
  return (
    <SettingsCard title="Security" icon={Shield}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KeyRound className="w-5 h-5 text-violet-400" />
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-gray-400">Last changed 3 months ago</p>
            </div>
          </div>
          <button className="button-primary">Change</button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-violet-400" />
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-400">Add an extra layer of security</p>
            </div>
          </div>
          <button className="button-primary">Enable</button>
        </div>
      </div>
    </SettingsCard>
  );
}