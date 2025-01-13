import React from 'react';
import { Shield } from 'lucide-react';

interface EscrowOptionProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function EscrowOption({ value, onChange }: EscrowOptionProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="form-checkbox text-violet-500"
        />
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-violet-400" />
          <span className="font-medium">Use Escrow Service</span>
        </div>
      </label>
      <p className="text-sm text-gray-400 ml-8">
        Enable our escrow service to ensure secure and fair distribution of funds among team members.
        Recommended for teams who don't know each other well.
      </p>
    </div>
  );
}