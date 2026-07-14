/* Here I import all the package I will use */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Firebase/AuthContext';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  // Show a loading screen while Firebase verifies the user's token
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-700">Chargement...</div>
      </div>
    );
  }

  // If no user is logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/Login" replace />;
  }

  // If logged in, render the page
  return <>{children}</>;
};
