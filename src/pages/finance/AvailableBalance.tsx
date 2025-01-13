import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import BackToDashboard from '../../components/common/BackToDashboard';

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

export default function AvailableBalance() {
  const totalBalance = transactions.reduce((acc, curr) => {
    return curr.type === 'received' ? acc + curr.amount : acc - curr.amount;
  }, 0);

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Available Balance</h1>
            <p className="text-gray-400 mt-2">View and manage your earnings</p>
          </div>
          <Link
            to="/finance/withdraw"
            className="button-primary flex items-center gap-2"
          >
            <Wallet className="w-4 h-4" />
            Withdraw
          </Link>
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-400">Total Available Balance</p>
          <h2 className="text-3xl font-bold mt-2">{formatCurrency(totalBalance)}</h2>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'received' 
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-rose-500/10 text-rose-400'
                }`}>
                  {transaction.type === 'received' 
                    ? <ArrowDownRight className="w-5 h-5" />
                    : <ArrowUpRight className="w-5 h-5" />
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
      </div>
    </div>
  );
}