import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SkillCard from "./SkillCard";
import ApiService from "../services/ApiService.js";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");
  const [skillGroups, setSkillGroups] = useState({});
  const categories = Object.keys(skillGroups);
  const skillsGridRef = useRef(null);

  useEffect(() => {
    ApiService.getSkills().then(setSkillGroups);
  }, []);

  useEffect(() => {
    ApiService.getSkills().then(setSkillGroups);
  }, []);

  useEffect(() => {
    if (skillsGridRef.current) {
      const cards = skillsGridRef.current.querySelectorAll('.skill-card');
      
      gsap.set(cards, {
        y: 30,
        opacity: 0,
      });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, [activeCategory]);

  return (
    <section
      id="skill" 
      className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
            <h2 className="headline-2 reveal-up text-center lg:text-left">
                Essential Tools I use
            </h2>

            <p className="text-slate-300 mt-6 mb-8 max-w-[55ch] reveal-up text-lg leading-relaxed font-medium text-center lg:text-left">
                Discover the powerful tools and technologies I leverage to
                create high-performing, exceptional websites, applications, and AI models. 
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 reveal-up">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeCategory === category
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div 
                ref={skillsGridRef}
                className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:gap-6"
            >
                {
                    skillGroups[activeCategory]?.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={`${activeCategory}-${key}`}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="skill-card"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill