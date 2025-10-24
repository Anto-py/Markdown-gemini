
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center px-6 py-3 border border-transparent 
        text-base font-medium rounded-md shadow-sm text-white 
        bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 
        transition-all duration-300 ease-in-out
        disabled:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-70
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
