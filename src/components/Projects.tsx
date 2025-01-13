import React from 'react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Project X',
    description: 'Six-figure affiliate business blueprint',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    delay: 200,
  },
  {
    title: 'Project Y',
    description: 'Community-built SaaS strategies',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    delay: 400,
  },
];

export default function Projects() {
  return (
    <div className="py-24 bg-[#0f0f0f] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Success Stories
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index}
              delay={project.delay}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="group relative overflow-hidden rounded-2xl aspect-video hover-glow"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 gradient-text">{project.title}</h3>
                  <p className="text-gray-300 text-lg">{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}