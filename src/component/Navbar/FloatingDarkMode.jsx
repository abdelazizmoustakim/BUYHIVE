import React from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

const FloatingDarkMode = ({ theme, toggleTheme }) => {
  return (
    <div className="fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
      <div
        onClick={toggleTheme}
        className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition duration-300 
          ${theme === 'dark' ? 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-200'}`}
      >
        {theme === 'dark' ? <MdOutlineLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
      </div>
    </div>
  );
};

export default FloatingDarkMode;
