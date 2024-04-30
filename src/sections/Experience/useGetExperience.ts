export type ExperienceHistory = {
  id: string;
  role: string;
  company: string;
  startDate: Date;
  endDate: Date;
  details: string;
  workBreakdown: { workType: string; workPercentage: number }[];
};

const experienceHistory: ExperienceHistory[] = [
  {
    id: "598c2b6c-89ea-4ede-8081-8b4c5ea0d9ab",
    role: "Software Engineer",
    company: "Culture Amp",
    startDate: new Date("2022-07"),
    endDate: new Date(),
    details:
      "Fullstack developer, focused on building, supporting and maintaining an intuitive and seamless user experience in a green fields React/Typescript/Next.js application and a legacy (7+ year) React/Typescript application for HR professionals and employees of companies globally. While primarily focused on the frontend, I spend some time in the Ruby on Rails backend, creating new endpoints, modifying existing functionality, investigating support issues, etc. Using React Query with Fetch, styling TailwindCSS, testing with Storybook/Chromatic and Jest, observability in Datadog, Splunk and Sentry. Participating in solution design, user story writing, UX design feasibility assessments and planning in a cross-functional team, collaborating with various roles including Product Manager, UX designer, Tech Lead and other engineers.",
    workBreakdown: [
      {
        workType: "Coding/programming",
        workPercentage: 75,
      },
      {
        workType: "Support and maintenance",
        workPercentage: 10,
      },
      {
        workType: "Product & design collaboration",
        workPercentage: 15,
      },
    ],
  },
  {
    id: "239763ab-5f33-442e-add9-8f4d04323be2",
    role: "Senior Delivery Lead",
    company: "Culture Amp",
    startDate: new Date("2021-06"),
    endDate: new Date("2022-05"),
    details:
      "Responsible for the teams ways of working, delivery processes and people leadership for a team developing and improving the goals module. Focusing on individual development and supporting the growth of software developers. Working with support to prioritise and resolve support issues. Standing in for product management at times when the team was without a product manager.",
    workBreakdown: [
      {
        workType: "Team leadership",
        workPercentage: 40,
      },
      {
        workType: "Planning",
        workPercentage: 20,
      },
      {
        workType: "Stakeholder mgmt",
        workPercentage: 20,
      },
      {
        workType: "Process",
        workPercentage: 20,
      },
    ],
  },
  {
    id: "0e7258d5-fada-4ea0-bc72-946c3d2c6a32",
    role: "Founder & Director",
    company: "Hill Top Pizzeria & Takeaway",
    startDate: new Date("2020-01"),
    endDate: new Date("2021-05"),
    details:
      "Opened and managed a hospitality business with a diverse menu, that became a thriving business through COVID. Responsible for the finances, operations, hiring, people management, supplier negotiations, marketing and systems.",
    workBreakdown: [
      {
        workType: "Operations",
        workPercentage: 60,
      },
      {
        workType: "Finance",
        workPercentage: 20,
      },
      {
        workType: "Team leadership",
        workPercentage: 10,
      },
      {
        workType: "Stock management",
        workPercentage: 10,
      },
    ],
  },
  {
    id: "218cd7bd-ca6b-4612-b337-49ae996e6af8",
    role: "Product Manager",
    company: "MYOB",
    startDate: new Date("2019-05"),
    endDate: new Date("2019-12"),
    details:
      "Leading multiple teams to design and build an intuitive browser based application for accountants in accounting software. Focused on user journeys that covered complex tax and accounting areas. Conducted user interviews, co-design sessions while working closely with accountants. Coached business analysts, collaborated with other business functions to plan releases and product marketing and worked through solutions and issues with software developers.",
    workBreakdown: [
      {
        workType: "Roadmap & work breakdown",
        workPercentage: 40,
      },
      {
        workType: "User research",
        workPercentage: 25,
      },
      {
        workType: "Stakeholder mgmt",
        workPercentage: 20,
      },
      {
        workType: "Team leadership",
        workPercentage: 15,
      },
    ],
  },
  {
    id: "686b00d4-d582-4544-bc4b-c3cd4d4325a0",
    role: "Development Lead",
    company: "MYOB",
    startDate: new Date("2017-07"),
    endDate: new Date("2019-06"),
    details:
      "Leading a team of software developers, a business analyst, quality analyst and an accountant to build browser based software for accountants in accounting practices. Participating in all parts of the discovery, design, development and release process in a “you build it, you run it” model. Represented the team in delivery and technical discussions, for the full stack from infrastructure to the UI.",
    workBreakdown: [
      {
        workType: "Team leadership",
        workPercentage: 40,
      },
      {
        workType: "Planning",
        workPercentage: 20,
      },
      {
        workType: "Stakeholder mgmt",
        workPercentage: 20,
      },
      {
        workType: "Process",
        workPercentage: 15,
      },
      {
        workType: "Technical leadership",
        workPercentage: 5,
      },
    ],
  },
  {
    id: "b7c220c7-eb9a-45d5-ba04-f2ebfd9dfea9",
    role: "Senior Consultant (Product & Delivery)",
    company: "Elabor8",
    startDate: new Date("2016-07"),
    endDate: new Date("2017-07"),
    details:
      "Embedded in businesses from start-ups to large enterprises, working with teams as a product owner, iteration manager while focused on improving ways of working through continuous improvement. Interviewing customers and performing contextual inquiries to understand user needs. Building product roadmaps, a backlog with clear and deliverable user stories, while coaching others.",
    workBreakdown: [
      {
        workType: "Business analysis",
        workPercentage: 70,
      },
      {
        workType: "Iteration management",
        workPercentage: 15,
      },
      {
        workType: "Business support",
        workPercentage: 15,
      },
    ],
  },
  {
    id: "fec45303-ae45-40df-8387-553f6c2c9bbb",
    role: "Delivery Manager - ERP",
    company: "Metcash",
    startDate: new Date("2015-11"),
    endDate: new Date("2016-06"),
    details:
      "Scrum master for all development teams and release manager for several systems, with eight business analysts and a varied number of software developers reporting to me.",
    workBreakdown: [
      {
        workType: "Team leadership",
        workPercentage: 40,
      },
      {
        workType: "Planning",
        workPercentage: 20,
      },
      {
        workType: "Stakeholder mgmt",
        workPercentage: 20,
      },
      {
        workType: "Business support",
        workPercentage: 20,
      },
    ],
  },
  {
    id: "2ea9bdb6-ff0c-4365-9d6c-dc57ee11faa6",
    role: "Operations Manager - ERP",
    company: "Metcash",
    startDate: new Date("2015-01"),
    endDate: new Date("2015-11"),
    details:
      "Managing a team of business analysts and software developers with a goal of resolving existing support issues and reducing the rate of new issues. Regular collaboration with the development team releasing new features, as well as setting expectations with business units experience system issues.",
    workBreakdown: [
      {
        workType: "Iteration management",
        workPercentage: 20,
      },
      {
        workType: "Planning & forecasting",
        workPercentage: 20,
      },
      {
        workType: "Stakeholder management",
        workPercentage: 40,
      },
      {
        workType: "Business support",
        workPercentage: 20,
      },
    ],
  },
  {
    id: "006bc432-e0c1-4a8f-b5d8-f5377fc2abb5",
    role: "Delivery Team Leader - ERP",
    company: "Metcash",
    startDate: new Date("2014-05"),
    endDate: new Date("2014-11"),
    details:
      "Leading a team of business analysts to understand the business requirements across multiple projects and locations. Management of support for our area, and collaborating with other business units to manage the priorities of the teams work.",
    workBreakdown: [
      {
        workType: "Iteration management",
        workPercentage: 25,
      },
      {
        workType: "Planning & forecasting",
        workPercentage: 25,
      },
      {
        workType: "Stakeholder management",
        workPercentage: 25,
      },
      {
        workType: "Business support",
        workPercentage: 25,
      },
    ],
  },
  {
    id: "35b94b2c-e4fb-43c0-b2e3-df77d315d50b",
    role: "Business Analyst",
    company: "Metcash",
    startDate: new Date("2011-01"),
    endDate: new Date("2014-03"),
    details:
      "Ownership of several product domains, working with users to understand their user journeys and business rules. Liaising on a daily basis with software developers to communicate requirements and provide guidance where needed. Responsible for the data conversion from the legacy platform to the new system.",
    workBreakdown: [
      {
        workType: "Business analysis",
        workPercentage: 85,
      },
      {
        workType: "Business support",
        workPercentage: 15,
      },
    ],
  },
];

const barColors = [
  "#3b82f6",
  "#dbeafe",
  "#2563eb",
  "#bfdbfe",
  "#1d4ed8",
  "#93c5fd",
  "#1e40af",
];

export const useGetExperience = () => {
  return experienceHistory;
};

export const useGetBarColor = () => {
  const uniqueWorkTypes = new Set<string>();
  const backgroundColor: { workType: string; color: string }[] = [];

  experienceHistory.forEach((experience) => {
    experience.workBreakdown.forEach((work) => {
      if (!uniqueWorkTypes.has(work.workType)) {
        uniqueWorkTypes.add(work.workType);
        backgroundColor.push({
          workType: work.workType,
          color: barColors[backgroundColor.length % barColors.length],
        });
      }
    });
  });

  return backgroundColor;
};
