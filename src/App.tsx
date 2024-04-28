import { AboutMe } from "./sections/AboutMe/AboutMe";
import { Experience } from "./sections/Experience/Experience";
import { Home } from "./sections/Home/Home";
import { SideBar } from "./sections/SideBar/SideBar";
import { Skills } from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App flex flex-row gap-2 m-2">
      <header className="App-header">
        <SideBar />
      </header>
      <main className="w-full gap-2 flex flex-col">
        <Home />
        <AboutMe />
        <Experience />
      </main>
    </div>
  );
}

export default App;
