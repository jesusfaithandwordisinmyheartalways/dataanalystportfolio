import React, { useState } from 'react'
import './Internship.css'
import Next from '../Images/next_play_nation.png'
import Modal from '../Modal/Modal'




function CEO() {
  window.open('/letter_of_recommendation_next_play_nation.pdf', '_blank');
}




const Internship = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className='internship-container'>
        
        <div className='internship-header'>
          <h3> Experience</h3>
        </div>

        <div className='internship-content'>

          <div 
            className="internship-image-wrapper"
            onClick={() => setOpenModal(true)}
          >
            <img src={Next} alt='' />
            <div className="hover-overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>

          <h3>Full Stack Developer & Software Tester Internship</h3>
          <h4>Next Play Nation</h4>
          <p>APRIL 2025 - JUNE 2025</p>

          {/* New CEO button */}
          <button className="ceo-btn" onClick={CEO}>
            See CEO Recommendation
          </button>

        </div>
      </div>

      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </>
  )
}

export default Internship