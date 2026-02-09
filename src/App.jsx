/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0 
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'

/**
 * Components
 */
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    <ReactLenis title="Shahrul Amin | Portfolio" root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;