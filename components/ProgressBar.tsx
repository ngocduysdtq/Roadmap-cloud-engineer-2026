
import React from 'react';

interface ProgressBarProps {
  completedCount: number;
  totalCount: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completedCount, totalCount }) => {
  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-sky-400">Tiến độ của bạn</span>
        <span className="text-sm font-medium text-sky-400">{completedCount} / {totalCount} mục</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-4">
        <div
          className="bg-sky-500 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
