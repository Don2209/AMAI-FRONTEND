import React from 'react';
import { Filter } from 'lucide-react';
import { TestStatus } from '../../types/test';

interface TestFiltersProps {
  selectedStatus: TestStatus | 'ALL';
  onStatusChange: (status: TestStatus | 'ALL') => void;
}

function TestFilters({ selectedStatus, onStatusChange }: TestFiltersProps) {
  return (
    <div className="flex items-center gap-3">
      <Filter className="w-5 h-5 text-gray-400" />
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value as TestStatus | 'ALL')}
        className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        <option value="ALL">All Tests</option>
        <option value="NOT_STARTED">Not Started</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}

export default TestFilters;