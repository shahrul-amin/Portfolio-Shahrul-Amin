/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0 
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {  return (
    <div className={"card relative p-6 group hover:scale-105 transition-all duration-300 cursor-pointer " + classes}>
        <figure className="img-box aspect-square rounded-2xl mb-6 overflow-hidden glow-effect">
            <img 
                src={imgSrc} 
                alt={title}
                loading="lazy"
                className="img-cover transition-transform duration-500 group-hover:scale-110"
            />
        </figure>

        <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) =>(
                        <span
                            key={key}
                            className="h-8 text-xs font-medium text-slate-300 bg-white/10 backdrop-blur-sm 
                            border border-white/10 grid items-center px-3 rounded-xl
                            group-hover:bg-white/15 group-hover:text-white transition-all duration-300"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-r from-indigo-500 to-purple-600
            text-white shrink-0 shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/40
            transition-all duration-300 group-hover:scale-110">
                <span 
                    className="material-symbols-rounded text-lg"
                    aria-hidden="true"
                    >
                        arrow_outward
                </span>
            </div>
        </div>
        
        <a 
            href={projectLink}
            target="_blank"
            className="absolute inset-0 rounded-3xl"
            aria-label={`View ${title} project`}
        ></a>

    </div>
  )
}

ProjectCard.PropTypes ={
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard