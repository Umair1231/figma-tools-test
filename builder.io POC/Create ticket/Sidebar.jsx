import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex fixed bottom-0 left-0 top-12 flex-col justify-between w-52 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] max-sm:-translate-x-full">
      <nav className="px-0 py-2">
        <div className="px-4 py-0">
          <div className="flex gap-2.5 items-center px-0 py-2.5 text-sky-500">
            <i className="ti ti-layout-dashboard" />
            <span>Projects</span>
          </div>
        </div>
      </nav>
      <footer className="px-4 py-3 border-t border-solid border-t-zinc-100">
        <button>
          <i className="ti ti-menu-2" />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
