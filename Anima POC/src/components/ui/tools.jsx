import React from "react";

export function Input({ className, ...props }) {
  return <input className={`border p-2 rounded ${className}`} {...props} />;
}

export function Switch({ className, ...props }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" {...props} />
      <div
        className={`w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all ${className}`}
      ></div>
    </label>
  );
}

export function Textarea({ className, ...props }) {
  return <textarea className={`border p-2 rounded w-full resize-none ${className}`} {...props} />;
}
