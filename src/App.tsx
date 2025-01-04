import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import AppRoutes from './routes';
import ParticlesBackground from './components/ui/ParticlesBackground';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="relative min-h-screen bg-background-light">
          <ParticlesBackground className="fixed inset-0 z-0" particleCount={100} speed={0.2} />
          <Header />
          <main className="relative z-10 min-h-screen">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}