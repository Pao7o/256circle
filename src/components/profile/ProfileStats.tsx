import React from 'react';
import { Star, CheckCircle, DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export default function ProfileStats() {
  const stats = [
    {
      label: 'Average Rating',
      value: '4.8',
      icon: Star,
      trend: '+0.3 this month',
      positive: true
    },
    {
      label: 'Completed Projects',
      value: '24',
      icon: CheckCircle,
      trend: '+3 this month',
      positive: true
    },
    {
      label: 'Total Earnings',
      value: formatCurrency(52495.50),
      icon: DollarSign,
      trend: '+12.5% this month',
      positive: true
    }
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
            <div className="bg-violet-500/10 p-2 rounded-lg">
              <stat.icon className="w-5 h-5 text-violet-400" />
            </div>
          </div>
          <p className={`text-sm mt-2 ${stat.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {stat.trend}
          </p>
        </div>
      ))}
    </div>
  );
}