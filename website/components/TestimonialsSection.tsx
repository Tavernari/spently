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
      quote: `${APP_NAME} completely transformed how I manage my finances. It's simple, intuitive, and helped me save over $500 per month!`,
      author: "Ana Silva",
      role: "Marketing Professional",
    },
    {
      quote: `After trying several finance apps, I finally found ${APP_NAME}. It's minimalist and effective - exactly what I needed.`,
      author: "Carlos Mendes",
      role: "Software Developer",
    },
    {
      quote: `As a freelancer, tracking expenses was always a challenge. ${APP_NAME} simplified everything and now I have a clear view of my finances.`,
      author: "Juliana Costa",
      role: "Freelance Designer",
    },
  ];

  return (
    <section className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
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
