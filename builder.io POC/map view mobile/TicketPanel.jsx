import React from 'react';

export const TicketPanel = () => {
  return (
    <section className="absolute inset-x-0 bottom-0">
      <div className="px-5 pt-3 pb-0 rounded-xl border bg-neutral-100 border-stone-300">
        <div className="mx-auto mb-3 w-9 rounded-sm bg-zinc-700 bg-opacity-30 h-[5px]" />
        <div className="flex flex-col gap-4">
          <header className="flex justify-between items-center">
            <h2 className="text-xl text-black text-opacity-80">Total Tickets</h2>
            <span className="px-1.5 text-xs leading-5 text-white bg-blue-600 rounded-[100px]">
              27
            </span>
          </header>
          <div className="flex overflow-y-auto flex-col gap-2.5 max-h-[calc(100vh-300px)]" />
        </div>
      </div>
    </section>
  );
};
