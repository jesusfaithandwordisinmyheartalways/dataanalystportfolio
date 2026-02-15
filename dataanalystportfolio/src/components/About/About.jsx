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
              I am a <strong>Certified Data Analyst (Simplilearn)</strong> with a Bachelor of Science in Information Technology (Software Engineering) and a strong technical foundation in Python, SQL, R, and data visualization. I transform complex datasets into clear, actionable insights that drive strategic decision-making.
            </p>

            <p>
              I have earned certifications including <strong>Google Analytics 4</strong>, which demonstrates my ability to set up properties, collect and analyze website/app data, and leverage reporting tools to measure marketing effectiveness. Combined with my data analytics certification, this enables me to provide end-to-end insights for business growth.
            </p>

            <p>
              Through portfolio-scale projects—including a <strong>Finance & Fintech Analytics System</strong> and a <strong>Large-Scale Government Audit & Error Detection Platform</strong>—I have built complete analytics pipelines from data ingestion to visualization, emphasizing accuracy, scalability, and actionable reporting.
            </p>

            <p>
              With experience in software engineering and cloud-based application development, I bring a systems-level understanding of data workflows, APIs, and automation. I quickly apply best practices and tools (like Tableau, Power BI, Excel, and Lovelytics) to create polished, professional dashboards.
            </p>

            <p>
              <strong>Core competencies:</strong><br />
              • End-to-end data analytics pipelines with Python, SQL, and R across finance, government, healthcare, and sales domains<br />
              • Google Analytics 4: property setup, data collection, reporting, and marketing measurement<br />
              • Financial, risk, audit, and anomaly analysis, including fraud detection<br />
              • Data visualization and storytelling with Tableau, Power BI, and Excel<br />
              • Data cleaning, validation, and modeling with focus on accuracy and decision support<br />
              • Collaborative, adaptable, and continuously learning to apply new analytics tools and standards
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