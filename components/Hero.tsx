
import React from 'react';
import Button from './ui/Button';

const WhatsAppIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.215.319-1.125 4.144 4.224-1.105.337-.174z"/>
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 animate-fade-in-down">
          A Revolução da IA no Direito Começou. <br className="hidden md:block" /> Você está preparado?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Domine as ferramentas de Inteligência Artificial que estão transformando a advocacia e saia na frente da concorrência.
        </p>
        <div className="animate-bounce">
          <Button href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK" icon={<WhatsAppIcon />}>
            Entrar no Grupo VIP do WhatsApp
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-400">Vagas limitadas. Garanta seu lugar e receba informações exclusivas.</p>
      </div>
    </section>
  );
};

export default Hero;
