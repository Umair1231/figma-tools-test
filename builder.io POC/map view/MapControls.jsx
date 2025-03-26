import React from "react";
import { Select } from "antd";

export const MapControls = () => {
  return (
    <>
      <div className="flex absolute top-5 left-5 p-1 rounded-md bg-white bg-opacity-90 z-[1] max-sm:flex-wrap">
        {[
          { icon: "ti-layers", text: "Layers" },
          { icon: "ti-target", text: "Add Marker" },
          { icon: "ti-polygon", text: "Add Polygon" },
          { icon: "ti-route", text: "Add Polyline" },
          { icon: "ti-map-pin", text: "Location" },
        ].map((control) => (
          <button
            key={control.text}
            className="flex gap-1.5 items-center px-3 py-1 text-sm cursor-pointer border-none text-black text-opacity-70 max-sm:text-xs"
          >
            <i className={`ti ${control.icon}`} />
            <span>{control.text}</span>
          </button>
        ))}
      </div>
      <div className="absolute top-5 right-5">
        <Select placeholder="Select User" className="w-[232px]" options={[]} />
      </div>
    </>
  );
};
