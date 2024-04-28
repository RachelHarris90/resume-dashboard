import { Link } from "react-router-dom";

const navItems = [
  {
    link: "/about-me",
    label: "About me",
  },
  {
    link: "/experience",
    label: "Experience",
  },
  {
    link: "/skills",
    label: "Skills",
  },
  {
    link: "/education",
    label: "Education",
  },
  {
    link: "/portfolio",
    label: "Portfolio",
  },
];

export const Navigation = () => {
  return (
    <nav className="md:flex items-center">
      <ul className="flex flex-col md:space-x-4 font-semibold">
        {navItems.map((item) => (
          <li key={item.label} className="p-2 cursor-pointer hover:bg-gray-100">
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
