
import React from 'react';
import { APP_NAME } from '../constants';

const PhilosophySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Embrace <span className="text-primary">Minimalist</span> Expense Management
          </h3>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Tired of complex budgets and endless category tracking? {APP_NAME} offers a refreshingly simple approach to financial control.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://picsum.photos/600/400?grayscale&image=1062" 
              alt="Minimalist workspace" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6 text-neutral-dark text-lg">
            <p>
              Imagine setting a simple monthly spending goal – say, $1000 for your variable expenses. {APP_NAME} doesn't care how much you earn or what you spend on groceries versus entertainment. Its sole focus is to help you stay within that target.
            </p>
            <p>
              Inspired by the principle that <strong className="text-primary-dark">less is more</strong>, we help you gain daily awareness. Know instantly if you're on track, or if today's spending might compromise your goals for the rest of the month.
            </p>
            <p>
              This isn't about restrictive budgeting; it's about <strong className="text-primary-dark">conscious spending</strong> and achieving financial peace of mind by controlling your outflow, not meticulously cataloging every cent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
