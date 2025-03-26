"use client";
import React from 'react';
import { TopNavbar } from './TopNavbar';
import { Sidebar } from './Sidebar';
import { MapView } from './MapView';
import { BreadcrumbNav } from './BreadcrumbNav';
import { ProjectHeader } from './ProjectHeader';
import { TabNavigation } from './TabNavigation';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopNavbar />
      <main className="flex">
        <Sidebar />
        <section className="flex-1">
          <BreadcrumbNav />
          <ProjectHeader />
          <TabNavigation />
          <MapView />
        </section>
      </main>
    </div>
  );
};
