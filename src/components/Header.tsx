import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
        Time <span className="text-purple-400">Master</span>
      </h1>
      <p className="text-gray-300 text-lg">Your elegant timing companion</p>
    </div>
  );
};

export default Header;