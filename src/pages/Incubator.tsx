import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Rocket, ArrowRight } from 'lucide-react';
import ProcessExplanation from '../components/incubator/ProcessExplanation';
import ComparisonTable from '../components/incubator/ComparisonTable';
import SubmissionForm from '../components/incubator/SubmissionForm';
import Modal from '../components/common/Modal';

export default function Incubator() {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Transform Your Ideas into Success with 256 Circle Incubator
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Our incubator provides active support and unique resources to maximize your project's chances of success.
          </p>
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="button-primary flex items-center gap-2 mx-auto group text-lg px-8 py-3"
          >
            <Rocket className="w-5 h-5" />
            Start Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-16">
          <ProcessExplanation />
        </AnimatedSection>

        <AnimatedSection delay={400} className="mb-16">
          <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Understanding the Difference</h2>
            <ComparisonTable />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={600} className="text-center">
          <button
            onClick={() => setShowSubmissionForm(true)}
            className="button-primary flex items-center gap-2 mx-auto group text-lg px-8 py-3"
          >
            <Rocket className="w-5 h-5" />
            Start Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedSection>

        <Modal
          isOpen={showSubmissionForm}
          onClose={() => setShowSubmissionForm(false)}
          title="Submit Your Project"
          maxWidth="max-w-2xl"
        >
          <SubmissionForm />
        </Modal>
      </div>
    </div>
  );
}