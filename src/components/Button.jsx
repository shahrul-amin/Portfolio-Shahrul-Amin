/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types'

/**
 * Primary Button 
 */
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    onClick
}) => {
    if(href) {
        return(
            <a 
                href={href}
                target={target}
                className={"btn btn-primary group " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else{
        return(
            <button className={"btn btn-primary group " + classes}  onClick={onClick}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    onClick: PropTypes.func
}

/**
 * Outline Button 
 */
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if(href) {
        return(
            <a 
                href={href}
                target={target}
                className={"btn btn-outline group " + classes}
            >
                {label}

                {icon ?
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else{
        return(
            <button className={"btn btn-outline group " + classes}>
                {label}

                {icon ?
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}