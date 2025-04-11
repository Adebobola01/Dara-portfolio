import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/services";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <main className={"main"}>
        <Hero />
        <About />
        <Services />
        <Projects />
      </main>
    </div>
  );
}

export default App;
