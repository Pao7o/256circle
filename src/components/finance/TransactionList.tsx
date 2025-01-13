import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';

// ... rest of imports and interfaces

export default function TransactionList() {
  const transactions = [/* ... */];

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <Link
          to="/finance/withdraw"
          className="button-primary flex items-center gap-2"
        >
          <Wallet className="w-4 h-4" />
          Withdraw
        </Link>
      </div>
      
      <div className="space-y-4">
        {/* ... existing transaction list code ... */}
      </div>
    </div>
  );
}