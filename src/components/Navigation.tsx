import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Layers, 
  Users, 
  NetworkIcon 
} from 'lucide-react';

const navItems = [
  {
    label: 'Home',
    href: '/',
    description: 'Your gateway to digital collaboration and innovation',
    icon: Home
  },
  {
    label: 'Projects',
    href: '/projects',
    description: 'Explore, join, and create transformative digital ventures',
    icon: Briefcase
  },
  {
    label: 'Ecosystem',
    href: '/ecosystem',
    description: 'Comprehensive solutions for startup growth and collaboration',
    icon: Layers
  },
  {
    label: 'Community',
    href: '/forum',
    description: 'Connect, learn, and share knowledge with like-minded innovators',
    icon: Users
  },
  {
    label: 'Collaborate',
    href: '/connect',
    description: 'Find partners, skills, and opportunities for your next big project',
    icon: NetworkIcon
  }
];

export default function Navigation() {
  const location = useLocation();

  return (
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
  );
}