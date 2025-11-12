import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import RoadmapItem from './components/RoadmapItem';
import { ROADMAP_DATA } from './constants';
import { generateMotivation } from './services/geminiService';

const App: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('completedSteps');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (error) {
      console.error("Failed to parse completed steps from localStorage", error);
      return new Set();
    }
  });

  const [aiMotivation, setAiMotivation] = useState<string>('');
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(true);

  const totalSteps = useMemo(() => ROADMAP_DATA.reduce((sum, phase) => sum + phase.steps.length, 0), []);

  const fetchMotivation = useCallback(async () => {
    setIsLoadingAi(true);
    const motivation = await generateMotivation("Trở thành Cloud Engineer vào đầu năm 2026");
    setAiMotivation(motivation);
    setIsLoadingAi(false);
  }, []);

  useEffect(() => {
    fetchMotivation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(Array.from(completedSteps)));
  }, [completedSteps]);

  const handleToggleStep = (id: string) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans">
      <main className="container mx-auto px-4 py-8">
        <Header aiMotivation={aiMotivation} isLoading={isLoadingAi} />
        <ProgressBar completedCount={completedSteps.size} totalCount={totalSteps} />
        <div className="max-w-5xl mx-auto mt-8">
          {ROADMAP_DATA.map((phase) => (
            <div key={phase.phase} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 border-b-2 border-slate-700 pb-2 mb-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm py-2 z-10">
                {phase.title}
              </h2>
              <div className="relative border-l-2 border-slate-700 ml-4 sm:ml-8">
                {phase.steps.map((step, stepIndex) => (
                  <RoadmapItem
                    key={step.id}
                    step={step}
                    isCompleted={completedSteps.has(step.id)}
                    onToggle={handleToggleStep}
                    isLast={stepIndex === phase.steps.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center p-4 text-slate-500">
        <p>Xây dựng với đam mê và một chút trợ giúp từ AI.</p>
      </footer>
    </div>
  );
};

export default App;
