
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center md:items-start md:text-left">
      <div className="bg-primary-light text-primary p-3 rounded-full mb-4 inline-block">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-neutral-darker mb-2">{title}</h4>
      <p className="text-neutral-dark leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
