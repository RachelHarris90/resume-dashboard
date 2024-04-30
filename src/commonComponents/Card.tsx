export const Card = ({ classNameOverride, children }: { classNameOverride?: string, children: React.ReactNode }) => {
  return <div className={`bg-white p-4 md:p-8 rounded-lg ${classNameOverride}`}>{children}</div>;
};
