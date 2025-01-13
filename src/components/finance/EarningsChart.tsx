import React from 'react';
import { formatCurrency } from '../../utils/formatters';

export default function EarningsChart() {
  const earnings = {
    weekly: 1250.00,
    monthly: 5249.50,
    previousWeek: 1100.00,
    previousMonth: 4800.00
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Earnings Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">This Week</p>
          <p className="text-2xl font-bold">{formatCurrency(earnings.weekly)}</p>
          <p className="text-sm text-emerald-400">
            +{(((earnings.weekly - earnings.previousWeek) / earnings.previousWeek) * 100).toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">This Month</p>
          <p className="text-2xl font-bold">{formatCurrency(earnings.monthly)}</p>
          <p className="text-sm text-emerald-400">
            +{(((earnings.monthly - earnings.previousMonth) / earnings.previousMonth) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}