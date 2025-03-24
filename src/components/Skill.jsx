/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: './images/python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/java.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/pytorch.svg',
      label: 'PyTorch',
      desc: 'Deep Learning Framework'
    },
    {
      imgSrc: './images/tensorflow.svg',
      label: 'TensorFlow',
      desc: 'Machine Learning Framework'
    },
    {
      imgSrc: './images/html5.svg',
      label: 'HTML5',
      desc: 'Markup Language'
    },
    {
      imgSrc: './images/css3.svg',
      label: 'CSS3',
      desc: 'User Interface'
    },
    {
      imgSrc: './images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: './images/php.svg',
      label: 'PHP',
      desc: 'Backend Language'
    },
    {
      imgSrc: './images/react.svg',
      label: 'React',
      desc: 'JavaScript Framework'
    },
    {
      imgSrc: './images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: './images/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'CSS Framework'
    },    
    {
      imgSrc: './images/figma.svg',
      label: 'Figma',
      desc: 'Design Tool'
    },
    {
      imgSrc: './images/nodejs.svg',
      label: 'Node.js',
      desc: 'Web Server'
    },
    {
      imgSrc: './images/expressjs.svg',
      label: 'Express.js',
      desc: 'Node Framework'
    },
    {
      imgSrc: './images/laravel.svg',
      label: 'Laravel',
      desc: 'PHP Framework'
    },
    {
      imgSrc: './images/mysql.svg',
      label: 'MySQL',
      desc: 'Relational Database'
    },
    {
      imgSrc: './images/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: './images/mariadb.svg',
      label: 'MariaDB',
      desc: 'Relational Database'
    },
    {
      imgSrc: './images/firebase.svg',
      label: 'Firebase',
      desc: 'Backend-as-a-Service'
    }
  ];
  

const Skill = () => {
  return (
    <section
      id="skill" 
      className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the tools and technologies I use to
                create high performing and exceptional websites
                applications and models. 
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill