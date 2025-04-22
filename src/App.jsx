import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className={"app"}>
      <Navbar />
      <main className={"main"}>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
