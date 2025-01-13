import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import EscrowService from '../components/services/EscrowService';
import { Info } from 'lucide-react';
import Modal from '../components/common/Modal';
import EscrowRequestForm from '../components/services/EscrowRequestForm';

export default function Services() {
  const [showRequestForm, setShowRequestForm] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-8">
          <h1 className="text-5xl font-bold gradient-text mb-6">Escrow Service</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Secure transactions with our trusted escrow service. Protect both buyers and sellers.
          </p>
        </AnimatedSection>

        <div className="flex items-center justify-center gap-2 mb-16">
          <button 
            onClick={() => setShowRequestForm(true)}
            className="button-primary flex items-center gap-2"
          >
            Request Non-Project Transaction
          </button>
          <div className="group relative">
            <Info className="w-5 h-5 text-gray-400 hover:text-white cursor-help" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-black/90 rounded-lg text-sm text-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              The escrow service for projects is available in the project creation form, in the projects page
            </div>
          </div>
        </div>

        <EscrowService />

        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setShowRequestForm(true)}
            className="button-primary flex items-center gap-2"
          >
            Request Non-Project Transaction
          </button>
        </div>

        <Modal
          isOpen={showRequestForm}
          onClose={() => setShowRequestForm(false)}
          title="Request Escrow Service"
          maxWidth="max-w-2xl"
        >
          <EscrowRequestForm onClose={() => setShowRequestForm(false)} />
        </Modal>
      </div>
    </div>
  );
}