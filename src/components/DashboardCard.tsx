import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stats: string;
  color: string;
}

function DashboardCard({ title, description, icon: Icon, stats, color }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="text-sm font-medium text-gray-900">{stats}</div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;