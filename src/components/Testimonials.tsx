import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "I tripled my e-commerce revenue within 6 months of joining the circle. The strategies here are pure gold.",
    author: "Anonymous Member",
    delay: 200,
  },
  {
    quote: "The connections I've made here have been invaluable. This is where real deals happen.",
    author: "Verified Member",
    delay: 400,
  },
  {
    quote: "256 Circle opened doors I didn't even know existed in the digital space.",
    author: "Elite Member",
    delay: 600,
  },
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">What Members Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index}
              delay={testimonial.delay}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="hover-glow p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-violet-500/10 h-full">
                <p className="text-gray-300 mb-6 text-lg">"{testimonial.quote}"</p>
                <p className="gradient-text font-semibold">{testimonial.author}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}