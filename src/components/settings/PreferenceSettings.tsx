import React, { useEffect } from 'react';
import { Settings } from 'lucide-react';
import SettingsCard from './SettingsCard';
import { useCurrencyStore } from '../../stores/currencyStore';

export default function PreferenceSettings() {
  const { currency, setCurrency } = useCurrencyStore();
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SettingsCard title="Preferences" icon={Settings}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Time Zone
          </label>
          <select 
            defaultValue={userTimezone}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          >
            <option value={userTimezone}>Automatic ({userTimezone})</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">Eastern Time</option>
            <option value="America/Los_Angeles">Pacific Time</option>
            <option value="Europe/London">London</option>
            <option value="Europe/Paris">Paris</option>
            <option value="Asia/Tokyo">Tokyo</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Currency
          </label>
          <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>
    </SettingsCard>
  );
}