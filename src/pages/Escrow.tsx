import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle,
  Users
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/common/Modal';
import EscrowRequestForm from '../components/services/EscrowRequestForm';

const riskScenarios = [
  {
    icon: AlertTriangle,
    title: 'Unilateral Fund Withdrawal',
    description: 'Preventing unauthorized or premature fund releases',
    solution: 'Platform-controlled fund management with strict release conditions'
  },
  {
    icon: ShieldCheck,
    title: 'Transaction Protection',
    description: 'Safeguarding both parties in collaborative projects',
    solution: 'Verified milestone-based fund distribution'
  }
];

export default function Escrow() {
  const [showRequestForm, setShowRequestForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold gradient-text mb-4">Escrow Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure transaction management with transparent fund protection and fair commission
            </p>
            <div className="mt-8">
              <button 
                onClick={() => setShowRequestForm(true)}
                className="button-primary flex items-center gap-2 mx-auto"
              >
                Request Escrow Service
                <Lock className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection delay={200}>
            <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="p-4 bg-violet-600/10 rounded-full mr-4">
                  <Lock className="w-8 h-8 text-violet-500" />
                </div>
                <h3 className="text-xl font-bold gradient-text">Platform-Controlled Fund Management</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Direct platform management of project funds with secure, conditional release mechanisms
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-[#1a1a1a] border border-violet-500/20 p-6 rounded-xl h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">Transaction Protection Mechanisms</h3>
              <div className="space-y-4">
                {riskScenarios.map((scenario, index) => (
                  <div key={index} className="bg-black/30 p-4 rounded-lg flex items-center">
                    <div className="mr-4">
                      <scenario.icon className="text-violet-500 w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">{scenario.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{scenario.description}</p>
                      <div className="text-green-400 text-sm">
                        Solution: {scenario.solution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={500} className="text-center mb-16">
          <div className="bg-[#1a1a1a] border border-violet-500/20 p-8 rounded-xl">
            <h2 className="text-3xl font-bold gradient-text mb-6">How Escrow Works</h2>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <Users className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300 font-semibold">Project Agreement</p>
                <p className="text-gray-500 text-sm">Define project terms and milestones</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <DollarSign className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300 font-semibold">Revenue Generation</p>
                <p className="text-gray-500 text-sm">Project generates collective revenue</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-500/10 rounded-full p-4 inline-block mb-2">
                  <CheckCircle className="w-8 h-8 text-violet-500" />
                </div>
                <p className="text-gray-300 font-semibold">Revenue Distribution</p>
                <p className="text-gray-500 text-sm">Funds distributed as initially agreed</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center space-x-4">
          <button 
            onClick={() => setShowRequestForm(true)}
            className="button-primary flex items-center gap-2 mx-auto"
          >
            Request Escrow Service
            <Lock className="w-5 h-5" />
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
