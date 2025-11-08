
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <h1 className="text-xl font-bold text-white">AI para Advogados</h1>
        </div>
        <nav>
          <a href="#cta" className="text-sm font-semibold bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
            Inscreva-se
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
