import React from 'react';
import { Clock } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface Withdrawal {
  id: string;
  amount: number;
  method: string;
  status: 'completed' | 'processing' | 'failed';
  date: string;
}

export default function WithdrawalHistory() {
  const withdrawals: Withdrawal[] = [
    {
      id: '1',
      amount: 1000.00,
      method: 'Bank Transfer',
      status: 'completed',
      date: '2024-03-10'
    },
    {
      id: '2',
      amount: 500.00,
      method: 'PayPal',
      status: 'processing',
      date: '2024-03-15'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-emerald-400';
      case 'processing': return 'text-amber-400';
      case 'failed': return 'text-rose-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Withdrawals</h2>
      <div className="space-y-4">
        {withdrawals.map((withdrawal) => (
          <div
            key={withdrawal.id}
            className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
          >
            <div>
              <p className="font-medium">{formatCurrency(withdrawal.amount)}</p>
              <p className="text-sm text-gray-400">{withdrawal.method}</p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">
                  {new Date(withdrawal.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <span className={`capitalize ${getStatusColor(withdrawal.status)}`}>
              {withdrawal.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}