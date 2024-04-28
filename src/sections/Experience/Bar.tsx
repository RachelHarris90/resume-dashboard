import { useState } from "react";
import { ExperienceHistory, useGetBarColor } from "./useGetExperience";

export const Bar = ({ experience }: { experience: ExperienceHistory }) => {
  const barColors = useGetBarColor();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-2">
      <li
        key={experience.id}
        className="flex w-full items-center justify-between transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <>
          <span className="w-1/4 font-semibold">{experience.role}</span>
          <div className="flex self-stretch transition-all w-3/4">
            <ul className="flex w-full list-none overflow-hidden rounded p-0">
              {experience.workBreakdown.map((work, i) => (
                <li
                  style={{
                    width: `${work.workPercentage}%`,
                    backgroundColor: barColors.find(
                      (item) => item.workType === work.workType,
                    )?.color,
                    height: "42px",
                    padding: "2px",
                    verticalAlign: "middle",
                  }}
                ></li>
              ))}
            </ul>
          </div>
        </>
      </li>
      {isOpen && (
        <div className="pt-4">
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
