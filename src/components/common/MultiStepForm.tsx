import React, { useState, ReactNode, useCallback } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import toast from 'react-hot-toast';

interface StepProps {
  children: ReactNode;
  isActive: boolean;
}

const Step: React.FC<StepProps> = ({ children, isActive }) => {
  return (
    <div 
      style={{ 
        display: isActive ? 'block' : 'none',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

interface MultiStepFormProps {
  steps: ReactNode[];
  onSubmit: (formData: any) => void;
  onClose: () => void;
  formTitle?: string;
  validationFns?: ((data: any) => boolean)[];
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ 
  steps, 
  onSubmit, 
  onClose,
  formTitle = 'Multi-Step Form',
  validationFns = [] 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [wasNextClicked, setWasNextClicked] = useState(false);

  const updateFormData = useCallback((newData: any) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Réinitialiser wasNextClicked quand les données changent
    setWasNextClicked(false);
  }, []);

  const nextStep = () => {
    // Marquer que le bouton Next a été cliqué
    setWasNextClicked(true);

    // Validation de l'étape courante
    if (validationFns[currentStep] && !validationFns[currentStep](formData)) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      // Réinitialiser wasNextClicked pour la nouvelle étape
      setWasNextClicked(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      // Réinitialiser wasNextClicked
      setWasNextClicked(false);
    }
  };

  const handleSubmit = () => {
    // Marquer que le bouton Next a été cliqué
    setWasNextClicked(true);

    // Validation finale
    if (validationFns[currentStep] && !validationFns[currentStep](formData)) {
      return;
    }
    onSubmit(formData);
  };

  // Vérification de la possibilité de passer à l'étape suivante
  const canProceed = () => {
    // Si Next n'a pas été cliqué, ne pas montrer d'erreur
    if (!wasNextClicked) return true;

    // Validation de l'étape courante
    return !validationFns[currentStep] || validationFns[currentStep](formData);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#1e1e1e] rounded-2xl border border-violet-500/20 w-full max-w-2xl mx-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Titre */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center gradient-text">
          {formTitle}
        </h2>

        {/* Contenu du formulaire */}
        <div className="relative w-full min-h-[400px]">
          {steps.map((step, index) => (
            <Step 
              key={index} 
              isActive={currentStep === index}
            >
              {React.cloneElement(step as React.ReactElement, { 
                formData, 
                updateFormData 
              })}
            </Step>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="button-secondary flex items-center gap-2"
            >
              <ChevronLeft /> Previous
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`button-primary ml-auto flex items-center gap-2 ${
                !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next <ChevronRight />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`button-primary ml-auto flex items-center gap-2 ${
                !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Submit <Check />
            </button>
          )}
        </div>

        {/* Indicateur de progression */}
        <div className="flex justify-center mt-6 space-x-2">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep === index 
                  ? 'bg-violet-500' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
