"use client";
import React from 'react';
import { StatusBar } from './StatusBar';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { TicketPanel } from './TicketPanel';
import { NavigationBar } from './NavigationBar';

export const MapInterface = () => {
  return (
    <main className="w-full h-screen bg-white">
      <header className="w-full bg-slate-900 h-[114px]">
        <StatusBar />
        <Header />
      </header>
      <section className="relative w-full h-[calc(100vh-114px)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c5ce8a3bc8e6095e1854d8af7bb4c0f0a0310a"
          alt="Map view"
          className="w-full h-full object-cover"
        />
        <SearchBar />
        <TicketPanel />
        <NavigationBar />
      </section>
    </main>
  );
};
