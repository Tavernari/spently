
import React from 'react';
import { APP_NAME } from '../constants';
import { HiCheckCircle } from 'react-icons/hi2';

interface BenefitPointProps {
  title: string;
  children: React.ReactNode;
}


const BenefitPoint: React.FC<BenefitPointProps> = ({ title, children }) => (
  <div className="flex items-start space-x-3">
    <HiCheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
    <div>
      <h5 className="text-xl font-semibold text-neutral-darker mb-1">{title}</h5>
      <p className="text-neutral-dark">{children}</p>
    </div>
  </div>
);

const WhySpentlySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-6">
              Your Path to <span className="text-primary">Financial Clarity</span>
            </h3>
            <p className="text-lg text-neutral-dark mb-8">
              {APP_NAME} is more than just an expense tracker; it's a tool to empower your financial well-being with simplicity and intelligence.
            </p>
            <div className="space-y-6">
              <BenefitPoint title="Daily Spending Awareness">
                Instantly know how much you can spend each day to stay on track with your monthly goals.
              </BenefitPoint>
              <BenefitPoint title="Control Variable Expenses">
                Effortlessly manage your discretionary spending without the hassle of micro-categorization.
              </BenefitPoint>
              <BenefitPoint title="Achieve Your Financial Goals">
                By maintaining focus on your overall spending limit, you're better equipped to save and reach your targets.
              </BenefitPoint>
              <BenefitPoint title="Minimal Effort, Maximum Impact">
                Simplify your financial life. Let our AI and minimalist approach do the heavy lifting.
              </BenefitPoint>
            </div>
          </div>
          <div className="flex justify-center">
             <img 
              src="https://picsum.photos/500/500?image=1074" 
              alt="Person feeling financially clear" 
              className="rounded-lg shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySpentlySection;
