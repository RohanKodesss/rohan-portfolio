import { useReveal } from "./hooks";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Loom } from "./components/Loom";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#projects">
        Skip to projects
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Loom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
