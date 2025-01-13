import React from 'react';
import { Shield } from 'lucide-react';

export default function EscrowBadge() {
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">
      <Shield className="w-3 h-3" />
      <span>Escrow Protected</span>
    </div>
  );
}