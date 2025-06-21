import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-700 ease-out"
        style={{ width: `${percentage}%` }}
      />
      <div className="text-center mt-2">
        <span className="text-sm font-medium text-gray-600">
          {current} of {total} questions
        </span>
      </div>
    </div>
  );
};