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
import Contact from "./components/contact-me";
import Backdrop from "./components/backdrop";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const drawerHandler = () => {
    setOpenDrawer(!openDrawer);
  };
  const contactDisplayHandler = () => {
    setOpenContact(!openContact);
  };

  return (
    <div className={"app"}>
      <Navbar drawerHandler={drawerHandler} openDrawer={openDrawer} />
      <main className={"main"}>
        <Contact open={openContact} closeHandler={contactDisplayHandler} />
        <Drawer open={openDrawer} />
        <Backdrop open={openContact} onClick={contactDisplayHandler} />
        <Hero hireButtonClick={contactDisplayHandler} />
        <About />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
      </main>
      <Footer hireButtonClick={contactDisplayHandler} />
    </div>
  );
}

export default App;
