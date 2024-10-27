import React, { useState } from 'react';
import { Search, Filter, Clock, CheckCircle, PauseCircle } from 'lucide-react';
import TestCard from './TestCard';
import TestFilters from './TestFilters';
import { Test, TestStatus } from '../../types/test';

const mockTests: Test[] = [
  {
    id: '1',
    title: 'Introduction to AI',
    subject: 'Artificial Intelligence',
    duration: 45,
    questionsCount: 30,
    progress: 0,
    status: 'NOT_STARTED',
    dueDate: '2024-03-25',
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    subject: 'Machine Learning',
    duration: 60,
    questionsCount: 40,
    progress: 65,
    status: 'IN_PROGRESS',
    dueDate: '2024-03-20',
  },
  {
    id: '3',
    title: 'Neural Networks',
    subject: 'Deep Learning',
    duration: 90,
    questionsCount: 50,
    progress: 100,
    status: 'COMPLETED',
    dueDate: '2024-03-15',
  },
];

function TestConsole() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<TestStatus | 'ALL'>('ALL');

  const filteredTests = mockTests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'ALL' || test.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Test Console</h1>
          <p className="text-gray-600 mt-1">Manage and track your assessments</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <TestFilters
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
}

export default TestConsole;