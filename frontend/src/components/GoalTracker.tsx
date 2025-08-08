// frontend/src/components/GoalTracker.tsx
// --- NEW FILE ---

import React, { useState } from 'react';

interface GoalTrackerProps {
  token: string | null;
  weeklyGoal: number | null;
  weeklyEmissions: number;
  onGoalSet: () => void; // Callback to refresh data
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ token, weeklyGoal, weeklyEmissions, onGoalSet }) => {
  const [target, setTarget] = useState(weeklyGoal?.toString() || '');
  const [isEditing, setIsEditing] = useState(false);

  const progressPercentage = weeklyGoal ? Math.min((weeklyEmissions / weeklyGoal) * 100, 100) : 0;

  const handleSetGoal = async () => {
    if (!token || !target) return;

    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/goals/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ target_co2: parseFloat(target) })
      });
      onGoalSet(); // Trigger a refresh on the dashboard
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to set goal:", error);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-2xl font-bold">Weekly Goal</h2>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
            <span>Progress</span>
            <span>{weeklyEmissions.toFixed(2)} / {weeklyGoal ? weeklyGoal.toFixed(2) : 'N/A'} kg CO₂e</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-black h-4 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="e.g., 100"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            />
            <button onClick={handleSetGoal} className="rounded bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-800">Set</button>
            <button onClick={() => setIsEditing(false)} className="rounded bg-gray-200 px-4 py-2 text-sm font-bold text-black hover:bg-gray-300">Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)} className="w-full text-sm font-medium text-black hover:underline">
            {weeklyGoal ? 'Change Goal' : 'Set a Goal'}
          </button>
        )}
      </div>
    </div>
  );
};

export default GoalTracker;
