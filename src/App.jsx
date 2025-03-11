/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0 
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Reegister gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger)

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

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        ease: 'power2.out',
        opacity: 1,
        duration: 1,
      });
    });
  })
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