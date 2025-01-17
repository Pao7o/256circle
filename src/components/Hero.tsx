import React from 'react';
import { ArrowRight, Globe, Lock, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import NetworkAnimation from './NetworkAnimation';

interface HeroProps {
  onExploreServicesClick?: () => void;
}

export default function Hero({ onExploreServicesClick }: HeroProps) {
  const heroFeatures = [
    { icon: Globe, text: 'Global Collaboration' },
    { icon: Lock, text: 'Secure Transactions' },
    { icon: TrendingUp, text: 'Optimized Profits' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <NetworkAnimation />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text tracking-tight">
            256 Circle
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            Collective Success, Minimized Risk
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            A collaborative platform where skilled individuals unite to transform digital opportunities into profitable ventures through strategic partnerships and intelligent risk management.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600} className="flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="flex items-center bg-[#1a1a1a] border border-violet-500/20 px-4 py-2 rounded-full">
                <feature.icon className="w-5 h-5 text-violet-500 mr-2" />
                <span className="text-gray-300 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={onExploreServicesClick} 
            className="button-primary flex items-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}