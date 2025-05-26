import React from 'react';
import CallToActionButton from './CallToActionButton';
import TestimonialsSection from './TestimonialsSection';
import { TELEGRAM_BOT_LINK, APP_NAME } from '../constants';

const CTASection: React.FC = () => {
  return (
    <>
      <TestimonialsSection />
      <section className="bg-primary py-16 md:py-24 text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Simplify Your Finances?
        </h3>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-primary-light">
          Take control of your spending the minimalist way. Get started with {APP_NAME} on Telegram today – it's free!
        </p>
        <CallToActionButton 
            href={TELEGRAM_BOT_LINK} 
            size="large" 
            variant="primary"
            className="bg-white text-primary hover:bg-neutral-light focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary !text-primary"
        >
          Start Tracking with {APP_NAME}
        </CallToActionButton>
      </div>
    </section>
    </>
  );
};

export default CTASection;
