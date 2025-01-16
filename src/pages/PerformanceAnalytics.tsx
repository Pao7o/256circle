import React from 'react';
import { 
  BarChart2, 
  Target, 
  Clock, 
  Cpu, 
  Zap 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AnalyticsCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
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

export default function PerformanceAnalytics() {
  const analyticsFeatures = [
    {
      icon: BarChart2,
      title: 'Comprehensive Performance Metrics',
      description: 'Advanced data visualization and KPI tracking across multiple dimensions of project and team performance.'
    },
    {
      icon: Target,
      title: 'Precision Goal Alignment',
      description: 'Real-time progress tracking against predefined objectives with granular insight generation.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that predict performance trends and suggest optimization strategies.'
    },
    {
      icon: Zap,
      title: 'Dynamic Performance Benchmarking',
      description: 'Intelligent comparison tools that contextualize performance against industry standards and historical data.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Performance Analytics</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform raw data into actionable intelligence, driving continuous improvement and strategic decision-making.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {analyticsFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <AnalyticsCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-4">Analytics Workflow</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Clock className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Data Collection</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <BarChart2 className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Target className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Optimization</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
