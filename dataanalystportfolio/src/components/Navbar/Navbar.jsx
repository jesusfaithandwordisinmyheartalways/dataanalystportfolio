import React, { useEffect, useState } from 'react'
import './Navbar.css'

function ResumeDownload() {
  window.open('/resume.pdf', '_blank'); // opens in new tab
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 31);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // smooth scrolling
  const smoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <>
      <div className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
        <div className='nav-wrapper'>
          <h3 className={scrolled ? "scrolled-title" : ""}>Andrew Johnson</h3>

          <div
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={(e)=>smoothScroll(e,'#about')}>About</a>
            <a href="#skills" onClick={(e)=>smoothScroll(e,'#skills')}>Skills</a>

            {/* NEW Internship smooth scroll link */}
            <a href="#internship" onClick={(e)=>smoothScroll(e,'#internship')}>
              Experience
            </a>

            <a href="#projects" onClick={(e)=>smoothScroll(e,'#projects')}>Projects</a>
            <a href="#education" onClick={(e)=>smoothScroll(e,'#education')}>Education</a>
            <a href="#contact" onClick={(e)=>smoothScroll(e,'#contact')}>Contact</a>

            {/* NEW Resume link */}
            <a onClick={ResumeDownload} style={{ cursor: "pointer" }}>
              Résumé
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar