import { Tag } from "../../commonComponents/Tag";

const technicalSkills = [
  "React",
  "Typescript",
  "Storybook",
  "Jest",
  "Ruby on Rails",
  "Product management",
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
    <div>
      {/* <h2 className="text-2xl">Skills</h2> */}
      <h3 className="text-xl">Technical skills</h3>
      <ul className="flex flex-wrap gap-2">
        {technicalSkills.map((skill) => (
          <li>
            <Tag text={skill} />
          </li>
        ))}
      </ul>
      <h3 className="text-xl">Soft</h3>
      <ul>
        {technicalSkills.map((skill) => (
          <li>
            <Tag text={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};
