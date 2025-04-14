import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar, ChevronDown, CalendarIcon, ChevronUp } from "lucide-react";

// Mock data for the form
const formData = {
  budget: "$710.68",
  comments:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  dueDate: "September 24, 2023",
  assignee: "Brooklyn Simmons",
};

export default function Frame() {
  return (
    <Card className="flex flex-col w-[580px] h-[570px] items-start gap-5 pt-5 pb-2.5 px-5 bg-neutral-1 rounded-lg">
      <CardContent className="gap-[30px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-0">
        <div className="gap-5 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Change Order Header */}
          <div className="items-center flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-1 pt-0 pb-2 px-0 relative flex-1 grow">
              <h2 className="relative w-fit mt-[-1.00px] font-h5-medium font-[number:var(--h5-medium-font-weight)] text-charactertitle-85 text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)] whitespace-nowrap [font-style:var(--h5-medium-font-style)]">
                Change Order
              </h2>
            </div>
            <div className="inline-flex flex-col items-start gap-2.5 px-0 py-[5px] relative flex-[0_0_auto]">
              <Switch className="bg-geek-blue7 data-[state=checked]:bg-geek-blue7" />
            </div>
          </div>
          {/* Budget Field */}
          <div className="flex-col items-start flex relative self-stretch w-full flex-[0_0_auto]">
            <label className="flex items-center gap-1 pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <span className="w-fit text-[length:var(--body-regular-font-size)] leading-[var(--body-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-charactertitle-85 tracking-[var(--body-regular-letter-spacing)] [font-style:var(--body-regular-font-style)]">
                Budget
              </span>
            </label>
            <div className="relative w-full">
              <Input
                defaultValue={formData.budget}
                className="px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-neutral-1 rounded-sm border border-solid border-neutral-5 font-h5-regular text-charactertitle-85"
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-charactertitle-85" />
            </div>
          </div>
          {/* Comments on Budget */}
          <h3 className="relative self-stretch font-h5-medium font-[number:var(--h5-medium-font-weight)] text-charactertitle-85 text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)] [font-style:var(--h5-medium-font-style)]">
            Comments on Budget
          </h3>
          <div className="relative w-full">
            <Textarea
              defaultValue={formData.comments}
              className="flex flex-col items-start px-3 py-[5px] relative self-stretch w-full flex-[0_0_auto] bg-neutral-1 rounded-sm border border-solid border-neutral-5 font-body-regular text-charactertitle-85 min-h-[100px]"
            />
            <div className="absolute bottom-2 right-3 font-body-regular font-[number:var(--body-regular-font-weight)] text-characterdisabled-placeholder-25 text-[length:var(--body-regular-font-size)] text-right tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] whitespace-nowrap [font-style:var(--body-regular-font-style)]">
              97 / 100
            </div>
            <ChevronUp className="absolute bottom-2 right-1 w-2 h-2 text-characterdisabled-placeholder-25" />
          </div>
        </div>
        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          {/* Time Sensitive Toggle */}
          <div className="flex items-center px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-1 pt-0 pb-2 px-0 relative flex-1 grow">
              <h2 className="relative w-fit mt-[-1.00px] font-h5-medium font-[number:var(--h5-medium-font-weight)] text-charactertitle-85 text-[length:var(--h5-medium-font-size)] tracking-[var(--h5-medium-letter-spacing)] leading-[var(--h5-medium-line-height)] whitespace-nowrap [font-style:var(--h5-medium-font-style)]">
                Time sensitive
              </h2>
            </div>
            <div className="inline-flex flex-col items-start gap-2.5 px-0 py-[5px] relative flex-[0_0_auto]">
              <Switch className="bg-geek-blue7 data-[state=checked]:bg-geek-blue7" />
            </div>
          </div>
          {/* Due Date Field */}
          <div className="flex flex-col items-start pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <label className="flex items-center gap-1 pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <span className="w-fit text-[length:var(--body-regular-font-size)] leading-[var(--body-regular-line-height)] whitespace-nowrap relative mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-charactertitle-85 tracking-[var(--body-regular-letter-spacing)] [font-style:var(--body-regular-font-style)]">
                Due Date
              </span>
            </label>
            <div className="relative w-full">
              <Input
                defaultValue={formData.dueDate}
                className="px-3 py-2 relative self-stretch w-full flex-[0_0_auto] bg-neutral-1 rounded-sm border border-solid border-neutral-5 font-h5-regular text-charactertitle-85"
              />
              <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[12.5px] h-[12.5px] text-charactertitle-85" />
            </div>
          </div>
          {/* Assignee Field */}
          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <label className="flex items-center gap-1 pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <span className="flex-1 text-[length:var(--body-regular-font-size)] leading-[var(--body-regular-line-height)] relative mt-[-1.00px] font-body-regular font-[number:var(--body-regular-font-weight)] text-charactertitle-85 tracking-[var(--body-regular-letter-spacing)] [font-style:var(--body-regular-font-style)]">
                  Assignee
                </span>
              </label>
              <Select defaultValue={formData.assignee}>
                <SelectTrigger className="w-full px-3 py-2 bg-neutral-1 rounded-sm border border-solid border-neutral-5 font-normal text-charactertitle-85 text-base">
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={formData.assignee}>{formData.assignee}</SelectItem>
                  <SelectItem value="Alex Johnson">Alex Johnson</SelectItem>
                  <SelectItem value="Casey Williams">Casey Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
