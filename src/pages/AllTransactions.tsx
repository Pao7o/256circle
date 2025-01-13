import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Download, Filter } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import BackToDashboard from '../components/common/BackToDashboard';

const transactions = [
  {
    id: 1,
    type: 'received',
    amount: 1250.00,
    from: 'Project Alpha',
    date: '2024-03-15',
    status: 'completed',
    description: 'Milestone payment'
  },
  // ... ajoutez plus de transactions
];

export default function AllTransactions() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Transactions</h1>
            <p className="text-gray-400 mt-2">View and manage your financial activity</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="button-primary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="button-primary flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
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
                  <p className="text-sm text-gray-400">{transaction.description}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'received'
                    ? 'text-emerald-400'
                    : 'text-rose-400'
                }`}>
                  {transaction.type === 'received' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </p>
                <p className="text-sm text-gray-400 capitalize">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}