import React from 'react';
import { Clock, Timer, Play } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Real-time Clock',
      description: 'Always accurate current time display',
      color: 'blue'
    },
    {
      icon: Timer,
      title: 'Precise Stopwatch',
      description: 'Accurate timing down to centiseconds',
      color: 'green'
    },
    {
      icon: Play,
      title: 'Easy Controls',
      description: 'Intuitive start, stop, and reset functions',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 text-blue-400',
      green: 'bg-green-500/20 text-green-400',
      purple: 'bg-purple-500/20 text-purple-400'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
            <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;