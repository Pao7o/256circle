import React from 'react';
import { 
  Network, 
  ShieldCheck, 
  DollarSign, 
  BarChart,
  Compass,
  Lock,
  Link as LinkIcon,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  link,
  delay
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  link: string,
  delay: number
}) => (
  <AnimatedSection delay={delay}>
    <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300 group">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-violet-600/10 rounded-full mr-4 group-hover:bg-violet-600/20 transition-colors">
          <Icon className="w-8 h-8 text-violet-500" />
        </div>
        <h3 className="text-xl font-bold gradient-text">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link to={link} 
        className="text-violet-400 hover:text-violet-300 flex items-center text-sm transition-colors">
        Learn More 
        <LinkIcon className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </AnimatedSection>
);

export default function ServiceHighlights() {
  const services = [
    {
      icon: Network,
      title: 'Skill Pooling',
      description: 'Connect with complementary experts to form high-performance teams for digital ventures.',
      link: '/services/skill-pooling',
      delay: 200
    },
    {
      icon: TrendingUp,
      title: 'Strategic Alignment',
      description: 'Optimize your project strategy and resource allocation for maximum impact',
      link: '/strategic-alignment',
      delay: 300
    },
    {
      icon: DollarSign,
      title: 'Profit Sharing',
      description: 'Flexible frameworks for teams to define fair and transparent revenue distribution models.',
      link: '/services/financial-optimization',
      delay: 400
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track, analyze, and optimize team performance with data-driven collaborative insights.',
      link: '/services/performance-analytics',
      delay: 500
    },
    {
      icon: Compass,
      title: 'Compass',
      description: 'Synchronize individual skills and goals to create cohesive, high-impact project teams.',
      link: '/services/strategic-alignment',
      delay: 600
    },
    {
      icon: Lock,
      title: 'Escrow Services',
      description: 'Optional financial protection where our platform securely manages project funds with transparent commission.',
      link: '/services/escrow',
      delay: 700
    }
  ];

  const scrollToServices = () => {
    // implement scroll to services logic here
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            Transforming Collaboration Through Strategic Services
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <button 
            onClick={scrollToServices}
            className="button-primary inline-flex items-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
