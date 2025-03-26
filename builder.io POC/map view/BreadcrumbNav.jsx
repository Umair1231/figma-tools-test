import React from "react";
import { Breadcrumb } from "antd";

export const BreadcrumbNav = () => {
  return (
    <nav className="px-6 py-4 ml-52 border-b border-solid border-b-zinc-300 max-md:ml-16 max-sm:p-3">
      <Breadcrumb
        items={[
          { title: "Projects", className: "text-black text-opacity-50" },
          { title: "Project One", className: "text-black text-opacity-80" },
        ]}
        separator="/"
        className="text-sm"
      />
    </nav>
  );
};
