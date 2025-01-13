import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import NetworkAnimation from './NetworkAnimation';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkAnimation />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <AnimatedSection delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            256 Circle
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Profit Together. Succeed Faster.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Connect with driven individuals determined to make profits online.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <button className="button-primary flex items-center gap-2 mx-auto">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
}