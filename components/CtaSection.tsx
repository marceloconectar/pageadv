
import React from 'react';
import Button from './ui/Button';

const WhatsAppIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.215.319-1.125 4.144 4.224-1.105.337-.174z"/>
    </svg>
);

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-green-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Não Fique para Trás. O Futuro é Agora.</h2>
        <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
          As vagas são limitadas para garantir uma experiência de aprendizado de alta qualidade. Junte-se ao grupo VIP para ser o primeiro a saber da abertura das inscrições e receber condições especiais.
        </p>
        <Button 
          href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK" 
          className="bg-white text-green-600 hover:bg-gray-100 focus:ring-white"
          icon={<WhatsAppIcon />}
        >
          Garantir Minha Vaga no Grupo VIP
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
