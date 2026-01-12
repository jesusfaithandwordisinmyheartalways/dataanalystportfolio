import React from 'react'
import './Skill.css'
import PythonLogo from '../Images/python.png'
import Pandas from '../Images/Pandas.png'
import SQL from '../Images/SQL.png'
import PostGresSQL from '../Images/postgressql.png'
import Tableau from  '../Images/tableau.png'
import Git from '../Images/gitversioncontrol.png'
import EXCEL from '../Images/microsoftexcel.png'
import NumPy from '../Images/NumPy.png'
import Jupyter_Logo from '../Images/Jupyter_logo.png'
import Openpyxl_Logo from '../Images/openpyxl.png'
import R from '../Images/r_.png'
import Power from '../Images/Power-BI.png'
import machine_learning from '../Images/machine_learning.png'






const Skill = () => {
  return (
    <>

      <div className='skill-container'>

        <div className='skill-header'>
          <div>
            {/* Added the class "rainbow-shadow" */}
            <h3 className="rainbow-shadow">Data Analyst Skill</h3>
          </div>
        </div>



        <div className='skill-wrapper'>

        <div><img src={PythonLogo} alt=''></img><p>Python</p></div>
                    
                <div><img src={Pandas} alt=''></img><p>Pandas Library</p></div>
                 <div><img src={SQL} alt=''></img><p>SQL</p></div>
                  <div><img src={PostGresSQL} alt=''></img><p>Postgres SQL</p></div>
                   <div><img src={Tableau} alt=''></img><p>Tableau</p></div>
                     <div><img src={Power} alt=''></img><p>Power BI</p></div>
                      <div><img src={R} alt=''></img><p>R</p></div>
                      <div><img src={machine_learning} alt=''></img><p>Machine Learning</p></div>


                   <div><img src={Git} alt=''></img><p>Git version control</p></div>
                    <div><img src={EXCEL} alt=''></img><p>Excel Data</p></div>
                     <div><img src={NumPy} alt=''></img><p>Numpy Library</p></div>
                     <div><img src={Jupyter_Logo} alt=''></img><p>Jupyter Notebook</p></div>
                     <div><img src={Openpyxl_Logo} alt=''></img><p>Openpxl Library</p></div>




        </div>


        








      </div>

    </>
  )
}

export default Skill