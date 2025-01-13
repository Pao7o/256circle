import React from 'react';
import { LucideIcon } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface BalanceCardProps {
  title: string;
  amount: number;
  icon: LucideIcon;
  trend: string;
  positive: boolean;
}

export default function BalanceCard({
  title,
  amount,
  icon: Icon,
  trend,
  positive
}: BalanceCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-white">
            {formatCurrency(amount)}
          </h3>
        </div>
        <div className="bg-violet-500/10 p-2 rounded-lg">
          <Icon className="w-5 h-5 text-violet-400" />
        </div>
      </div>
      <p className={`text-sm mt-2 ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>
        {trend}
      </p>
    </div>
  );
}