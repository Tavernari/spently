
import React from 'react';
// import { APP_NAME } from '../constants'; // APP_NAME no longer used directly for display here

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-light shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Replace h1 with img tag for the logo */}
        <div className="flex items-center">
          Spently
        </div>
        {/* Future navigation links can go here */}
      </div>
    </header>
  );
};

export default Header;
