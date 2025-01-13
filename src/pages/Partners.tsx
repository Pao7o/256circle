import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Shield, Users, Briefcase, ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Digital Ventures',
    type: 'Venture Capital',
    focus: 'E-commerce & SaaS',
    deals: 24,
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80'
  },
  {
    name: 'Tech Accelerator',
    type: 'Incubator',
    focus: 'Technology Startups',
    deals: 18,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  },
  {
    name: 'Growth Partners',
    type: 'Angel Investors',
    focus: 'Digital Marketing',
    deals: 32,
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80'
  }
];

export default function Partners() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">Our Partners</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with industry leaders and access exclusive opportunities through our network of trusted partners.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <AnimatedSection
              key={index}
              delay={200 * (index + 1)}
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{partner.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-violet-400" />
                      <span className="text-gray-300">{partner.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-violet-400" />
                      <span className="text-gray-300">{partner.focus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span className="text-gray-300">{partner.deals} successful deals</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full button-primary flex items-center justify-center gap-2 group/btn">
                    Connect
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}