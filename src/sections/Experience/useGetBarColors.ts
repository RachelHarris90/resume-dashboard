import { useGetExperience } from "./useGetExperience";

const barColors = [
  "#9333ea",
  "#f3e8ff",
  "#7e22ce",
  "#e9d5ff",
  "#6b21a8",
  "#d8b4fe",
  "#581c87",
  "#c084fc",
  "#3b0764",
  "#a855f7",
];

export const useGetBarColor = () => {
  const experienceHistory = useGetExperience();
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
