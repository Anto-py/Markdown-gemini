
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm shadow-lg p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
        </svg>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
          Markdown Converter
        </h1>
      </div>
    </header>
  );
};

export default Header;
