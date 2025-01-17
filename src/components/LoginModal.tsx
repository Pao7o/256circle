import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import PasswordInput from './auth/PasswordInput';
import ForgotPasswordModal from './auth/ForgotPasswordModal';
import GoogleLoginButton from './auth/GoogleLoginButton';
import SignUpModal from './auth/SignUpModal';
import Modal from './common/Modal';
import { usePreventScroll } from '../hooks/usePreventScroll';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { signIn } = useAuthStore();

  // Prevent scrolling when modal is open
  usePreventScroll(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signIn(email, password);
      onClose();
    } catch (authError: any) {
      // Customized error messages in English
      const errorMessages: { [key: string]: string } = {
        'auth/invalid-credential': 'Incorrect login credentials. Please try again.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/too-many-requests': 'Too many login attempts. Please try again later.',
        'default': 'An error occurred. Please try again.'
      };

      const errorCode = authError.code || 'default';
      setError(errorMessages[errorCode] || errorMessages['default']);
      setIsLoading(false);
    }
  };

  const handleSwitchToSignUp = () => {
    setShowSignUp(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignUp(false);
  };

  if (showSignUp) {
    return (
      <SignUpModal
        isOpen={true}
        onClose={onClose}
        onSwitchToLogin={handleSwitchToLogin}
      />
    );
  }

  return (
    <>
      <Modal
        isOpen={true}
        onClose={onClose}
        title={
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text">Welcome Back</h3>
            <p className="text-gray-400 mt-2 text-sm">Great to see you again! Let's get you signed in.</p>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-rose-500 text-sm text-center bg-rose-500/10 py-2 rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30 border border-violet-500/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-violet-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                Forgot password?
              </button>
            </div>
            <PasswordInput
              value={password}
              onChange={setPassword}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full button-primary flex items-center justify-center gap-2 group py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              'Signing in...'
            ) : (
              <>
                Sign In
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <div className="text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={handleSwitchToSignUp}
              className="text-violet-400 hover:text-violet-300"
            >
              Sign up
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-[#1a1a1a]">Or</span>
            </div>
          </div>

          <GoogleLoginButton />
        </form>
      </Modal>

      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />
    </>
  );
}