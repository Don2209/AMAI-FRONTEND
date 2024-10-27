import React from 'react';
import { Clock, CheckCircle, PauseCircle, PlayCircle } from 'lucide-react';
import { Test } from '../../types/test';

interface TestCardProps {
  test: Test;
}

function TestCard({ test }: TestCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-green-600';
      case 'IN_PROGRESS':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="w-5 h-5" />;
      case 'IN_PROGRESS':
        return <PauseCircle className="w-5 h-5" />;
      default:
        return <PlayCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{test.title}</h3>
            <p className="text-sm text-gray-500">{test.subject}</p>
          </div>
          <span className={`flex items-center gap-1.5 ${getStatusColor(test.status)}`}>
            {getStatusIcon(test.status)}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{test.duration} minutes</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{test.questionsCount} Questions</span>
          </div>

          {test.progress > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${test.progress}%` }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          {test.status === 'COMPLETED' ? 'View Results' : test.status === 'IN_PROGRESS' ? 'Continue Test' : 'Start Test'}
        </button>
      </div>
    </div>
  );
}

export default TestCard;