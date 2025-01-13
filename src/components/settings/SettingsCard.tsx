import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SettingsCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: 'default' | 'danger';
}

export default function SettingsCard({ title, icon: Icon, children, variant = 'default' }: SettingsCardProps) {
  return (
    <div className={`bg-black/30 backdrop-blur-sm border rounded-xl p-6 ${
      variant === 'danger' ? 'border-rose-500/20' : 'border-violet-500/20'
    }`}>
      <div className="flex items-center gap-2 mb-6">
        <Icon className={`w-5 h-5 ${
          variant === 'danger' ? 'text-rose-400' : 'text-violet-400'
        }`} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}