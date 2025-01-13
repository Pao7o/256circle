import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
            © 2024 256 Circle. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              Legal Notice
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}