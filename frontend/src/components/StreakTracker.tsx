// frontend/src/components/StreakTracker.tsx
// --- NEW FILE ---

import React from 'react';
import { Flame } from 'lucide-react';

interface StreakTrackerProps {
  streak: number;
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ streak }) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-2xl font-bold">Your Streak</h2>
      <div className="flex items-center justify-center space-x-4">
        <Flame 
          className={`h-16 w-16 ${streak > 0 ? 'text-red-500' : 'text-gray-300'}`} 
          fill={streak > 0 ? 'currentColor' : 'none'}
        />
        <div className="text-center">
          <p className="text-5xl font-black">{streak}</p>
          <p className="text-gray-600">Day{streak !== 1 && 's'}</p>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-700">
        {streak > 0 ? "Keep it up! Log an entry every day." : "Log an entry to start a new streak!"}
      </p>
    </div>
  );
};

export default StreakTracker;