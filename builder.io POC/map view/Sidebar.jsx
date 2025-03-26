import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-12 w-52 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] max-md:w-16">
      <nav>
        <div className="flex gap-2.5 items-center px-4 py-2.5 text-black text-opacity-70">
          <button className="flex justify-center items-center px-3 py-0 h-12 text-white cursor-pointer">
            <i className="ti ti-folder" />
          </button>
          <span className="max-md:hidden">Projects</span>
        </div>
      </nav>
      <div className="px-4 py-3 border-t border-solid border-t-zinc-100">
        <i className="ti ti-menu-2" />
      </div>
    </aside>
  );
};
