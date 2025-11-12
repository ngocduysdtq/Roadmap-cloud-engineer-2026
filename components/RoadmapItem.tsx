
import React from 'react';
import type { RoadmapStep } from '../types';
import BookOpenIcon from './icons/BookOpenIcon';
import CheckIcon from './icons/CheckIcon';

interface RoadmapItemProps {
  step: RoadmapStep;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  isLast: boolean;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ step, isCompleted, onToggle, isLast }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute top-5 left-[18px] sm:left-[30px] w-0.5 h-full bg-slate-700 group-hover:bg-sky-500 transition-colors duration-300"></div>
      )}

      {/* Timeline circle */}
      <div className={`absolute top-5 left-2 sm:left-6 w-5 h-5 rounded-full transition-all duration-300 ${isCompleted ? 'bg-emerald-500' : 'bg-slate-600 group-hover:bg-sky-500'}`}></div>

      <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-slate-200 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <label htmlFor={`checkbox-${step.id}`} className="cursor-pointer flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <input
                id={`checkbox-${step.id}`}
                type="checkbox"
                className="peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-500 transition-all checked:border-emerald-500 checked:bg-emerald-500"
                checked={isCompleted}
                onChange={() => onToggle(step.id)}
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <CheckIcon className="h-4 w-4" />
              </div>
            </div>
            <h3 className={`text-lg font-semibold ${isCompleted ? 'text-emerald-400 line-through' : 'text-slate-100'}`}>
              {step.title}
            </h3>
          </label>
        </div>
      </div>

      <div className="text-slate-400 sm:pr-8">{step.description}</div>
      
      {step.resources.length > 0 && (
        <div className="mt-3">
          <h4 className="font-semibold text-slate-300 mb-2">Tài liệu tham khảo:</h4>
          <ul className="space-y-2">
            {step.resources.map((resource, index) => (
              <li key={index}>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 hover:underline transition-colors"
                >
                  <BookOpenIcon className="w-4 h-4" />
                  <span>{resource.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoadmapItem;
