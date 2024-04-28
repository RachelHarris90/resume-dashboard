import { useGetBarColor } from "../sections/Experience/useGetExperience";

export const Legend = () => {
  const barColors = useGetBarColor();

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {barColors.map((item) => (
        <div className="flex flex-row items-center gap-2">
          <div className="h-4 w-8" style={{ backgroundColor: item.color }} />
          <span className="text-sm">{item.workType}</span>
        </div>
      ))}
    </div>
  );
};
