
import React from 'react';
import FeatureCard from './FeatureCard';
import { APP_NAME } from '../constants';
import { HiSparkles, HiChatBubbleOvalLeftEllipsis, HiShieldCheck } from 'react-icons/hi2';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "AI-Powered Input",
      description: `Log expenses effortlessly. Send a text, snap a photo of a receipt, or simply tell ${APP_NAME} via voice. Our AI understands and records it for you.`,
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Focus on Your Target",
      description: `Set your spending goal. ${APP_NAME} shows your daily spending allowance and tracks your progress, keeping you informed and in control.`,
    },
    {
      icon: <HiChatBubbleOvalLeftEllipsis className="w-8 h-8" />,
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
