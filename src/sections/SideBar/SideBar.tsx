import { Navigation } from "../../components/Navigation/Navigation";
import rachelProfilePicture from "./rachelProfilePicture.jpg";
import LinkedInLogo from "./linkedin-logo.png";
import GithubLogo from "./github-logo.png";

export const SideBar = () => {
  return (
    <div className="bg-white p-4 h-full w-72">
      <img src={rachelProfilePicture} className="rounded-full w-32" />
      <h1 className="text-2xl">Rachel Harris</h1>
      <div className="space-x-5 flex items-center">
        <a
          href="https://www.linkedin.com/in/harrislrachel/"
          aria-label="LinkedIn"
        >
          <img src={LinkedInLogo} className="bg-rachel-light rounded-lg" />
        </a>
        <a href="https://www.github.com/rachelharris90" aria-label="Github">
          <img src={GithubLogo} className="bg-rachel-light rounded-lg" />
        </a>
      </div>
      <Navigation />
    </div>
  );
};
