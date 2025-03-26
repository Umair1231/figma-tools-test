"use client";
import React from 'react';
import { Badge } from 'antd';

export const TopNavbar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-0 h-12 shadow-sm bg-slate-900">
      <div>
        <svg width="220" height="46" viewBox="0 0 220 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
          {/* SVG paths from the design */}
        </svg>
      </div>
      <nav className="flex items-center">
        <button className="flex justify-center items-center px-3 py-0 h-12 text-white cursor-pointer">
          <i className="ti ti-search" />
        </button>
        <button className="flex justify-center items-center px-3 py-0 h-12 text-white cursor-pointer">
          <i className="ti ti-help-circle" />
        </button>
        <div className="relative p-3">
          <button className="flex justify-center items-center px-3 py-0 h-12 text-white cursor-pointer">
            <i className="ti ti-bell" />
          </button>
          <Badge count={11} className="absolute top-0.5 right-0.5" />
        </div>
        <div className="flex items-center px-3 py-0 text-white">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/350f4933a56cd06e5b431d2d114ee8f5f2c9d865" alt="User avatar" className="mr-2 w-6 h-6" />
          <span className="text-sm">Ben Taylor</span>
        </div>
      </nav>
    </header>
  );
};
