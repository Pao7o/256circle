import React, { useState, useContext } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { LoginContext } from '../App';
import PasswordInput from './auth/PasswordInput';
import ForgotPasswordModal from './auth/ForgotPasswordModal';
import GoogleLoginButton from './auth/GoogleLoginButton';
import SignUpModal from './auth/SignUpModal';

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { signIn } = useAuthStore();
  const { setShowLogin } = useContext(LoginContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signIn(email, password);
      onClose();
    } catch (authError: any) {
      setError(authError.message);
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
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80]" 
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div 
          className="bg-[#1a1a1a] rounded-xl border border-violet-500/20 p-8 w-full max-w-md shadow-xl shadow-violet-500/10 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text">Welcome Back</h3>
            <p className="text-gray-400 mt-2">Great to see you again! Let's get you signed in.</p>
          </div>

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
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
      />
    </>
  );
}