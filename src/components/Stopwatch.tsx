import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import StopwatchControls from './StopwatchControls';

const Stopwatch: React.FC = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatchTime(Date.now() - startTime);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  const startStopwatch = () => {
    if (!isRunning) {
      setStartTime(Date.now() - stopwatchTime);
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setIsRunning(false);
    setStartTime(0);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
      <div className="flex items-center justify-center mb-6">
        <Timer className="w-8 h-8 text-green-400 mr-3" />
        <h2 className="text-2xl font-semibold text-white">Stopwatch</h2>
      </div>
      
      <div className="text-center space-y-8">
        <div className="text-6xl md:text-7xl font-mono font-bold text-white tracking-wider">
          {formatTime(stopwatchTime)}
        </div>
        
        <StopwatchControls
          isRunning={isRunning}
          onStartStop={startStopwatch}
          onReset={resetStopwatch}
        />
        
        <div className="text-sm text-gray-400">
          {isRunning ? 'Running...' : 'Press play to start'}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;