"use client";
import React from "react";
import { Button } from "antd";

export const ProjectHeader = () => {
  return (
    <header className="flex justify-between items-center mt-2 px-6 max-sm:flex-col max-sm:gap-3 max-sm:items-start">
      <div className="flex items-center">
        <button className="mr-2">
          <i className="ti ti-arrow-left" />
        </button>
        <h1 className="flex items-center">
          <span className="mr-1.5 text-xl font-medium text-black text-opacity-80">
            Project One
          </span>
          <i className="ti ti-chevron-down" />
        </h1>
      </div>
      <div className="flex gap-2 max-sm:w-full">
        <Button
          icon={<i className="ti ti-layout-list" />}
          className="flex gap-2 items-center max-sm:flex-1"
        >
          List View
        </Button>
        <Button
          type="primary"
          icon={<i className="ti ti-map" />}
          className="flex gap-2 items-center text-blue-800 max-sm:flex-1"
        >
          Map View
        </Button>
      </div>
    </header>
  );
};
