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

export const SideBar = () => {
  return (
    <div className="bg-white p-4 md:p-8 space-y-2 h-full w-full md:w-72 rounded-lg">
      <h1 className="text-2xl">Rachel Harris</h1>
      <h2 className="text-lg">Software Developer</h2>
      <div className="space-y-2 flex flex-col">
        {sideBarItems.map((item) => (
          <a
            href={item.href}
            aria-label="LinkedIn"
            className="flex flex-row items-center gap-x-2"
            key={item.label}
          >
            <div className="hidden sm:flex">{item.component}</div>
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </div>
      {/* <Skills /> */}
    </div>
  );
};
