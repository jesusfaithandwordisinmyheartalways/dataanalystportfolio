



import React from 'react'
import './Experience.css'
import SQLPythonDataAnalystProject from '../Images/SQLPythonDataAnalystProject.png'
import github from '../Images/github-icon.png'
import Healthcare_Dashboard from '../Images/data-analytics-for-healthcare.png'
import W from  '../Images/WAREHOUSEDASHBOARD.png'
import Government_Operations from '../Images/Government_Operations.png'
import Finance from '../Images/Finance & Fintech Data Analytics.png'





function Finance_Data_Analytics_Project() {
  window.location.href = 'https://github.com/jesusfaithandwordisinmyheartalways/FinanceDataAnalytics-/blob/master/README.md'
}




function Government_OperationsProject() {
  window.location.href = 'https://github.com/jesusfaithandwordisinmyheartalways/DataAnalyticsGovernmentAuditErrorDetection/blob/master/README.md'
}



function SQLProject() {
  window.location.href = 'https://github.com/jesusfaithandwordisinmyheartalways/SQLpythondataanalyst/blob/main/README.md'
}



function HealthCare_Project() {
  window.location.href = 'https://github.com/jesusfaithandwordisinmyheartalways/healthcaredataanalytics/blob/master/README.md'
}



function Data() {
  window.location.href = 'https://github.com/jesusfaithandwordisinmyheartalways/datawarehouseanalytics/blob/master/README.md'
}







const Experience = () => {
  return (
   <>
    <div className='experience-container'></div>

        <div className='experience-header'>
          <div>
            {/* Added the class "rainbow-shadow" */}
            <h3>Projects</h3>
          </div>
        </div>

        <div className='experience-header-two'>
            <p>These are some the projects that I have implemented. Many more projects are yet to come.</p>
        </div>



        <div className='project-section'>


        <div><img src={Finance} onClick={Finance_Data_Analytics_Project} alt=''></img></div>
            <div><h3>Finance & Fintech Data Analytics    </h3></div>
            <div><p>Financial & Risk Analytics, Data Visualization & Reporting, Tableau, ETL & Data Pipelines, Business Communication </p></div>
            <div> <img onClick={Finance_Data_Analytics_Project} className="github-icon" src={github} alt=''></img></div>

         


        <div><img src={Government_Operations } onClick={Government_OperationsProject} alt=''></img></div>
            <div><h3>Large-Scale Audit & Error Detection System for Government Operations  </h3></div>
            <div><p>Python, SQL, R, Tableau Public </p></div>
            <div> <img onClick={Government_OperationsProject} className="github-icon" src={github} alt=''></img></div>

         

             <div><img src={Healthcare_Dashboard} onClick={HealthCare_Project} alt=''></img></div>
            <div><h3>Healthcare Data Analytics: Billing, Visits & Outcomes   </h3></div>
            <div><p>SQL, Python , 	NumPy & openpyxl  library, Tableau , Jupyter Notebook, PostgreSQL + pgAdmin , Excel  </p></div>
            <div> <img onClick={HealthCare_Project} className="github-icon" src={github} alt=''></img></div>



             <div><img src={W} onClick={Data} alt=''></img></div>
            <div><h3>DataWarehouseAnalytics: Sales Data Warehouse & Dashboards </h3></div>
            <div><p>Mini Data Warehouse in PostgreSQL Python , R, Interactive dashboards in Tableau and Power BI, baseline machine learning  </p></div>
            <div> <img onClick={Data} className="github-icon" src={github} alt=''></img></div>



            <div><img src={SQLPythonDataAnalystProject} onClick={SQLProject} alt=''></img></div>
            <div><h3>SQL & Python Data Analysis  </h3></div>
            <div><p>SQL, Python , Pandas library, Tableau , Real Analytics Workflow </p></div>
            <div> <img onClick={SQLProject} className="github-icon" src={github} alt=''></img></div>







        </div>












   </>
  )
}

export default Experience
