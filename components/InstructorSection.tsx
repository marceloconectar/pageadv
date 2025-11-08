
import React from 'react';

const InstructorSection: React.FC = () => {
  return (
    <section id="instructor" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden md:flex md:items-center">
          <div className="md:w-1/3">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/800/800?random=1" 
              alt="Foto do Instrutor" 
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            <h3 className="text-sm font-bold uppercase text-green-500 mb-2">Seu Mentor</h3>
            <h2 className="text-3xl font-extrabold text-white mb-4">Dr. Ricardo Neves</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Advogado especialista em Direito Digital e Tecnologia, com mais de 15 anos de experiência. Dr. Ricardo é pioneiro na aplicação de Inteligência Artificial em escritórios de advocacia no Brasil, ajudando centenas de profissionais a se adaptarem à nova realidade do mercado.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mestre em Direito e Tecnologia pela Universidade de Stanford, ele une o conhecimento jurídico profundo com uma paixão por inovação, traduzindo conceitos complexos de IA em estratégias práticas e acionáveis para o dia a dia do advogado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
