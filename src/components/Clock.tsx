import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const formatClockTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatClockDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
      <div className="flex items-center justify-center mb-6">
        <ClockIcon className="w-8 h-8 text-blue-400 mr-3" />
        <h2 className="text-2xl font-semibold text-white">Current Time</h2>
      </div>
      
      <div className="text-center space-y-4">
        <div className="text-6xl md:text-7xl font-mono font-bold text-white tracking-wider">
          {formatClockTime(currentTime)}
        </div>
        <div className="text-lg text-gray-300">
          {formatClockDate(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Clock;