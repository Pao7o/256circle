import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help and ready to explore potential collaborations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection delay={200} direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg hover:border-violet-500/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-violet-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 gradient-text">Email Us</h3>
                  <p className="text-gray-400 text-sm">Our team will respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg hover:border-violet-500/50 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-violet-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 gradient-text">Live Chat</h3>
                  <p className="text-gray-400 text-sm">Available for members 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg hover:border-violet-500/50 transition-all duration-300">
                <MapPin className="w-6 h-6 text-violet-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 gradient-text">Location</h3>
                  <p className="text-gray-400 text-sm">Global presence, digital first</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} direction="right">
            <form className="space-y-6 bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-lg p-8">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                  placeholder="How can we help?"
                />
              </div>
              
              <button className="w-full button-primary flex items-center justify-center gap-2 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}