"use client";
import React from "react";
import { MapControls } from "./MapControls";
import { StatusLegend } from "./StatusLegend";

export const MapView = () => {
  return (
    <div className="relative ml-52 max-md:ml-16">
      <div className="relative bg-neutral-200 h-[calc(100vh_-_196px)]">
        {/* Map Overlays */}
        <svg
          className="polygon-overlay"
          width="147"
          height="166"
          viewBox="0 0 147 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 129.5L19.5 67L4 3H88L143 74L81 162L4 129.5Z"
            stroke="#CF1322"
            strokeWidth="5"
          />
        </svg>
        <svg
          className="line-overlay"
          width="111"
          height="32"
          viewBox="0 0 111 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 29.5L110 2.5" stroke="#FA8C16" strokeWidth="5" />
        </svg>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/873fbe39c2edc835f09a14cf223a05714bfad2e3"
          alt="Marker"
        />

        {/* Compass */}
        <div className="absolute bottom-5 left-5 w-28 h-28">
          <svg
            className="compass-circle"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="56" cy="56" r="46" stroke="#262626" strokeWidth="20" />
          </svg>
          <div className="absolute top-2/4 left-2/4 p-2.5 bg-white rounded-full -translate-x-2/4 -translate-y-2/4">
            <svg
              className="compass-icon"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Compass SVG paths */}
            </svg>
          </div>
          <span className="absolute top-0 left-2/4 font-bold text-white -translate-x-2/4">
            N
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex absolute right-5 bottom-5 flex-col gap-6 px-3 py-3 rounded-md border border-gray-200 border-solid bg-white bg-opacity-90">
          <button>
            <i className="ti ti-zoom-in" />
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button>
            <i className="ti ti-zoom-out" />
          </button>
        </div>
      </div>

      <MapControls />
      <StatusLegend />
    </div>
  );
};