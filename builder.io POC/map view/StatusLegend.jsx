import React from "react";

export const StatusLegend = () => {
  const statuses = [
    "Not Assigned",
    "Assigned",
    "In Process",
    "In QA",
    "Closed",
  ];

  return (
    <div className="flex flex-col gap-2.5 mt-5">
      {statuses.map((status) => (
        <div
          key={status}
          className="flex gap-2 items-center px-2 py-1 text-xs leading-5 text-white bg-white rounded-md border border-solid"
        >
          <div className="w-1.5 h-1.5 rounded-full" />
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};
