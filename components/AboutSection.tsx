import React from 'react';

// FIX: Define a dedicated interface for Feature component props for better readability and to resolve potential type inference issues.
interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const Feature = ({ icon, title, children }: FeatureProps) => (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex-shrink-0 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{children}</p>
    </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">A Advocacia Nunca Mais Será a Mesma</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">A Inteligência Artificial não é mais o futuro, é o presente. Advogados que ignoram essa tecnologia correm o risco de se tornarem obsoletos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <Feature 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
            title="O Problema: Sobrecarga"
          >
            Tarefas manuais e repetitivas consomem seu tempo precioso, impedindo o foco em estratégias de alto valor para seus clientes. A concorrência está cada vez mais acirrada.
          </Feature>
          <Feature 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>}
            title="A Solução: IA Estratégica"
          >
            Este workshop te ensinará a usar a IA para automatizar pesquisas, analisar documentos, prever resultados e otimizar a gestão do seu escritório de forma ética e segura.
          </Feature>
          <Feature 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="O Resultado: Vantagem"
          >
            Aumente sua produtividade em até 10x, entregue resultados superiores aos seus clientes e posicione-se como um líder na vanguarda da inovação jurídica.
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;