import React from 'react';
import { 
  Rocket, 
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const ecosystemServices = [
  {
    icon: Lock,
    title: 'Escrow Services',
    description: 'Secure transaction management with transparent fund protection',
    link: '/services/escrow'
  },
  {
    icon: Rocket,
    title: 'Incubator',
    description: 'Strategic support for emerging digital entrepreneurs',
    link: '/incubator'
  }
];

export default function Ecosystem() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">256 Circle Ecosystem</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to support your digital venture
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {ecosystemServices.map((service, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <Link 
                to={service.link}
                className="block bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl hover:border-violet-500/50 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-violet-600/10 rounded-full mr-4 group-hover:bg-violet-600/20 transition-colors">
                    <service.icon className="w-8 h-8 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-violet-400 hover:text-violet-300 flex items-center text-sm transition-colors">
                  Learn More
                  <service.icon className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
