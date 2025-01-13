import React from 'react';
import { Wallet, FolderGit2, Bell, Star } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollUtils';

const stats = [
  {
    label: 'Available Balance',
    value: formatCurrency(5249.50),
    icon: Wallet,
    trend: '+12.5%',
    positive: true,
    link: '/finance/available-balance'
  },
  {
    label: 'Active Projects',
    value: '8',
    icon: FolderGit2,
    trend: '+2 this month',
    positive: true,
    link: '/active-projects'
  },
  {
    label: 'Average Rating',
    value: '4.8',
    icon: Star,
    trend: '+0.3',
    positive: true,
    link: '/reviews'
  },
  {
    label: 'Pending Actions',
    value: '3',
    icon: Bell,
    trend: '2 urgent',
    positive: false,
    link: '/pending-actions'
  }
];

export default function DashboardOverview() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Link
          key={index}
          to={stat.link}
          onClick={scrollToTop}
          className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/40 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1 text-white">{stat.value}</h3>
            </div>
            <div className="bg-violet-500/10 p-2 rounded-lg">
              <stat.icon className="w-5 h-5 text-violet-400" />
            </div>
          </div>
          <p className={`text-sm mt-2 ${stat.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {stat.trend}
          </p>
        </Link>
      ))}
    </div>
  );
}