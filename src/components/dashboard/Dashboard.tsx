import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import DashboardContent from './DashboardContent';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 min-h-screen">
        <Header user={user!} />
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;