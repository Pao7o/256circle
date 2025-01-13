import React from 'react';
import { LockKeyhole, FileCheck, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: LockKeyhole,
    title: 'Secure Agreement',
    description: 'Both parties agree to terms and conditions of the transaction.'
  },
  {
    icon: CreditCard,
    title: 'Payment Hold',
    description: 'Buyer sends payment to our secure escrow account.'
  },
  {
    icon: FileCheck,
    title: 'Verification',
    description: 'We verify the delivery or completion of the agreed terms.'
  },
  {
    icon: CheckCircle,
    title: 'Release',
    description: 'Once verified, payment is released to the seller.'
  }
];

export default function EscrowExplanation() {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-8">How It Works</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <step.icon className="w-5 h-5 text-violet-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}