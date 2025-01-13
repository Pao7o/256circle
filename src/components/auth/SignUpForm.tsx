import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Mail, User, ArrowRight } from 'lucide-react';
import PasswordInput from './PasswordInput';
import { validatePassword } from '../../utils/passwordUtils';
import SuccessModal from './SuccessModal';

interface SignUpFormProps {
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

export default function SignUpForm({ onSuccess, onSwitchToLogin }: SignUpFormProps) {
  const { signUp } = useAuthStore();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.username.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { isValid, error: passwordError } = validatePassword(formData.password);
    if (!isValid) {
      setError(passwordError);
      return;
    }

    if (formData.username.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      setError('Username can only contain letters, numbers, and underscores');
      return;
    }

    setIsLoading(true);
    
    try {
      const { error: signUpError } = await signUp(
        formData.email,
        formData.password,
        formData.username
      );
      
      if (signUpError) {
        throw signUpError;
      }

      setShowSuccess(true);
      
    } catch (err: any) {
      setError(err.message || 'An error occurred during signup');
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onSuccess();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="text-rose-500 text-sm text-center bg-rose-500/10 py-2 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              disabled={isLoading}
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase() })}
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-violet-500 disabled:opacity-50"
              placeholder="Choose a username"
              pattern="[a-zA-Z0-9_]+"
              title="Username can only contain letters, numbers, and underscores"
              minLength={3}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              disabled={isLoading}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/30 border border-violet-500/20 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-violet-500 disabled:opacity-50"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
          <PasswordInput
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })}
            placeholder="Create a password"
          />
          <ul className="text-xs text-gray-400 mt-2 space-y-1 list-disc pl-4">
            <li>At least 7 characters long</li>
            <li>One uppercase letter</li>
            <li>One lowercase letter</li>
            <li>One number</li>
            <li>One special character (!@#$%^&*)</li>
          </ul>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Confirm Password</label>
          <PasswordInput
            value={formData.confirmPassword}
            onChange={(value) => setFormData({ ...formData, confirmPassword: value })}
            placeholder="Confirm your password"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full button-primary flex items-center justify-center gap-2 group py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </span>
          ) : (
            <>
              Create Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            disabled={isLoading}
            className="text-violet-400 hover:text-violet-300 disabled:opacity-50"
          >
            Log in
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        email={formData.email}
      />
    </>
  );
}