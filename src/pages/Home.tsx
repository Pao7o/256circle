import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Globe, 
  Users, 
  Search, 
  ArrowRight 
} from 'lucide-react';
import Hero from '../components/Hero';
import VisionCircle from '../components/VisionCircle';
import ValueProposition from '../components/ValueProposition';
import ServiceHighlights from '../components/ServiceHighlights';
import { LoginContext } from '../App';

export default function Home() {
  const exploreServicesRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const { setShowLogin } = useContext(LoginContext);

  const mainFeatures = [
    {
      icon: Rocket,
      title: "Projects",
      description: "Discover and collaborate on innovative projects across various domains",
      link: "/projects",
      color: "bg-violet-600/10 text-violet-500"
    },
    {
      icon: Globe,
      title: "Ecosystem",
      description: "Explore our comprehensive ecosystem of digital solutions and services",
      link: "/ecosystem",
      color: "bg-green-600/10 text-green-500"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Find and connect with potential partners and collaborators",
      link: "/connect",
      color: "bg-blue-600/10 text-blue-500"
    },
    {
      icon: Search,
      title: "Skill Pooling",
      description: "Match your skills with exciting opportunities and projects",
      link: "/skill-pooling",
      color: "bg-orange-600/10 text-orange-500"
    }
  ];

  const scrollToServices = () => {
    exploreServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJourney = () => {
    journeyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onExploreServicesClick={scrollToServices} />
      <ServiceHighlights />
      
      {/* Explore Services Section */}
      <div ref={exploreServicesRef} className="bg-[#0a0a0a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Explore Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive range of services we offer to support your digital journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Link 
                to={feature.link} 
                key={index}
                className="block bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl 
                           hover:border-violet-500/50 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-4 ${feature.color} rounded-full mr-4 
                                   group-hover:opacity-80 transition-opacity`}>
                    {React.createElement(feature.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center text-violet-400 
                                group-hover:text-violet-300 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div ref={journeyRef}>
        <VisionCircle />
      </div>
      <ValueProposition />
    </>
  );
}