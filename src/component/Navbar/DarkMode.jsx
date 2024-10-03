import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import FloatingDarkMode from "./FloatingDarkMode";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      
      if (navbar) { // Check if the 'nav' element exists
        const navbarHeight = navbar.offsetHeight; // Get navbar height
        const scrollPosition = window.scrollY;

        if (scrollPosition > navbarHeight) {
          setShowFloatingIcon(true);
        } else {
          setShowFloatingIcon(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* DarkMode Toggle inside Navbar */}
      <div onClick={toggleTheme} className='cursor-pointer'>
        {theme === 'light' ? (
          <MdOutlineLightMode className="w-6 h-6 text-gray-800" />
        ) : (
          <MdDarkMode className="w-6 h-6 text-gray-100" />
        )}
      </div>

      {/* Floating DarkMode Toggle when scrolled past navbar */}
      {showFloatingIcon && (
        <div
          className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 
          bg-gray-800 text-white rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-gray-700"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <MdOutlineLightMode className="w-6 h-6" />
          ) : (
            <MdDarkMode className="w-6 h-6" />
          )}
        </div>
      )}
      <FloatingDarkMode theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};

export default DarkMode;
