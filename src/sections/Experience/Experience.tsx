import { Card } from "../../commonComponents/Card";
import { Bar } from "./Bar";
import { useGetExperience } from "./useGetExperience";

export const Experience = () => {
  const experienceHistory = useGetExperience();

  return (
    <Card id="experience">
      <h2 className="text-2xl">Experience</h2>
      <div className="w-full flex flex-row">
        <div className="w-1/4" />
        <div className="flex w-3/4">
          {Array.from({ length: 4 }, (_, i) => (
            <span className="w-1/4  text-center">{i * 25 + 25}</span>
          ))}
        </div>
      </div>
      <ul className="flex w-full flex-col gap-y-2">
        {experienceHistory.map((experience) => (
          <Bar experience={experience} />
        ))}
      </ul>
    </Card>
  );
};
