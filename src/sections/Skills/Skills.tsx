import { Card } from "../../commonComponents/Card";

export const Skills = () => {
  return (
    <Card id="skills">
      <h2 className="text-2xl">Skills</h2>
      <h3 className="text-xl">Technical skills</h3>
      <ul>
        <li>React</li>
        <li>Typescript</li>
        <li>Storybook</li>
        <li>Jest</li>
        <li>Ruby on Rails</li>
        <li>Product management</li>
        <li>Agile practices</li>
      </ul>
      <h3 className="text-xl">Soft</h3>
      <ul>
        <li>Leadership</li>
        <li>Problem solving</li>
        <li>Prioritisation</li>
        <li>Flexible & adaptable</li>
      </ul>
    </Card>
  );
};
