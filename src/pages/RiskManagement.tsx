import React from 'react';
import { 
  ShieldCheck, 
  BarChart, 
  AlertTriangle, 
  Compass, 
  TrendingUp 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const RiskCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
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

export default function RiskManagement() {
  const riskStrategies = [
    {
      icon: ShieldCheck,
      title: 'Predictive Risk Assessment',
      description: 'Advanced machine learning algorithms analyze project parameters to identify potential risks before they materialize.'
    },
    {
      icon: BarChart,
      title: 'Quantitative Risk Scoring',
      description: 'Comprehensive risk evaluation using multi-dimensional scoring across financial, operational, and strategic dimensions.'
    },
    {
      icon: AlertTriangle,
      title: 'Real-Time Risk Monitoring',
      description: 'Continuous project health tracking with instant alerts and proactive mitigation recommendations.'
    },
    {
      icon: Compass,
      title: 'Strategic Risk Navigation',
      description: 'Intelligent risk redistribution and mitigation strategies tailored to each project\'s unique ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Risk Management</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform uncertainty into strategic advantage through intelligent risk assessment, monitoring, and mitigation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {riskStrategies.map((strategy, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <RiskCard 
                icon={strategy.icon} 
                title={strategy.title} 
                description={strategy.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-4">Risk Management Workflow</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Compass className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Risk Identification</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <BarChart className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Risk Analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <TrendingUp className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Mitigation Strategy</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
