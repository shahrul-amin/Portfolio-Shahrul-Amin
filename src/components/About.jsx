/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

const About = () => {  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="card p-8 md:p-16 reveal-up relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                  <p className="text-slate-200 mb-8 md:mb-12 md:text-xl leading-relaxed
                md:max-w-[60ch] font-medium relative z-10">
                    Welcome! I&apos;m <span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Shahrul Amin</span>, an AI Researcher and Software Developer. 
                    I have experience building and modifying model architectures using PyTorch 
                    and TensorFlow. I also design using Figma and develop front-end web applications 
                    using HTML, CSS, JavaScript, and React, while applying frameworks like Tailwind 
                    CSS and Bootstrap. Additionally, I have expertise in backend development using 
                    Laravel, Apache, MongoDB, and Firebase.
                </p>

                <div className="flex flex-wrap items-center gap-8
                md:gap-12 relative z-10">
                    {
                       aboutItems.map(({label, number}, key) => (
                        <div key={key} className="text-center group">
                            <div className="flex items-center justify-center mb-3">
                                <span className="text-3xl font-bold md:text-5xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">{number}</span>
                                <span className="text-indigo-400 font-bold md:text-4xl ml-1 group-hover:scale-110 transition-transform duration-300">+</span>
                            </div>

                            <p className="text-sm text-slate-300 font-medium tracking-wide">{label}</p>
                        </div>
                       )) 
                    }
                    
                    <img 
                    src="./images/logo.svg" 
                    alt="Logo"
                    width={35}
                    height={35} 
                    className="ml-auto md:w-[45px] md:h-[45px] opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-3"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About