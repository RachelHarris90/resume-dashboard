import { Card } from "../../commonComponents/Card";

export const Home = () => {
  return (
    <Card classNameOverride="bg-gradient-to-r from-[#d8b4fe] via-[#e9d5ff] to-[#7e22ce]">
      <section className="flex flex-col md:flex-row justify-between">
        <h1 className="text-3xl md:text-4xl">Rachel Azad (Harris)</h1>
        <p className="text-1xl md:text-2xl">
          Software Developer
        </p>
      </section>
    </Card>
  );
};
