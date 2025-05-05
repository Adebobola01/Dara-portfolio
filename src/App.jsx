import { useState } from "react";
import "./App.css";
import About from "./components/about";
import Drawer from "./components/drawer";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={"app"}>
      <Navbar drawerHandler={drawerHandler} openDrawer={openDrawer} />
      <main className={"main"}>
        <Drawer open={openDrawer} />
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
