import React from 'react';

// FIX: Define a dedicated interface for TestimonialCard props for type safety and to fix errors related to the 'key' prop in lists.
interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex-grow">
            <p className="text-gray-300 italic">"{quote}"</p>
        </div>
        <div className="flex items-center mt-6">
            <img className="w-12 h-12 rounded-full mr-4 object-cover" src={image} alt={name} />
            <div>
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-green-400">{title}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "Este workshop abriu minha mente. A produtividade do meu escritório triplicou em menos de um mês. Indispensável para qualquer advogado que queira se manter relevante.",
            name: "Juliana Costa",
            title: "Advogada Sênior",
            image: "https://picsum.photos/100/100?random=2"
        },
        {
            quote: "Eu tinha receio da IA, achava que era complexa demais. O Dr. Ricardo tem uma didática incrível e mostrou o passo a passo de forma simples e prática. Recomendo!",
            name: "Marcos Andrade",
            title: "Sócio Fundador - Andrade & Advogados",
            image: "https://picsum.photos/100/100?random=3"
        },
        {
            quote: "O módulo de Prompt Engineering foi um divisor de águas. A qualidade das minhas peças processuais melhorou drasticamente. É como ter um assistente genial 24/7.",
            name: "Beatriz Martins",
            title: "Advogada Cível",
            image: "https://picsum.photos/100/100?random=4"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">O Que Nossos Colegas Dizem</h2>
                    <p className="mt-4 text-lg text-gray-400">Advogados que já estão colhendo os frutos da inovação.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;