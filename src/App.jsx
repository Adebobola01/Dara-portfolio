import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <main className={"main"}>
        <Hero />
      </main>
    </div>
  );
}

export default App;
