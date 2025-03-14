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

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl
                md: max-w-[60cch]">
                    Welcome! I&apos;m Shahrul Amin, an AI Researcher and Software Developer, 
                    I have experience building and modifying model architectures using PyTorch 
                    and TensorFlow. I also design using Figma and develop front-end web applications 
                    using HTML, CSS, JavaScript, and React, while applying frameworks like Tailwind 
                    CSS and Bootstrap. Additionally, I have expertise in backend development using 
                    Laravel, Apache, MongoDB, and Firebase.
                </p>

                <div className="flex flex-wrap items-center gap-4
                md:gap-7">
                    {
                       aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-indigo-400 font-semibold md:text-3xl">+</span>
                            </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                       )) 
                    }
                    
                    <img 
                    src="/images/logo.svg" 
                    alt="Logo"
                    width={30}
                    height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About