import { useReveal } from "./hooks";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Loom } from "./components/Loom";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Loom />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
