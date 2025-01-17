import React, { useContext } from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  ArrowRight, 
  CheckCircle, 
  Network, 
  Rocket, 
  Star, 
  TrendingUp 
} from 'lucide-react';
import { LoginContext } from '../App';

const visionSteps = [
  {
    number: '01',
    title: 'Strategic Onboarding',
    description: 'Comprehensive profile creation focusing on unique skills, digital expertise, and collaborative potential.',
    icon: Network,
    delay: 200,
  },
  {
    number: '02',
    title: 'Opportunity Discovery',
    description: 'Advanced matching algorithm connects you with projects that align precisely with your skills and ambitions.',
    icon: Star,
    delay: 300,
  },
  {
    number: '03',
    title: 'Collaborative Dynamics',
    description: 'Form high-performance teams with transparent roles, clear expectations, and intelligent profit-sharing mechanisms.',
    icon: Rocket,
    delay: 400,
  },
  {
    number: '04',
    title: 'Risk-Optimized Execution',
    description: 'Leverage collective intelligence and our risk management tools to navigate challenges and maximize project success.',
    icon: CheckCircle,
    delay: 500,
  },
  {
    number: '05',
    title: 'Continuous Growth',
    description: 'Build your digital reputation, expand your network, and unlock increasingly sophisticated collaboration opportunities.',
    icon: TrendingUp,
    delay: 600,
  },
];

export default function VisionCircle() {
  const { setShowLogin } = useContext(LoginContext);

  return (
    <div className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text tracking-tight">
            The 256 Collaborative Journey
          </h2>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {visionSteps.map((step, index) => (
            <AnimatedSection key={index} delay={step.delay}>
              <div className="flex items-center bg-[#1a1a1a] border border-violet-500/20 rounded-xl p-6 hover:border-violet-500/50 transition-all group">
                <div className="flex-shrink-0 mr-6">
                  <div className="p-4 bg-violet-600/10 rounded-full group-hover:bg-violet-600/20 transition-colors">
                    <step.icon className="w-8 h-8 text-violet-500" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-violet-500 mr-4">{step.number}</span>
                    <h3 className="text-xl font-semibold gradient-text">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}