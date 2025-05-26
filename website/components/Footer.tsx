
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-darker text-neutral-DEFAULT py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
        <p className="text-sm text-neutral-dark mt-1">A minimalist approach to financial freedom.</p>
      </div>
    </footer>
  );
};

export default Footer;
