
import React from 'react';
import CallToActionButton from './CallToActionButton';
import { TELEGRAM_BOT_LINK, APP_NAME } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-neutral-DEFAULT py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-darker mb-6">
          Master Your Spending, <span className="text-primary">Effortlessly</span>.
        </h2>
        <p className="text-lg md:text-xl text-neutral-dark max-w-3xl mx-auto mb-10">
          {APP_NAME} helps you control your finances the minimalist way. Focus on your spending target, not tedious categories, with simple, AI-powered expense tracking.
        </p>
        <CallToActionButton href={TELEGRAM_BOT_LINK} size="large">
          Try {APP_NAME} on Telegram
        </CallToActionButton>
      </div>
    </section>
  );
};

export default HeroSection;
