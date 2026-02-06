import React from 'react'
import './About.css'
import Graduation from '../Images/on campus.png'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='about-wrapper'>
          <h3>About Me</h3>
        </div>

        <div className='about-wrapper-two'>
          <div>
            <img src={Graduation} alt='Graduation' />
          </div>

          <div className='para-about'>
            <p>
              I am a <strong>Certified Data Analyst (Simplilearn)</strong> with a Bachelor of Science in Information Technology (Software Engineering) and a strong technical foundation in
              Python, SQL, R, and data visualization. I specialize in transforming complex, raw datasets into clear, actionable insights that support business decision-making,
              operational monitoring, and strategic planning.
            </p>

            <p>
              Through advanced, portfolio-scale projects—including a <strong>Finance & Fintech Analytics System</strong> and a
              <strong> Large-Scale Government Audit & Error Detection Platform</strong>—I have designed and implemented end-to-end analytics pipelines
              covering data ingestion, cleaning, validation, modeling, analysis, and visualization. My work emphasizes accuracy, scalability, and stakeholder-ready reporting.
            </p>

            <p>
              With prior experience in software engineering and cloud-based application development, I bring a systems-level understanding of data workflows,
              APIs, and automation. This background allows me to collaborate effectively with data engineers, optimize data quality, and deliver reliable analytics solutions.
              I am highly adaptable and continuously learning, quickly applying industry best practices and tools (such as Lovelytics and similar extensions)
              to ensure dashboards are polished, performant, and professional.
            </p>

            <p>
              <strong>Core competencies:</strong><br />
              • End-to-end data analytics pipelines using Python, SQL, and R across finance, government, healthcare, and sales domains<br />
              • Financial, risk, audit, and anomaly analysis, including fraud detection and error identification<br />
              • Data visualization and storytelling with Tableau, Power BI, and Excel (Power Query, pivot tables)<br />
              • Data cleaning, validation, and modeling with a strong focus on accuracy and decision support<br />
              • Collaborative, adaptable, and continuously improving—quick to learn and apply new analytics tools and standards
            </p>
          </div>
        </div>

        <div className='domain-text'>
          <div>
            <p>I am open to challenging opportunities in data analytics where I can deliver measurable impact and continue growing professionally.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About