import React from 'react';
import { SystemStatusIcon } from './icons/SystemStatusIcon';

export const StatusBar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[54px]">
      <time className="flex-1 py-5 text-lg text-center text-white font-[590]">
        9:41
      </time>
      <div className="flex flex-1 justify-end">
        <SystemStatusIcon />
      </div>
    </div>
  );
};
