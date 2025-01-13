import React, { useState } from 'react';
import Modal from '../common/Modal';
import EmailVerificationStep from './EmailVerificationStep';
import ProfileStep from './ProfileStep';
import SkillsStep from './SkillsStep';
import InterestsStep from './InterestsStep';
import { useAuthStore } from '../../stores/authStore';

interface OnboardingModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
}

type Step = 'email' | 'profile' | 'skills' | 'interests';

export default function OnboardingModal({ isOpen, email, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>('email');
  const { user } = useAuthStore();
  const [profileData, setProfileData] = useState<any>({});

  const handleProfileComplete = async (allData: any) => {
    if (!user) return;

    try {
      // Here you would typically save the profile data to your backend
      console.log('Profile data saved:', {
        userId: user.id,
        ...profileData,
        ...allData,
        onboardingCompleted: true
      });
      
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'email':
        return (
          <EmailVerificationStep
            email={email}
            onNext={() => setCurrentStep('profile')}
          />
        );
      case 'profile':
        return (
          <ProfileStep
            onNext={(data) => {
              setProfileData(prev => ({ ...prev, ...data }));
              setCurrentStep('skills');
            }}
            onBack={() => setCurrentStep('email')}
          />
        );
      case 'skills':
        return (
          <SkillsStep
            onNext={(skills) => {
              setProfileData(prev => ({ ...prev, skills }));
              setCurrentStep('interests');
            }}
            onBack={() => setCurrentStep('profile')}
          />
        );
      case 'interests':
        return (
          <InterestsStep
            onNext={(interests) => {
              handleProfileComplete({ ...profileData, interests });
            }}
            onBack={() => setCurrentStep('skills')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === (['email', 'profile', 'skills', 'interests'].indexOf(currentStep))
                  ? 'bg-violet-500'
                  : 'bg-violet-500/20'
              }`}
            />
          ))}
        </div>
      }
    >
      {renderStep()}
    </Modal>
  );
}