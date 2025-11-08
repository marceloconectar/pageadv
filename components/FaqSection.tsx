
import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-gray-700 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};


const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Preciso ter conhecimento prévio em tecnologia?",
            answer: "Não! O workshop foi desenhado para advogados, do iniciante ao avançado em tecnologia. Abordamos desde os conceitos fundamentais até as aplicações práticas, com uma linguagem clara e acessível."
        },
        {
            question: "O workshop será online ou presencial?",
            answer: "O workshop será 100% online e ao vivo. As aulas serão gravadas e disponibilizadas para os alunos por um período de 1 ano, para que você possa rever o conteúdo sempre que precisar."
        },
        {
            question: "Receberei certificado de conclusão?",
            answer: "Sim. Todos os participantes que completarem o workshop receberão um certificado digital, que pode ser adicionado ao seu currículo e LinkedIn."
        },
        {
            question: "As ferramentas de IA são seguras para dados sensíveis dos clientes?",
            answer: "Este é um ponto crucial que abordaremos em detalhes no módulo de Ética e Regulamentação. Ensinaremos as melhores práticas e como utilizar as ferramentas de IA em conformidade com a LGPD e o sigilo profissional."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Dúvidas Frequentes</h2>
                    <p className="mt-4 text-lg text-gray-400">Tudo o que você precisa saber antes de garantir sua vaga.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        >
                           {faq.answer}
                        </FaqItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
