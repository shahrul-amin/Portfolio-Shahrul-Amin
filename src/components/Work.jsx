/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0 
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";

const works = [
    {
      imgSrc: './images/project/project-1.jpg',
      title: 'Continual Object Detection',
      tags: ['Object Detection', 'PyTorch', 'Incremental Learning'],
      projectLink: 'https://github.com/shahrul-amin/Continual_Object_Detection'
    },
    {
      imgSrc: './images/project/project-2.jpg',
      title: 'Vehicle Counting Using YOLOv3 and SORT',
      tags: ['Computer Vision', 'YOLO', 'Deep Learning'],
      projectLink: 'https://github.com/shahrul-amin/Vehicle-Counting-Using-YOLOv3-and-SORT'
    },
    {
      imgSrc: './images/project/project-3.jpg',
      title: 'Portfolio Website',
      tags: ['Web Development', 'ReactJS', 'Tailwind CSS'],
      projectLink: 'https://github.com/shahrul-amin/Portfolio-Shahrul-Amin'
    },
    {
      imgSrc: './images/project/project-4.jpg',
      title: 'Cookies World Website',
      tags: ['Web Development', 'Web Design', 'Databases'],
      projectLink: 'https://github.com/shahrul-amin/Cookies-World-Website'
    },
    {
      imgSrc: './images/project/project-5.jpg',
      title: 'Top Pantry UI Design',
      tags: ['Graphical User Interface', 'Prototyping', 'User Experience'],
      projectLink: 'https://www.figma.com/community/file/1396361792966880290/top-pantry'
    },
    {
      imgSrc: './images/project/project-6.jpg',
      title: 'Data Science Agent (Datagent)',
      tags: ['Flask', 'Gemini API', 'IndexDB'],
      projectLink: 'https://github.com/shahrul-amin/Datagent'
    }
  ];  

const Work = () => {
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