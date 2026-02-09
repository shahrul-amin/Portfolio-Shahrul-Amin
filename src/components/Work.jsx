import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ApiService from "../services/ApiService.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    ApiService.getProjects().then((data) => {
      setWorks(data);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }, []);

  useEffect(() => {
    if (works.length > 0) {
      const cards = document.querySelectorAll('#work .reveal-up');
      cards.forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
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
    }
  }, [works]);
  return (
    <section 
        id="work"
        className="section relative overflow-hidden"
    >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
            <h2 className="headline-2 mb-12 reveal-up text-center lg:text-left">
                My portfolio highlights
            </h2>

            <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] lg:gap-8">
                {works.map(({imgSrc, title, tags, projectLink}, 
                key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Work