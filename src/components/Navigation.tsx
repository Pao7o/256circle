import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Home, Briefcase, Wrench, Rocket, MessageSquare } from 'lucide-react';
import { useNavigationStore } from '../stores/navigationStore';

const navItems = [
  {
    label: 'Home',
    href: '/',
    description: 'Return to homepage with an overview of the site and features',
    icon: Home
  },
  {
    label: 'Projects',
    href: '/projects',
    description: 'Access ongoing projects, discover opportunities and collaborative ideas',
    icon: Briefcase
  },
  {
    label: 'Services',
    href: '/services',
    description: 'Explore our range of professional services and solutions',
    icon: Wrench
  },
  {
    label: 'Incubator',
    href: '/incubator',
    description: 'Join our startup incubator program and accelerate your growth',
    icon: Rocket
  },
  {
    label: 'Forum',
    href: '/forum',
    description: 'Connect with the community and share knowledge',
    icon: MessageSquare
  }
];

export default function Navigation() {
  const { isOpen, close } = useNavigationStore();
  const location = useLocation();

  return (
    <>
      {/* Desktop and Tablet Navigation */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {navItems.map((item) => (
          <div key={item.label} className="group relative">
            <Link
              to={item.href}
              className={`nav-link py-2 inline-flex items-center gap-2 text-xs lg:text-sm ${
                location.pathname === item.href ? 'text-violet-400' : ''
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-violet-500" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 py-2 px-4 bg-black/90 backdrop-blur-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-xs text-gray-400">
              {item.description}
            </div>
          </div>
        ))}
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#0f0f0f] transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-50`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative flex flex-col h-full bg-[#0f0f0f]/80 backdrop-blur-xl">
          {/* Header */}
          <div className="flex justify-end p-6">
            <button
              onClick={close}
              className="text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-8 p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={close}
                className={`text-2xl font-medium hover:text-white hover:scale-110 transition-all flex items-center gap-3 ${
                  location.pathname === item.href ? 'text-violet-400' : 'text-gray-300'
                }`}
              >
                <item.icon className="w-6 h-6" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}