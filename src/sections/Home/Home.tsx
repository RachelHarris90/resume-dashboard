import { Card } from "../../commonComponents/Card";
import { Skills } from "../Skills/Skills";
import { EmailIcon } from "./EmailIcon";
import { GithubLogo } from "./GithubLogo";
import { LinkedInLogo } from "./LinkedInLogo";
import { PhoneIcon } from "./PhoneIcon";

const sideBarItems = [
  {
    label: "linkedin.com/au/harrisrachel",
    href: "https://www.linkedin.com/in/harrislrachel/",
    component: <LinkedInLogo />,
  },
  {
    label: "RachelHarris90",
    href: "https://www.github.com/rachelharris90",
    component: <GithubLogo />,
  },
  {
    label: "+61 419 090 527",
    href: "tel:+61419090527",
    component: <PhoneIcon />,
  },
  {
    label: "rachel.harris@msn.com",
    href: "mailto:rachel.harris@msn.com",
    component: <EmailIcon />,
  },
];

export const Home = () => {
  return (
    <Card classNameOverride="bg-gradient-to-r from-[#d8b4fe] via-[#e9d5ff] to-[#7e22ce]">
      <section className="flex flex-col md:flex-row gap-x-8 p-8 items-center text-center md:text-left">
        <h1 className="text-5xl lg:text-6xl md:w-1/2">Hi, I'm Rachel</h1>
        <p className="text-3xl lg:text-2xl md:w-1/2 ">
          I'm a frontend leaning full stack developer
        </p>
      </section>
    </Card>
  );
};
