import React from 'react';
import { 
  DollarSign, 
  PieChart, 
  TrendingUp, 
  Layers, 
  RefreshCw 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const OptimizationCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl hover:border-violet-500/50 transition-all group">
    <div className="flex items-center mb-4">
      <div className="p-4 bg-violet-600/10 rounded-full mr-4 group-hover:bg-violet-600/20 transition-colors">
        <Icon className="w-8 h-8 text-violet-500" />
      </div>
      <h3 className="text-xl font-bold gradient-text">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function FinancialOptimization() {
  const optimizationStrategies = [
    {
      icon: DollarSign,
      title: 'Profit Sharing Mechanisms',
      description: 'Transparent collaboration models allowing teams to define custom revenue distribution rules before project initiation.',
    },
    {
      icon: PieChart,
      title: 'Collaborative Revenue Planning',
      description: 'Tools for teams to negotiate and establish fair profit-sharing agreements that align with each member\'s contributions.',
    },
    {
      icon: TrendingUp,
      title: 'Performance-Based Incentives',
      description: 'Flexible frameworks for teams to create merit-based reward structures that motivate and recognize individual achievements.',
    },
    {
      icon: Layers,
      title: 'Transparent Financial Tracking',
      description: 'Real-time financial dashboards enabling complete visibility of project revenues and distribution mechanisms.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Financial Optimization</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elevate collaborative ventures through intelligent financial strategies that maximize returns while ensuring equitable distribution.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {optimizationStrategies.map((strategy, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <OptimizationCard 
                icon={strategy.icon} 
                title={strategy.title} 
                description={strategy.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-4">Financial Optimization Cycle</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <DollarSign className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Capital Allocation</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <RefreshCw className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Performance Tracking</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <TrendingUp className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Profit Redistribution</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
