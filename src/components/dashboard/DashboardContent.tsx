import React from 'react';
import { BookOpen, FileText, MessageSquare, Activity } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

function DashboardContent() {
  const { user } = useAuth();

  const cards = [
    {
      title: 'Study Progress',
      icon: BookOpen,
      stats: '4 Courses in Progress',
      description: 'Continue your learning journey',
      color: 'bg-green-500',
    },
    {
      title: 'Pending Tests',
      icon: FileText,
      stats: '2 Tests Remaining',
      description: 'Complete your assessments',
      color: 'bg-blue-500',
    },
    {
      title: 'Chat Sessions',
      icon: MessageSquare,
      stats: '15 Active Conversations',
      description: 'AI-powered learning assistance',
      color: 'bg-purple-500',
    },
    {
      title: 'Overall Progress',
      icon: Activity,
      stats: '75% Completed',
      description: 'Track your achievements',
      color: 'bg-orange-500',
    },
  ];

  return (
    <main className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h2>
        <p className="text-gray-600 mt-1">Here's an overview of your learning progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{card.description}</p>
              <div className="text-sm font-medium text-gray-900">{card.stats}</div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DashboardContent;