import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await register(firstName, lastName, email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="mb-6">
            <Logo />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Join us and start exploring
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-8 shadow-sm border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-border bg-white/50 px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                placeholder="Create a strong password"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="w-full"
            >
              Create account
            </Button>

            <div className="text-center text-sm text-text-secondary">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}