import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { useNavigationStore } from '../stores/navigationStore';

const navItems = [
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Ecosystem',
    href: '/ecosystem'
  },
  {
    label: 'Community',
    href: '/forum'
  },
  {
    label: 'Collaborate',
    href: '/connect'
  }
];

export default function MobileMenu() {
  const { isOpen, close } = useNavigationStore();
  const location = useLocation();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[99999] flex flex-col justify-start items-start" 
      style={{ animation: 'slideIn 0.3s ease-out' }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="flex items-center p-6 w-full">
        <button
          onClick={close}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
        <Link to="/" onClick={close} className="text-2xl font-bold text-violet-400 mx-auto" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          256 Circle
        </Link>
      </div>

      <nav className="flex-1 flex flex-col items-start gap-8 p-4">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={close}
            className={`text-2xl font-medium hover:text-white hover:scale-110 transition-all ${
              location.pathname === item.href ? 'text-violet-400' : 'text-gray-300'
            }`}
            style={{
              animation: `slideIn 0.3s ease-out forwards ${index * 0.1}s`
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
