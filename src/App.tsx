import React from 'react';
import Header from './components/Header';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import FeatureCards from './components/FeatureCards';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <Header />

        <div className="grid md:grid-cols-2 gap-8">
          <Clock />
          <Stopwatch />
        </div>

        <FeatureCards />
      </div>
    </div>
  );
}

export default App;