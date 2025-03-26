"use client";
import React from "react";
import { Input, Switch } from "antd";

const { TextArea } = Input;

export const FormSection = ({ children, className = "" }) => (
  <div
    className={`flex-1 p-5 bg-white rounded-lg max-md:w-full max-sm:p-4 ${className}`}
  >
    {children}
  </div>
);

export const FormField = ({ label, children, className = "" }) => (
  <div className={`mb-5 ${className}`}>
    <label className="mb-2 text-sm text-black text-opacity-80 block">
      {label}
    </label>
    {children}
  </div>
);

export const FormTextArea = ({ value, maxLength = 100 }) => {
  const currentLength = value?.length || 0;

  return (
    <div className="relative bg-white rounded-sm border border-solid border-zinc-300">
      <TextArea
        value={value}
        className="px-3 py-1.5 w-full text-sm resize-none border-none min-h-[100px] text-black text-opacity-80"
      />
      <div className="absolute right-3 text-sm bottom-[5px] text-black text-opacity-30">
        {currentLength} / {maxLength}
      </div>
    </div>
  );
};

export const ToggleField = ({ label }) => (
  <FormField>
    <div className="flex justify-between items-center">
      <label className="mb-2 text-sm text-black text-opacity-80">{label}</label>
      <Switch defaultChecked className="bg-blue-800" />
    </div>
  </FormField>
);
