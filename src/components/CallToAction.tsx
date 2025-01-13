import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-violet-600/20"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to level up?</h2>
        <p className="text-xl text-gray-300 mb-12">Request access or register now</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-2 justify-center">
            Request Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-violet-500 hover:bg-violet-500/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}