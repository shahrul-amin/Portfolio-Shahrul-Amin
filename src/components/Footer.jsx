/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0 
 */

/**
 * Components
 */
import {ButtonPrimary} from "./Button.jsx";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Skill',
      href: '#skill'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/shahrul-amin'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shahrul-amin-83a078136/'
    },
    {
      label: 'Kaggle',
      href: 'https://www.kaggle.com/shinn1'
    },
    {
      label: 'Figma',
      href: 'https://www.figma.com/@shin30'
    },
    {
      label: 'Line',
      href: 'https://line.me/ti/p/mX5R6ku7WO'
    }
  ];

const Footer = () => {
  return (
    <footer className="section relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="mb-16 lg:mb-0">
                    <h2 className="headline-1 mb-8 lg:max-w-[15ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                        href="mailto:shahrulamin8776@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <p className="mb-6 reveal-up text-white font-semibold text-lg">Sitemap</p>

                        <ul className="space-y-3">
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href}
                                    className="block text-sm text-slate-400 
                                    transition-all duration-300 hover:text-white hover:translate-x-1 reveal-up font-medium"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-6 reveal-up text-white font-semibold text-lg">Socials</p>

                        <ul className="space-y-3">
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-slate-400 
                                    transition-all duration-300 hover:text-white hover:translate-x-1 reveal-up font-medium"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-16 pb-8 border-t border-white/10 mt-16">
                <a 
                    href="/" 
                    className="logo reveal-up group"
                >
                    <img 
                        src="./images/logo.svg"
                        width={45}
                        height={45} 
                        alt="Logo"
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    />
                </a>

                <p className="text-slate-400 text-sm reveal-up font-medium">
                    &copy; 2025 <span className="text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">shahrul-amin</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer