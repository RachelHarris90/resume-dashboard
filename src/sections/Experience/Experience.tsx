import { Card } from "../../commonComponents/Card";
import { Legend } from "../../components/Legend";
import { Bar } from "./Bar";
import { useGetExperience } from "./useGetExperience";

export const Experience = () => {
  const experienceHistory = useGetExperience();

  return (
    <Card>
      <section>
        <h2 className="text-2xl">Experience</h2>
        <p className="text-small py-4">
          This visualusation shows the experience held over time and the
          breakdown of the type of work carried out in each role.
        </p>
        <Legend />
        <span className="w-full flex pt-4 font-medium">
          Percentage of work by role
        </span>
        <div className="w-full flex flex-row">
          <div className="w-1/4" />
          <div className="flex w-3/4">
            {Array.from({ length: 4 }, (_, i) => (
              <span className="w-1/4 text-center" key={i}>
                {i * 25 + 25}
              </span>
            ))}
          </div>
        </div>
        <ul className="flex w-full flex-col">
          {experienceHistory.map((experience) => (
            <Bar experience={experience} key={experience.id} />
          ))}
        </ul>
      </section>
    </Card>
  );
};
