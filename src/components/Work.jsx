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
      imgSrc: './images/project-1.jpg',
      title: 'Continual Object Detection',
      tags: ['Object Detection', 'PyTorch', 'Incremental Learning'],
      projectLink: 'https://github.com/shahrul-amin/Continual_Object_Detection'
    },
    {
      imgSrc: './images/project-2.jpg',
      title: 'Vehicle Counting Using YOLOv3 and SORT',
      tags: ['Computer Vision', 'YOLO', 'Deep Learning'],
      projectLink: 'https://github.com/shahrul-amin/Vehicle-Counting-Using-YOLOv3-and-SORT'
    },
    {
      imgSrc: './images/project-3.jpg',
      title: 'Movie Review Classifier Using Naive Bayes',
      tags: ['Artificial Intelligence (AI)', 'Machine Learning'],
      projectLink: 'https://github.com/shahrul-amin/Movie-Review-Classifier-Naive-Bayes'
    },
    {
      imgSrc: './images/project-4.jpg',
      title: 'Cookies World Website',
      tags: ['Web Development', 'Web Design', 'Databases'],
      projectLink: 'https://github.com/shahrul-amin/Cookies-World-Website'
    },
    {
      imgSrc: './images/project-5.jpg',
      title: 'Top Pantry UI Design',
      tags: ['Graphical User Interface', 'User Interface Design', 'User Experience (UX)'],
      projectLink: 'https://www.figma.com/community/file/1396361792966880290/top-pantry'
    }
  ];  

const Work = () => {
  return (
    <section 
        id="work"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
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