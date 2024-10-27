import React from 'react';
import { BookOpen, MessageSquare, FileText, Activity, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
  const { logout } = useAuth();
  const menuItems = [
    { icon: BookOpen, label: 'Study Console', active: true },
    { icon: FileText, label: 'Test Console' },
    { icon: MessageSquare, label: 'Chat Services' },
    { icon: Activity, label: 'Progress' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-green-600">AMAI</h1>
          <p className="text-sm text-gray-500 mt-1">AI-Driven Learning</p>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={logout}
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-4 py-3 w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;