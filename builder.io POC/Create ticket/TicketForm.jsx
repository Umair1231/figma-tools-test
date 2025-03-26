"use client";
import React from "react";
import { Input, DatePicker, Select } from "antd";
import {
  FormSection,
  FormField,
  FormTextArea,
  ToggleField,
} from "./FormComponents";
import AttachmentUpload from "./AttachmentUpload";

const TicketForm = () => {
  const attachments = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ea217cefce5c7e5f18c245973dcfd228fde07aef",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/5eb42044263a2e2289eb7608c8cea98778549ba0",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a2d2e6587303d512db4418cbaafc0750af27006d",
  ];

  return (
    <form>
      <div className="flex gap-5 mb-5 max-md:flex-col max-sm:p-2.5">
        <FormSection>
          <FormField label="Title">
            <Input value="Excavation on site 1" />
          </FormField>

          <FormField label="Description">
            <FormTextArea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </FormField>

          <FormField label="Location">
            <Input
              value="40458594504"
              suffix={<i className="ti ti-location" />}
            />
          </FormField>

          <FormField label="Attachments">
            <AttachmentUpload attachments={attachments} />
          </FormField>
        </FormSection>

        <FormSection>
          <ToggleField label="Change Order" />

          <FormField label="Budget">
            <Input
              value="$710.68"
              suffix={<i className="ti ti-chevron-down" />}
            />
          </FormField>

          <FormField label="Comments on Budget">
            <FormTextArea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          </FormField>

          <ToggleField label="Time sensitive" />

          <FormField label="Due Date">
            <DatePicker
              className="w-full"
              suffixIcon={<i className="ti ti-calendar" />}
              value={null}
              placeholder="September 24, 2023"
            />
          </FormField>

          <FormField label="Assignee">
            <Select
              defaultValue="Brooklyn Simmons"
              className="w-full"
              options={[
                { value: "Brooklyn Simmons", label: "Brooklyn Simmons" },
              ]}
            />
          </FormField>
        </FormSection>
      </div>

      <div className="flex gap-5 justify-end">
        <button
          type="button"
          className="px-4 py-1.5 text-base bg-white rounded-md border border-dashed cursor-pointer border-zinc-300 text-black text-opacity-80"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-1.5 text-base text-white bg-blue-800 rounded-md border border-blue-600 border-solid cursor-pointer"
        >
          Create Ticket
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
