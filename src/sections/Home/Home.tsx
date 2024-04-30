import { Card } from "../../commonComponents/Card";

export const Home = () => {
  return (
    <Card classNameOverride={"bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500"}>
      <section className="flex flex-col md:flex-row gap-x-8 p-8 items-center text-center md:text-left">
        <h1 className="text-5xl lg:text-6xl md:w-1/2">Hi, I'm Rachel</h1>
        <p className="text-3xl lg:text-2xl md:w-1/2 ">
        I'm a frontend leaning full stack developer
        </p>
      </section>
    </Card>
  );
};
