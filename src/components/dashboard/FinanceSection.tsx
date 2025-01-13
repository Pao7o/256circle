import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import { scrollToTop } from '../../utils/scrollUtils';

const transactions = [
  {
    id: 1,
    type: 'received',
    amount: 1250.00,
    from: 'Project Alpha',
    date: '2024-03-15'
  },
  {
    type: 'sent',
    amount: 450.00,
    to: 'Team Member',
    date: '2024-03-14'
  },
  {
    type: 'received',
    amount: 3200.00,
    from: 'Project Beta',
    date: '2024-03-12'
  }
];

export default function FinanceSection() {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <Link
          to="/finance/withdraw"
          onClick={scrollToTop}
          className="button-primary flex items-center gap-2"
        >
          <Wallet className="w-4 h-4" />
          Withdraw
        </Link>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${
                transaction.type === 'received' 
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-rose-500/10 text-rose-400'
              }`}>
                {transaction.type === 'received' 
                  ? <ArrowDownRight className="w-4 h-4" />
                  : <ArrowUpRight className="w-4 h-4" />
                }
              </div>
              <div>
                <h3 className="font-medium">
                  {transaction.type === 'received' ? transaction.from : transaction.to}
                </h3>
                <p className="text-sm text-gray-400">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className={`font-medium ${
              transaction.type === 'received'
                ? 'text-emerald-400'
                : 'text-rose-400'
            }`}>
              {transaction.type === 'received' ? '+' : '-'}
              {formatCurrency(transaction.amount)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link 
          to="/finance/available-balance"
          onClick={scrollToTop}
          className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-2"
        >
          See all transactions
        </Link>
      </div>
    </div>
  );
}