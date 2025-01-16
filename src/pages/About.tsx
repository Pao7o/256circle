import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Target, 
  Shield, 
  Users, 
  Network, 
  Lock, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const visionDetails = [
  {
    icon: Network,
    title: 'Collaborative Ecosystem',
    description: 'We believe in the power of collective intelligence. Our platform transforms individual talents into high-performance digital ventures.',
  },
  {
    icon: Lock,
    title: 'Secure Collaboration',
    description: 'Advanced protection mechanisms ensure trust, transparency, and fair interactions between project collaborators.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    description: 'Our ecosystem is designed to continuously adapt, learn, and evolve, enabling digital entrepreneurs to stay ahead of market dynamics.',
  }
];

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
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">Our Vision</h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Reimagining digital collaboration through intelligent, secure, and transparent platforms that empower entrepreneurs worldwide.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionDetails.map((detail, index) => (
            <AnimatedSection 
              key={index} 
              delay={200 * (index + 1)}
              className="group"
            >
              <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl hover:border-violet-500/50 transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-violet-600/10 rounded-full mr-4 group-hover:bg-violet-600/20 transition-colors">
                    <detail.icon className="w-8 h-8 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{detail.title}</h3>
                </div>
                <p className="text-gray-300">{detail.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

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
                  <div className="flex items-center mb-2">
                    <value.icon className="mr-3 text-violet-500" />
                    <h3 className="text-xl font-bold gradient-text">{value.title}</h3>
                  </div>
                  <p className="text-gray-300">{value.description}</p>
                  <button className="mt-6 w-full button-primary flex items-center justify-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-16">
          <Link 
            to="/services" 
            className="button-primary inline-flex items-center gap-2"
          >
            Explore Our Services
            <TrendingUp className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}