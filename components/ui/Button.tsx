
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', href, icon }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  const colorClasses = "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClasses} ${className}`}
      >
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${colorClasses} ${className}`}>
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
