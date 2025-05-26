
import React from 'react';
import FeatureCard from './FeatureCard';
import { APP_NAME } from '../constants';

// Heroicons (outline)
const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.188l-1.25-2.188a2.25 2.25 0 00-1.703-1.703L12 9.75l2.188-1.25a2.25 2.25 0 001.703-1.703L17 4.25l1.25 2.188a2.25 2.25 0 001.703 1.703L22.75 9.75l-2.188 1.25a2.25 2.25 0 00-1.703 1.703z" />
  </svg>
);

const ChatBubbleOvalLeftEllipsisIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <SparklesIcon />,
      title: "AI-Powered Input",
      description: `Log expenses effortlessly. Send a text, snap a photo of a receipt, or simply tell ${APP_NAME} via voice. Our AI understands and records it for you.`,
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Focus on Your Target",
      description: `Set your spending goal. ${APP_NAME} shows your daily spending allowance and tracks your progress, keeping you informed and in control.`,
    },
    {
      icon: <ChatBubbleOvalLeftEllipsisIcon />,
      title: "Telegram Native",
      description: `Manage everything directly within Telegram, an app you already use. No new apps to download, no complex setups.`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-DEFAULT">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Smart Tracking, <span className="text-primary">Simpler Than Ever</span>
          </h3>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            {APP_NAME} leverages AI to make expense tracking intuitive and almost invisible.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
