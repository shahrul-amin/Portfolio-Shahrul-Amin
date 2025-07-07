/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button'
import handleDownloadCV from '../utils/Download'
import { FaGithub } from "react-icons/fa";

const Hero = () => {  return (
    <section
        id="home"
        className="pt-32 lg:pt-40 relative overflow-hidden"
    >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-16 relative z-10">
            <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                    <figure className="img-box w-12 h-12 rounded-2xl glow-effect">
                        <img 
                            src="./images/avatar-1.jpg" 
                            width={48}
                            height={48}
                            alt="Shahrul Amin Potrait"
                            className="img-cover rounded-2xl" 
                        />
                    </figure>

                    <div className="flex items-center gap-2 text-slate-300
                    text-sm tracking-wide font-medium">
                        <span className="relative w-3 h-3 rounded-full
                        bg-emerald-400 shadow-lg shadow-emerald-400/50">
                            <span className="absolute inset-0 rounded-full
                            bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] 
                lg:max-w-[15ch] text-white">
                I Design. I Code. <br/>I Create.
                </h2>

                <p className="text-slate-300 text-lg leading-relaxed max-w-[45ch] font-medium">
                    Figma Designer, Full-stack developer, and AI/ML researcher.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                        onClick={() => handleDownloadCV({
                            href:"./documents/Shahrul-Amin-CV.pdf", 
                            download:"Shahrul-Amin-CV.pdf"
                        })}
                    />

                    <ButtonOutline 
                        href="https://github.com/shahrul-amin"
                        target='_blank'
                        label="GitHub"
                        icon={<FaGithub />}
                    />
                </div>
            </div>            <div className="hidden lg:block relative">
                <div className="float-element top-10 right-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>
                <div className="float-element bottom-20 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl delay-1000"></div>
                
                <figure className="w-full max-w-[520px] ml-auto glow-effect
                bg-gradient-to-t from-indigo-500/30 via-indigo-500/10 to-transparent
                rounded-[80px] overflow-hidden border border-white/10 backdrop-blur-sm
                shadow-2xl shadow-indigo-500/20">
                    <img 
                        src="./images/hero-banner.png"
                        width={656}
                        height={400} 
                        alt="Shahrul Amin"
                        className="max-w-[420px] mx-auto transition-transform duration-700 hover:scale-105" 
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero