
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Workshop AI para Advogados. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Uma iniciativa para revolucionar a prática jurídica no Brasil.</p>
      </div>
    </footer>
  );
};

export default Footer;
