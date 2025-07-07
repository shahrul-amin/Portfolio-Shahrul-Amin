/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50 
      bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-transparent 
      backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        <h1>
          <a href="/" className="logo group">
            <img
              src="./images/logo.svg"
              width={45}
              height={45}
              alt="Shahrul Amin"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button 
            className="menu-btn md:!hidden" 
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded transition-transform duration-300">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen}/>
        </div>
        <a 
          href="#contact" 
          className="btn btn-secondary max-md:!hidden md:justify-self-end hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
