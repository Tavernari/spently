
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import FeaturesSection from './components/FeaturesSection';
import WhySpentlySection from './components/WhySpentlySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-neutral-darker">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PhilosophySection />
        <FeaturesSection />
        <WhySpentlySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
