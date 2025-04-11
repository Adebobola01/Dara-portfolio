import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Services from "./components/services";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <main className={"main"}>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
