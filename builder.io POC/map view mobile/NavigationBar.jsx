import React from "react";
import { AimIcon } from "./icons/AimIcon";
import { NodeIndexIcon } from "./icons/NodeIndexIcon";
import { PolygonIcon } from "./icons/PolygonIcon";
import { LayersIcon } from "./icons/LayersIcon";

export const NavigationBar = () => {
  return (
    <nav className="flex gap-12 justify-center items-center px-5 pt-3.5 pb-8 bg-white shadow-sm">
      <button className="flex flex-col flex-1 gap-1.5 items-center">
        <AimIcon />
        <span className="text-xs text-blue-800">Add Marker</span>
      </button>
      <button className="flex flex-col flex-1 gap-1.5 items-center">
        <NodeIndexIcon />
        <span className="text-xs text-neutral-700">Add Polyline</span>
      </button>
      <button className="flex flex-col flex-1 gap-1.5 items-center">
        <PolygonIcon />
        <span className="text-xs text-neutral-700">Add Polygon</span>
      </button>
      <button className="flex flex-col flex-1 gap-1.5 items-center">
        <LayersIcon />
        <span className="text-xs text-neutral-700">Layers</span>
      </button>
    </nav>
  );
};
