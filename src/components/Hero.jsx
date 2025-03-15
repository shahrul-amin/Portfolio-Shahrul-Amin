/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button'
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
        id="home"
        className="pt-28 lg:pt-36"
    >
        <div className="container lg:grid lg:grid-cols-2
        items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                            src="./images/avatar-1.jpg" 
                            width={40}
                            height={40}
                            alt="Shahrul Amin Potrait"
                            className="img-cover" 
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400
                    text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full
                        bg-emerald-400">
                            <span className="absolute inset-0 rounded-full
                            bg-emerald-400 animate-ping"></span>
                        </span>

                        Available for work
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] 
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-zinc-50">
                I Design. I Code. <br/>I Create Experiences.
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                    />

                    <ButtonOutline 
                        href="https://github.com/shahrul-amin"
                        target='_blank'
                        label="GitHub"
                        icon={<FaGithub />}
                    />
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto
                bg-gradient-to-t from-indigo-400 via-25% via-indigo400/40
                to-65% rounded-[60px] overflow-hidden">
                    <img 
                        src="./images/hero-banner.png"
                        width={656}
                        height={400} 
                        alt="Shahrul Amin"
                        className="max-w-[400px] mx-auto" 
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero