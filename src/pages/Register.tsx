import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { Chrome, Eye } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, loginWithGoogle } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Section - Only visible on desktop */}
      <div className="flex-1 relative overflow-hidden hidden lg:block">
        <div className="absolute inset-4">
          <div className="w-full h-full rounded-tr-[1.5rem] rounded-br-[1.5rem] overflow-hidden bg-gradient-to-b from-white to-white/50 relative">
            <AnimatedGradient
              colors={[
                'rgb(255, 71, 87)',
                'rgb(46, 213, 115)',
                'rgb(54, 174, 255)',
                'rgb(255, 199, 0)'
              ]}
              speed={8}
              blur="medium"
            />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)'
              }}
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-2xl mx-auto px-8">
          <div className="mb-20">
            <span className="text-[28px] text-gray-900 tracking-[-0.02em] font-semibold">SEED</span>
          </div>
          <h1 className="text-[64px] leading-none font-medium text-gray-900 mb-6 tracking-tight">
            Get started<br />today.
          </h1>
          <p className="text-xl text-gray-600 font-light tracking-wide mb-16">
            Complete these easy steps to register your account.
          </p>
          <div className="w-full max-w-md space-y-3">
            <div className="flex items-center gap-4 bg-black/5 rounded-xl p-4 backdrop-blur-sm">
              <span className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full font-medium">1</span>
              <span className="text-gray-900 font-light tracking-wide">Sign up your account</span>
            </div>
            <div className="flex items-center gap-4 bg-black/5 rounded-xl p-4">
              <span className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full font-medium">2</span>
              <span className="text-gray-900 font-light tracking-wide">Set up your workspace</span>
            </div>
            <div className="flex items-center gap-4 bg-black/5 rounded-xl p-4">
              <span className="flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full font-medium">3</span>
              <span className="text-gray-900 font-light tracking-wide">Set up your profile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section with gradient background on mobile */}
      <div className="flex-1 min-h-screen relative">
        {/* Gradient background for mobile */}
        <div className="absolute inset-0 lg:hidden">
          <AnimatedGradient
            colors={[
              'rgb(255, 71, 87)',
              'rgb(46, 213, 115)',
              'rgb(54, 174, 255)',
              'rgb(255, 199, 0)'
            ]}
            speed={8}
            blur="medium"
          />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)'
            }}
          />
        </div>

        {/* Form Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 sm:px-6 lg:p-8">
          <div className="w-full max-w-md space-y-8 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl lg:bg-white lg:backdrop-blur-none shadow-xl">
            <div className="text-center space-y-2">
              <div className="mb-6 lg:hidden">
                <span className="text-3xl text-gray-900 tracking-[-0.02em] font-semibold">SEED</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">Sign Up Account</h2>
              <p className="text-gray-500 text-sm sm:text-base">Enter your personal data to create your account.</p>
            </div>

            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-3 py-4 rounded-xl text-base"
            >
              <Chrome className="w-5 h-5" />
              Continue with Google
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="eg. John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="eg. Francisco"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="eg. johnfrans@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Must be at least 8 characters.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-xl transition-colors text-base mt-6"
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 pt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-gray-900 hover:text-gray-700 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}