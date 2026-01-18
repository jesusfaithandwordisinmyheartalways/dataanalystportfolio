



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
              <p>I am a results-driven Data Analyst with a Bachelor of Science in Information Technology (BSIT) and a strong foundation in Python, SQL, R, 
                and data visualization. Through advanced, portfolio-scale projects—including a Finance & Fintech Data Analytics system and a Large-Scale Government Audit & Error Detection platform—I
                 have built end-to-end analytics pipelines that transform raw, complex data into decision-ready insights for operational monitoring, risk detection,
                  and strategic planning. I specialize in data cleaning, validation, modeling, and visualization, and I am highly adaptable in applying industry best practices and tools 
                  (such as Lovelytics or similar extensions) to ensure dashboards are polished, performant, and stakeholder-ready. With prior experience in software engineering and cloud-based application development, 
                I bring a strong technical mindset, business awareness, and a commitment to continuous learning to every analytics challenge.
                </p>
                
                <p>
                  ◆ 	•	End-to-end data analytics pipelines (Python, SQL, R) for finance, government, healthcare, and sales use cases
                  <br/>
◆ Financial, risk, and anomaly analysis, including fraud detection and audit-focused insights
         <br/>
◆ Data visualization & storytelling using Tableau, Power BI, Excel (Power Query, pivot tables), and visualization best practices
           <br/>
◆ Strong data cleaning, validation, and modeling skills with a focus on accuracy and decision support
           <br/>
◆ Adaptable, collaborative, and continuously improving—quick to learn and apply new tools (e.g., Lovelytics) to meet professional reporting standards
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
