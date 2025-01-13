import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import EscrowExplanation from './EscrowExplanation';
import EscrowRequestForm from './EscrowRequestForm';
import Modal from '../common/Modal';

export default function EscrowService() {
  const [showRequestForm, setShowRequestForm] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8">
        <AnimatedSection delay={200}>
          <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <Shield className="w-8 h-8 text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold">Secure Transactions</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Our escrow service can be used both on and off platform, providing:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  2.5% commission rate
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  In-depth transaction analysis
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  Secure payment holding
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                  Dispute resolution
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <EscrowExplanation />
        </AnimatedSection>
      </div>

      <Modal
        isOpen={showRequestForm}
        onClose={() => setShowRequestForm(false)}
        title="Request Escrow Service"
        maxWidth="max-w-2xl"
      >
        <EscrowRequestForm onClose={() => setShowRequestForm(false)} />
      </Modal>
    </>
  );
}