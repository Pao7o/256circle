import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

const visionSteps = [
  {
    number: '01',
    title: 'Join the Circle',
    description: 'Create your profile and become part of an exclusive network of driven individuals.',
    delay: 200,
  },
  {
    number: '02',
    title: 'Discover Opportunities',
    description: 'Browse or create projects that align with your goals and expertise.',
    delay: 300,
  },
  {
    number: '03',
    title: 'Collaborate Effectively',
    description: 'Form partnerships with clear roles and profit-sharing agreements.',
    delay: 400,
  },
  {
    number: '04',
    title: 'Profit and Grow',
    description: 'Maximize success through strategic partnerships and fair profit distribution.',
    delay: 500,
  },
  {
    number: '05',
    title: 'Expand Your Network',
    description: 'Build your reputation and unlock new opportunities within the Circle.',
    delay: 600,
  },
];

export default function VisionCircle() {
  return (
    <div className="py-24 bg-[#1a1a1a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            The 256 Vision
          </h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {visionSteps.map((step, index) => (
            <AnimatedSection
              key={index}
              delay={step.delay}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="group relative flex items-start gap-6 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="gradient-text font-bold">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 gradient-text flex items-center gap-2">
                    {step.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
                
                {/* Connecting Line */}
                {index < visionSteps.length - 1 && (
                  <div className="absolute -bottom-8 left-6 w-0.5 h-8 bg-violet-500/20"></div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}