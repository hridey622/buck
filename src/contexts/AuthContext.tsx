import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: { firstName: string; lastName: string; email: string; password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to get stored user
const getStoredUser = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getStoredUser());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!getStoredUser());
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mock login function
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockUser = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        role: 'user',
        createdAt: new Date().toISOString()
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));

      setUser(mockUser);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error: any) {
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  // Mock logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Mock register function
  const register = async (data: { firstName: string; lastName: string; email: string; password: string }) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockUser = {
        id: '1',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: 'user',
        createdAt: new Date().toISOString()
      };

      // Store user in localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));

      setUser(mockUser);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error: any) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}