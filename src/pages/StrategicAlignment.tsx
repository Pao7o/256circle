import React from 'react';
import { 
  Compass, 
  Network, 
  Layers, 
  Rocket} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AlignmentCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
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

export default function StrategicAlignment() {
  const alignmentStrategies = [
    {
      icon: Compass,
      title: 'Vision Mapping',
      description: 'Comprehensive strategic planning that aligns individual aspirations with collective project objectives.'
    },
    {
      icon: Network,
      title: 'Collaborative Ecosystem Design',
      description: 'Creating interconnected frameworks that optimize communication, knowledge sharing, and collective intelligence.'
    },
    {
      icon: Layers,
      title: 'Multi-Level Strategy Integration',
      description: 'Harmonizing micro-level tactics with macro-level strategic goals across diverse digital ventures.'
    },
    {
      icon: Rocket,
      title: 'Adaptive Strategy Execution',
      description: 'Dynamic strategy implementation with real-time adjustment capabilities to navigate complex digital landscapes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Strategic Alignment</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Synchronize individual talents, project objectives, and organizational vision into a cohesive, high-performance ecosystem.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {alignmentStrategies.map((strategy, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <AlignmentCard 
                icon={strategy.icon} 
                title={strategy.title} 
                description={strategy.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-4">Strategic Alignment Process</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Compass className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Vision Definition</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Network className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Strategy Design</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Rocket className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Execution</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
