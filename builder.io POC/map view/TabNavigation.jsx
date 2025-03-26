import React from "react";

export const TabNavigation = () => {
  return (
    <nav className="flex gap-8 pl-6 ml-52 border-b border-solid border-b-black border-b-opacity-10 max-md:ml-16">
      {[
        "Manage Tickets",
        "Manage Project Details",
        "Manage Project File",
        "Manage Layer Groups",
        "Manage Users",
        "Status Report",
      ].map((tab) => (
        <button
          key={tab}
          className="px-0 py-3 cursor-pointer text-black text-opacity-80 hover:text-opacity-100"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};
