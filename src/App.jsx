import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <main className={"main"}>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
