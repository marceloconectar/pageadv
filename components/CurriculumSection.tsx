import React from 'react';

// FIX: Define a dedicated interface for CurriculumCard props to ensure correct type checking and resolve issues with the 'key' prop.
interface CurriculumCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const CurriculumCard = ({ icon, title, description }: CurriculumCardProps) => (
    <div className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
        <div className="text-green-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const CurriculumSection: React.FC = () => {
    const modules = [
        {
            title: "Módulo 1: Fundamentos da IA para o Direito",
            description: "Entenda o que é IA, Machine Learning e como essas tecnologias se aplicam ao universo jurídico. Desmistifique os termos técnicos.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        },
        {
            title: "Módulo 2: Ferramentas de IA na Prática",
            description: "Hands-on: Aprenda a usar as principais ferramentas de IA para pesquisa de jurisprudência, análise de contratos e jurimetria.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
        },
        {
            title: "Módulo 3: Automação e Gestão de Escritórios",
            description: "Descubra como automatizar tarefas administrativas, gerenciar processos e otimizar o fluxo de trabalho do seu escritório com IA.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
        },
        {
            title: "Módulo 4: Prompt Engineering para Advogados",
            description: "Aprenda a 'conversar' com a IA para extrair as melhores respostas, redigir peças processuais e criar argumentos sólidos.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
        },
        {
            title: "Módulo 5: Ética e Regulamentação da IA",
            description: "Navegue pelos desafios éticos, a proteção de dados (LGPD) e as futuras regulamentações do uso de IA no setor jurídico.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        },
        {
            title: "Módulo Bônus: Marketing Jurídico com IA",
            description: "Utilize a IA para criar conteúdo, identificar oportunidades de mercado e atrair os clientes ideais para o seu escritório.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
        }
    ];

    return (
        <section id="curriculum" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">O Que Você Vai Dominar</h2>
                    <p className="mt-4 text-lg text-gray-400">Um currículo completo para transformar você em um advogado aumentado por IA.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, index) => (
                        <CurriculumCard key={index} icon={mod.icon} title={mod.title} description={mod.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;