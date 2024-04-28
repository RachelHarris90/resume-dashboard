import { Card } from "../../commonComponents/Card";
import { useGetExperience } from "./useGetExperience";

export const Experience = () => {
  const experienceHistory = useGetExperience();
  return (
    <Card>
      <h2 className="text-2xl">Experience</h2>
      {/* TODO: Convert to expandable table, with stacked bar chart for work breakdown */}
      <ul>
        {experienceHistory.map((experience, i) => (
          <li key={`${experience.role}, ${i}`}>{experience.role}</li>
        ))}
      </ul>
    </Card>
  );
};
