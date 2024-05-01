import { useGetBarColor } from "../sections/Experience/useGetBarColors";

export const Legend = () => {
  const barColors = useGetBarColor();

  return (
    <>
      <h3 className="p-x-2 font-medium">Legend</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {barColors.map((item) => (
          <div className="flex flex-row items-center gap-2" key={item.workType}>
            <div
              className="h-4 w-8 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">{item.workType}</span>
          </div>
        ))}
      </div>
    </>
  );
};
