import React from 'react';
import { Users, Network, Target, Award, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
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

export default function SkillPooling() {
  const features = [
    {
      icon: Network,
      title: 'Advanced Talent Matching',
      description: 'Our sophisticated algorithm identifies and connects professionals with complementary skills, ensuring optimal team composition for digital ventures.'
    },
    {
      icon: Target,
      title: 'Precision Skill Alignment',
      description: 'Detailed skill profiling and project requirement analysis to create high-performance collaborative teams.'
    },
    {
      icon: Zap,
      title: 'Dynamic Team Formation',
      description: 'Rapid team assembly with real-time skill validation and compatibility scoring.'
    },
    {
      icon: Award,
      title: 'Performance-Based Collaboration',
      description: 'Transparent contribution tracking and merit-based recognition system.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Skill Pooling</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform individual talents into collective digital success through intelligent skill aggregation and strategic team formation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-4">How It Works</h2>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Users className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Profile Creation</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Network className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Skill Matching</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Target className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300">Team Formation</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
