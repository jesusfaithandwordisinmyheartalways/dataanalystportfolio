import React from 'react'
import './Contact.css'
import D_B from '../Images/darkimage.png'
import { Github, Linkedin, Mail } from "lucide-react";





const Contact = () => {
  return (
   <>

    <div className='contact-container'>
        <div className='c-wrapper'>
            <div><h3>CONTACT ME!!</h3></div>

        </div>


        <div className='contact-links'>
                 <a href="https://github.com/jesusfaithandwordisinmyheartalways" target="_blank" rel="noopener noreferrer">
                 <Github size={89} color="white" />
                   </a>


                     <a href="https://www.linkedin.com/in/andrew-johnson-64632199/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={93} color="white" />
                  </a>


                   <a  href="mailto:andrewjohnson9393@gmail.com"  target="_blank" rel="noopener noreferrer">
                 <Mail size={93} color="white" />
               </a>

        </div>


          <div><br /></div>
          <div><br /></div>

        <div className="contact-footer">
          <h3>" THE WORLD IS ONE BIG DATA PROBLEM "</h3>
        </div>



        <div className="contact-footer-two">
          <h3>- Andrew McAfee</h3>
        </div>




    </div>






   </>
  )
}

export default Contact
