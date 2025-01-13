import React from 'react';
import { ClipboardCheck, Users, FileCheck, Rocket, Shield } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Application Review',
    description: 'After submitting your form, our platform will carefully evaluate your project. We take this step seriously as each incubated project represents our brand and values.'
  },
  {
    icon: Users,
    title: 'Initial Discussion',
    description: 'If your project is selected, we\'ll schedule a first contact to discuss potential contract terms, deadlines, and expectations.'
  },
  {
    icon: Shield,
    title: 'Secure Payment Setup',
    description: 'Team members can opt to use our escrow service to ensure fair profit distribution. While not mandatory, it\'s recommended for teams who don\'t know each other to guarantee secure and transparent payments.'
  },
  {
    icon: FileCheck,
    title: 'Team Assembly',
    description: 'Our platform will gather a team of skilled professionals specifically chosen to maximize your project\'s success potential.'
  },
  {
    icon: Rocket,
    title: 'Final Agreement',
    description: 'We\'ll present you with a finalized contract detailing all parties involved, their respective equity percentages, and payment terms through escrow if chosen.'
  }
];

export default function ProcessExplanation() {
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