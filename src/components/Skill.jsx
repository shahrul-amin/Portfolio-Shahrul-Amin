/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillGroups = {
  "Programming Languages": [
    {
      imgSrc: './images/skills/python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/skills/java.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/skills/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: './images/skills/php.svg',
      label: 'PHP',
      desc: 'Backend Language'
    }
  ],
  
  "AI & Machine Learning": [
    {
      imgSrc: './images/skills/pytorch.svg',
      label: 'PyTorch',
      desc: 'Deep Learning Framework'
    },
    {
      imgSrc: './images/skills/tensorflow.svg',
      label: 'TensorFlow',
      desc: 'Machine Learning Framework'
    },
    {
      imgSrc: './images/skills/keras-original.svg',
      label: 'Keras',
      desc: 'Deep Learning API'
    },
    {
      imgSrc: './images/skills/anaconda-original.svg',
      label: 'Anaconda',
      desc: 'Python Distribution'
    },
    {
      imgSrc: './images/skills/jupyter-original.svg',
      label: 'Jupyter',
      desc: 'Interactive Computing'
    }
  ],

  "Web Technologies": [
    {
      imgSrc: './images/skills/html5.svg',
      label: 'HTML5',
      desc: 'Markup Language'
    },
    {
      imgSrc: './images/skills/css3.svg',
      label: 'CSS3',
      desc: 'User Interface'
    },
    {
      imgSrc: './images/skills/react.svg',
      label: 'React',
      desc: 'JavaScript Framework'
    },
    {
      imgSrc: './images/skills/nodejs.svg',
      label: 'Node.js',
      desc: 'Web Server'
    },
    {
      imgSrc: './images/skills/expressjs.svg',
      label: 'Express.js',
      desc: 'Node Framework'
    },
    {
      imgSrc: './images/skills/laravel.svg',
      label: 'Laravel',
      desc: 'PHP Framework'
    },
    {
      imgSrc: './images/skills/flask-original.svg',
      label: 'Flask',
      desc: 'Python Framework'
    },
    {
      imgSrc: './images/skills/flutter-original.svg',
      label: 'Flutter',
      desc: 'Mobile Framework'
    },
    {
      imgSrc: './images/skills/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: './images/skills/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'CSS Framework'
    }
  ],

  "Databases": [
    {
      imgSrc: './images/skills/mysql.svg',
      label: 'MySQL',
      desc: 'Relational Database'
    },
    {
      imgSrc: './images/skills/mariadb.svg',
      label: 'MariaDB',
      desc: 'Relational Database'
    },
    {
      imgSrc: './images/skills/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: './images/skills/firebase.svg',
      label: 'Firebase',
      desc: 'Backend-as-a-Service'
    }
  ],

  "DevOps & Tools": [
    {
      imgSrc: './images/skills/docker-original.svg',
      label: 'Docker',
      desc: 'Containerization'
    },
    {
      imgSrc: './images/skills/git-original.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: './images/skills/npm-original-wordmark.svg',
      label: 'NPM',
      desc: 'Package Manager'
    },
    {
      imgSrc: './images/skills/vitejs-original.svg',
      label: 'Vite',
      desc: 'Build Tool'
    },
    {
      imgSrc: './images/skills/powershell-original.svg',
      label: 'PowerShell',
      desc: 'Command Line Tool'
    },
    {
      imgSrc: './images/skills/figma.svg',
      label: 'Figma',
      desc: 'Design Tool'
    },
    {
      imgSrc: './images/skills/jira-original.svg',
      label: 'Jira',
      desc: 'Project Management'
    },
    {
      imgSrc: './images/skills/yaml-original.svg',
      label: 'YAML',
      desc: 'Data Serialization'
    }
  ]
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");
  const categories = Object.keys(skillGroups);
  const skillsGridRef = useRef(null);

  // GSAP animation for skill cards
  useEffect(() => {
    if (skillsGridRef.current) {
      const cards = skillsGridRef.current.querySelectorAll('.skill-card');
      
      // Set initial state
      gsap.set(cards, {
        y: 30,
        opacity: 0,
      });

      // Animate in with stagger
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });
    }
  }, [activeCategory]); // Re-run animation when category changes

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

            {/* Skills Grid */}
            <div 
                ref={skillsGridRef}
                className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:gap-6"
            >
                {
                    skillGroups[activeCategory].map(({imgSrc, label, desc}, key) => (
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