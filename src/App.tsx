import { Card } from "./commonComponents/Card";
import { Education } from "./components/Education/Education";
import { Stats } from "./components/Stats/Stats";
import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Experience } from "./sections/Experience/Experience";
import { Home } from "./sections/Home/Home";
import { Interests } from "./sections/Interests/Interests";
import { Skills } from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App flex flex-col gap-4 p-4 w-full">
      <Home />
      <Stats />
      <AboutMe />
      <Experience />
      <Card classNameOverride="flex flex-col md:flex-row md:gap-x-8 gap-y-4">
        <Skills />
        <Education />
      </Card>
      <Interests />
    </div>
  );
}

export default App;
