// frontend/src/components/EcoSuggestion.tsx
// --- NEW FILE ---

import React from 'react';
import { Lightbulb } from 'lucide-react';

interface EcoSuggestionProps {
  suggestion: string;
}

const EcoSuggestion: React.FC<EcoSuggestionProps> = ({ suggestion }) => {
  return (
    <div className="rounded-lg border-2 border-dashed border-gray-300 p-6">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Lightbulb className="h-10 w-10 text-green-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Eco Suggestion</h2>
          <p className="mt-1 text-gray-600">{suggestion}</p>
        </div>
      </div>
    </div>
  );
};

export default EcoSuggestion;
