import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Target, Shield, Users, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To create a trusted environment where digital entrepreneurs can collaborate, innovate, and prosper together.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    icon: Shield,
    title: 'Our Values',
    description: 'We prioritize trust, transparency, and mutual success in all our partnerships and ventures.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80'
  },
  {
    icon: Users,
    title: 'Our Community',
    description: 'A carefully curated network of experienced professionals, innovators, and industry leaders.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80'
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our mission, values, and the community that makes 256 Circle unique.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              delay={200 * (index + 1)}
              className="group"
            >
              <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <value.icon className="w-8 h-8 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                  <button className="mt-6 w-full button-primary flex items-center justify-center gap-2 group/btn">
                    Learn More
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