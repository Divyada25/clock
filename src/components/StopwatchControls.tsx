import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface StopwatchControlsProps {
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
}

const StopwatchControls: React.FC<StopwatchControlsProps> = ({
  isRunning,
  onStartStop,
  onReset
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={onStartStop}
        className={`flex items-center justify-center w-16 h-16 rounded-full text-white font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 ${
          isRunning
            ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30'
            : 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30'
        }`}
      >
        {isRunning ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8 ml-1" />
        )}
      </button>
      
      <button
        onClick={onReset}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-600 hover:bg-gray-500 text-white font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-gray-600/30"
      >
        <RotateCcw className="w-8 h-8" />
      </button>
    </div>
  );
};

export default StopwatchControls;