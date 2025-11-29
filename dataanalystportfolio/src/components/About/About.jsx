



import React from 'react'
import './About.css'
import Graduation from '../Images/on campus.png'



const About = () => {
  return (
    <>

        <div className='about-container'>
            <div className='about-wrapper'><h3>About Me</h3></div>

            <div className='about-wrapper-two'>

            <div>
              <img src={Graduation} alt=''></img>
            </div>


            <div className='para-about'>
              <p>I am a results-driven Data Analyst with a Bachelor of Science in Information Technology (BSIT),
               concentrated in Software Engineering, and hands-on experience across the full software development lifecycle.
                During my 2025 internship at Next Play Nation, I served as both a Full-Stack Web Developer and Software Tester, 
                working with multiple modern technologies, deploying applications to cloud platforms such as AWS,
                 and ensuring high-quality functionality across client-side and server-side components for both web and mobile applications.
                  My technical foundation includes strong proficiency in Python, SQL, and data visualization platforms like Tableau,
                   which I leverage to transform complex information into clear, actionable insights. I am passionate about building data-driven solutions,
                    optimizing performance, and supporting business decision-making with accuracy and clarity.
                </p>
                
                <p>
                  ◆ Skillful in gathering and analyzing requirements for data-intensive systems and delivering solutions that directly align with business and technical needs.
                  <br/>
◆ Extensive experience in data modeling, querying, visualization, and analysis, showcased through multiple project builds.
         <br/>
◆ Self-motivated and diligent, continuously staying up to date with modern tools, technologies, and analytical methodologies.
           <br/>
◆ Dynamic team player, experienced in collaborating across teams and managing multiple projects simultaneously.
           <br/>
◆ Creative, analytical problem-solver, driven by passion and continuous improvement, consistently turning complex challenges into strategic, insight-driven outcomes.
                </p>
            </div>

            </div>





            <div className='domain-text'>
                <div>
                    <p>I am up for challenging opportunities in the domain of analytics. </p>
                </div>
            </div>




        </div>






    </>
  )
}

export default About
