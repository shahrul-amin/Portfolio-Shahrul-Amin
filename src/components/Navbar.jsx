/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({navOpen}) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [activeSection, setActiveSection] = useState('home');

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  }
  // Function to update active link based on current section
  const updateActiveLink = (sectionId) => {
    const navLinks = document.querySelectorAll('.nav-link');
    const newActiveLink = document.querySelector(`a[href="#${sectionId}"]`);
    
    if (newActiveLink) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to current link
      newActiveLink.classList.add('active');
      lastActiveLink.current = newActiveLink;
      
      // Update active box position
      if (activeBox.current) {
        setTimeout(() => {
          activeBox.current.style.top = newActiveLink.offsetTop + "px";
          activeBox.current.style.left = newActiveLink.offsetLeft + "px";
          activeBox.current.style.width = newActiveLink.offsetWidth + "px";
          activeBox.current.style.height = newActiveLink.offsetHeight + "px";
        }, 50);
      }
    }
  };
  // Scroll spy functionality
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerCallback = (entries) => {
      let mostVisibleSection = null;
      let maxIntersectionRatio = 0;

      entries.forEach((entry) => {
        // Only consider sections that are at least 50% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target;
        }
      });

      // If no section is 50% visible, find the one with highest visibility above 30%
      if (!mostVisibleSection) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target;
          }
        });
      }

      if (mostVisibleSection) {
        const sectionId = mostVisibleSection.getAttribute('id');
        setActiveSection(sectionId);
        updateActiveLink(sectionId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  useEffect(() => {
    // Initialize active box after component mounts
    const timer = setTimeout(() => {
      initActiveBox();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        initActiveBox();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    
    // Remove active from all links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active to clicked link
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    // Update active box
    if (activeBox.current) {
      activeBox.current.style.top = event.target.offsetTop + "px";
      activeBox.current.style.left = event.target.offsetLeft + "px";
      activeBox.current.style.width = event.target.offsetWidth + "px";
      activeBox.current.style.height = event.target.offsetHeight + "px";
    }

    // Smooth scroll to section
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(targetId);
    }
  }
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Skill",
      link: "#skill",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:!hidden",
    },
  ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => {
        const sectionId = link.replace('#', '');
        const isActive = activeSection === sectionId;
        const finalClassName = isActive ? `${className} active` : className;
        
        return (
          <a
            href={link}
            key={key}
            ref={ref}
            className={finalClassName}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
