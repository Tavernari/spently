import React from 'react';
import { APP_NAME } from '../constants';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      {imageUrl && (
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
          <img src={imageUrl} alt={author} className="w-full h-full object-cover" />
        </div>
      )}
      <p className="text-gray-700 italic mb-4 text-center">"{quote}"</p>
      <div className="text-center">
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: `${APP_NAME} transformou completamente como eu gerencio minhas finanças. É simples, intuitivo e me ajudou a economizar mais de R$500 por mês!`,
      author: "Ana Silva",
      role: "Profissional de Marketing",
    },
    {
      quote: `Depois de tentar vários aplicativos de finanças, finalmente encontrei o ${APP_NAME}. É minimalista e eficaz - exatamente o que eu precisava.`,
      author: "Carlos Mendes",
      role: "Desenvolvedor de Software",
    },
    {
      quote: `Como freelancer, controlar despesas sempre foi um desafio. O ${APP_NAME} simplificou tudo e agora tenho uma visão clara das minhas finanças.`,
      author: "Juliana Costa",
      role: "Designer Freelancer",
    },
  ];

  return (
    <section className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que nossos usuários dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
