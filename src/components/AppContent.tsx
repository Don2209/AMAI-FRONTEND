import React from 'react';
import { useAuth } from '../context/AuthContext';
import Dashboard from './dashboard/Dashboard';
import LoginForm from './auth/LoginForm';

function AppContent() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent"></div>
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <LoginForm />;
}

export default AppContent;