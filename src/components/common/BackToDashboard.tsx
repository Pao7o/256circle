import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackToDashboard() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard', { state: { scrollToSection: window.location.pathname.split('/')[1] } });
  };

  return (
    <button 
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back to Dashboard</span>
    </button>
  );
}