export const Stats = () => {
  const stats = [
    {
      label1: "1600+ git commits",
      label2: "Since 2022",
    },
    {
      label1: "50+ projects",
      label2: "Since 2011",
    },
    {
      label1: "Culture Amp",
      label2: "Since 2021",
    },
    {
      label1: "ex-MYOB",
      label2: "2017 to 2019",
    },
    {
      label1: "ex-elabor8",
      label2: "2016 to 2017",
    },
  ];

  return (
    <div className="grid-cols-5 gap-x-4 grid">
      {stats.map((stat) => (
        <div
          className="bg-[#581c87] rounded-lg px-8 py-4 grid items-center"
          key={`${stat.label1}${stat.label2}`}
        >
          <span className="font-semibold text-white">{stat.label1}</span>
          <span className="text-white">{stat.label2}</span>
        </div>
      ))}
    </div>
  );
};
