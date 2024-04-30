import { Card } from "../../commonComponents/Card";
import { Tag } from "../../commonComponents/Tag";

const technicalSkills = [
  "React",
  "Typescript",
  "Storybook",
  "Ruby on Rails",
  "Product management",
  "UI design",
  "Agile practices",
];
const softSkills = [
  "Leadership",
  "Problem solving",
  "Prioritisation",
  "Flexible & adaptable",
];

export const Skills = () => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl">Skills</h2>
      <h3 className="text-lg">Technical skills</h3>
      <ul className="flex flex-wrap gap-x-2 gap-y-4">
        {technicalSkills.map((skill) => (
          <li>
            <Tag text={skill} />
          </li>
        ))}
      </ul>
      <h3 className="text-lg pt-4">Soft skills</h3>
      <ul className="flex flex-wrap gap-x-2 gap-y-4">
        {softSkills.map((skill) => (
          <li>
            <Tag text={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};
