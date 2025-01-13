import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { Chrome, Eye } from 'lucide-react';
import AnimatedGradient from '../components/ui/AnimatedGradient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in');
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
            Welcome<br />back.
          </h1>
          <p className="text-xl text-gray-600 font-light tracking-wide">
            Sign in to continue to your account.
          </p>
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
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">Sign In Account</h2>
              <p className="text-gray-500 text-sm sm:text-base">Enter your credentials to access your account.</p>
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

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eg. johnfrans@gmail.com"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 rounded-xl transition-colors text-base mt-6"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 pt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-gray-900 hover:text-gray-700 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}