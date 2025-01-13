import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Shield,
    title: 'Security & Trust',
    description: 'Verified members and secure transactions in a trusted environment',
    delay: 200,
  },
  {
    icon: Zap,
    title: 'Exclusive Strategies',
    description: 'Access proven methods and hidden opportunities',
    delay: 400,
  },
  {
    icon: Users,
    title: 'Elite Community',
    description: 'Connect with successful digital entrepreneurs',
    delay: 600,
  },
];

export default function ValueProposition() {
  return (
    <div className="py-24 bg-[#0f0f0f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Why Join Us</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              delay={feature.delay}
              className="group"
            >
              <div className="text-center p-8 rounded-2xl hover:bg-black/30 transition-all duration-500 border border-violet-500/10 hover:border-violet-500/30">
                <div className="inline-block p-4 rounded-full bg-violet-600/10 mb-6 group-hover:bg-violet-600/20 transition-colors duration-300 transform group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-violet-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}