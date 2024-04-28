export const Card = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={id} className="bg-white p-4">
      {children}
    </div>
  );
};
