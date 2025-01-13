import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Clock } from 'lucide-react';

export default function Forum() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">Community Forum</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the discussion and connect with other members
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8">
              <Clock className="w-16 h-16 text-violet-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-400">
                Our community forum is currently under development. We're working hard to create 
                a space where members can share knowledge, discuss strategies, and build valuable connections.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}