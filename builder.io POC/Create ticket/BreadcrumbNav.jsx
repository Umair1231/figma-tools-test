import React from "react";
import { Breadcrumb } from "antd";

const BreadcrumbNav = () => {
  return (
    <header className="px-6 py-4 bg-white border-b border-solid border-b-zinc-300 max-sm:p-3">
      <Breadcrumb
        className="text-sm text-black text-opacity-50"
        items={[
          { title: "Projects" },
          { title: "Project One" },
          { title: "Create Ticket" },
        ]}
      />
      <div className="flex gap-3 items-center mt-2 text-xl text-black text-opacity-80">
        <i className="ti ti-arrow-left" />
        <h1>Create Ticket</h1>
      </div>
    </header>
  );
};

export default BreadcrumbNav;
