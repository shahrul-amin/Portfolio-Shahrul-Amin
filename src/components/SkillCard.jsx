/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types"

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {  return (
    <div className={'card flex items-center gap-4 p-5 group transition-all duration-300 ' + classes}>
        <figure className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl 
        overflow-hidden w-16 h-16 p-3 group-hover:from-indigo-500/20 group-hover:to-purple-500/20
        transition-all duration-300 shadow-lg shadow-black/25 flex items-center justify-center">
            <img 
                src={imgSrc}
                width={40}
                height={40} 
                alt={label}   
                className="transition-transform duration-300 group-hover:scale-110"
            />
        </figure>
        <div className="flex-1">
            <h3 className="text-white font-semibold text-lg group-hover:text-slate-100 transition-colors duration-300">
                {label}
            </h3>

            <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors duration-300">
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard