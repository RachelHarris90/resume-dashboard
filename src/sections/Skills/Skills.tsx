import { Card } from "../../commonComponents/Card";
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
    <Card>
      <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-4">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl">Skills</h2>
          <h3 className="text-xl">Technical skills</h3>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {technicalSkills.map((skill) => (
              <li>
                <Tag text={skill} />
              </li>
            ))}
          </ul>
          <h3 className="text-xl">Soft</h3>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <li>
                <Tag text={skill} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl ">Education</h2>
          <div className="flex-col flex">
            <span className="text-left">Charles Sturt University</span>
            <span className="font-medium text-left">
              Bachelor of Computer Science
            </span>
            <span className="text-left">2024 to 2027</span>
            <br />
            <span className="text-left">University of Sydney</span>
            <span className="font-medium text-left">
              Full Stack Developer Bootcamp
            </span>
            <span className="text-left">2021 to 2022</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
