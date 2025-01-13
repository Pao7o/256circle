import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import SettingsCard from './SettingsCard';

export default function PaymentSettings() {
  return (
    <SettingsCard title="Payment Methods" icon={CreditCard}>
      <div className="space-y-4">
        <div className="p-4 bg-black/20 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-violet-400" />
            <div>
              <p className="font-medium">•••• 4242</p>
              <p className="text-sm text-gray-400">Expires 12/24</p>
            </div>
          </div>
          <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">
            Default
          </span>
        </div>

        <button className="w-full button-primary flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add Payment Method
        </button>
      </div>
    </SettingsCard>
  );
}