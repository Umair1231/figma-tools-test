import React from 'react';
import { BellIcon } from './icons/BellIcon';
import { AppstoreIcon } from './icons/AppstoreIcon';

export const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex gap-2.5 items-center">
        <AppstoreIcon />
      </div>
      <h1 className="text-xl font-medium text-white">Project One</h1>
      <div className="flex gap-6 items-center">
        <BellIcon />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/350f4933a56cd06e5b431d2d114ee8f5f2c9d865"
          alt="User profile"
          className="w-6 h-6"
        />
      </div>
    </nav>
  );
};
