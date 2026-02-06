import React, { useEffect, useState } from 'react'
import './Navbar.css'



function ResumeDownload() {
  window.open('/resume.pdf', '_blank');
}


function CoverLetterDownload() {
  window.open('/coverletter.pdf', '_blank');
}



function CertificationDownload() {
  window.open('/certification.pdf', '_blank');
}




const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 31);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <>
      <div className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
        <div className='nav-wrapper'>
          <h3 className={scrolled ? "scrolled-title" : ""}>Andrew Johnson</h3>

          {/* HAMBURGER REMOVED FOR MOBILE */}
          <div className="menu-button hide-mobile">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>

          <div className="nav-links">
            <a href="#about" onClick={(e)=>smoothScroll(e,'#about')}>About</a>
            <a href="#skills" onClick={(e)=>smoothScroll(e,'#skills')}>Skills</a>
            <a href="#internship" onClick={(e)=>smoothScroll(e,'#internship')}>Experience</a>
            <a href="#projects" onClick={(e)=>smoothScroll(e,'#projects')}>Projects</a>
            <a href="#education" onClick={(e)=>smoothScroll(e,'#education')}>Education</a>
            <a href="#contact" onClick={(e)=>smoothScroll(e,'#contact')}>Contact</a>
            <a onClick={ResumeDownload} style={{ cursor: "pointer" }}>Résumé</a>
            <a onClick={CoverLetterDownload} style={{ cursor: "pointer" }}>Cover Letter</a>
            <a onClick={CertificationDownload} style={{ cursor: "pointer" }}>Certification</a>


          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar;