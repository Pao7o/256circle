import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Lock, 
  Globe, 
  Award 
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: ShieldCheck,
    title: 'Unparalleled Security',
    description: 'Advanced verification protocols and blockchain-powered transaction security. Protect your digital ventures with military-grade safeguards.',
    delay: 200,
  },
  {
    icon: Users,
    title: 'Elite Community',
    description: 'Curated network of top-tier digital entrepreneurs. Connect with vetted professionals who are committed to collective success.',
    delay: 400,
  },
  {
    icon: TrendingUp,
    title: 'Strategic Optimization',
    description: 'Data-driven insights and performance analytics. Transform collaboration into a precise, measurable science of success.',
    delay: 600,
  },
  {
    icon: Lock,
    title: 'Risk Intelligence',
    description: 'Comprehensive risk assessment tools and predictive modeling. Navigate digital ventures with confidence and strategic foresight.',
    delay: 250,
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Break geographical barriers. Access international projects and collaborate with talent from around the world.',
    delay: 450,
  },
  {
    icon: Award,
    title: 'Reputation Ecosystem',
    description: 'Transparent performance tracking and reputation scoring. Build your digital credibility with every successful collaboration.',
    delay: 650,
  }
];

export default function ValueProposition() {
  return (
    <div className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text tracking-tight">
            Why Choose 256 Circle
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={feature.delay}>
              <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl hover:border-violet-500/50 transition-all group">
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-violet-600/10 rounded-full mr-4 group-hover:bg-violet-600/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/about" 
            className="button-primary inline-flex items-center gap-2"
          >
            Discover More Benefits
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}