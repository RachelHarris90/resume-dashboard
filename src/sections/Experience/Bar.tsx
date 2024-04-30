import { useState } from "react";
import { ArrowDown } from "./ArrowDown";
import { ArrowUp } from "./ArrowUp";
import { ExperienceHistory, useGetBarColor } from "./useGetExperience";
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";

export const Bar = ({ experience }: { experience: ExperienceHistory }) => {
  const barColors = useGetBarColor();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-1">
      <li className="flex w-full items-center justify-between">
        <>
          <button
            className="flex flex-row w-1/4 items-center gap-x-3 hover:bg-slate-100 rounded p-2 mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ArrowUp /> : <ArrowDown />}
            <span className="font-medium text-left">{experience.role}</span>
          </button>
          <ul className="w-3/4 flex rounded-lg">
            {experience.workBreakdown.map((work, i) => {
              const barColor = barColors.find(
                (item) => item.workType === work.workType,
              )?.color;
              return (
                <TooltipTrigger key={`${work}${i}`}>
                  <Button
                    style={{
                      width: `${work.workPercentage}%`,
                      backgroundColor: barColor,
                    }}
                    className="first:rounded-l-lg last:rounded-r-lg"
                  >
                    <li className=" hover:border-black hover:border-2 h-[30px] p-2.5" />
                  </Button>
                  <Tooltip className="px-2 rounded border bg-white border-black">
                    <OverlayArrow>
                      <svg width={10} height={10} viewBox="0 0 8 8" fill="#fff">
                        <path d="M0 0 L4 4 L8 0" />
                      </svg>
                    </OverlayArrow>
                    {work.workType}
                  </Tooltip>
                </TooltipTrigger>
              );
            })}
          </ul>
        </>
      </li>
      {isOpen && (
        <div className="py-4">
          <div className="flex flex-row justify-between font-semibold">
            <h4>{experience.company}</h4>
            <div>
              <span>{`${experience.startDate?.toLocaleString("default", { month: "long" })}, ${experience.startDate?.getFullYear()}`}</span>
              <span> to </span>
              <span>{`${experience.endDate?.toLocaleString("default", { month: "long" })}, ${experience.endDate?.getFullYear()}`}</span>
            </div>
          </div>
          <p>{experience.details}</p>
        </div>
      )}
    </div>
  );
};
