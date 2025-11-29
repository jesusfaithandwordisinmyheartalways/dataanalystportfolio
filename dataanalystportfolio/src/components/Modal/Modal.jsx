import React from 'react'
import './Modal.css'

function CEO() {
  window.open('/letter_of_recommendation_next_play_nation.pdf', '_blank');
}

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>

      <div className="modal-box">

        <button className="modal-close" onClick={closeModal}>×</button>

        <h3>Full Stack Developer & Software Tester Internship</h3>
        <h4>Next Play Nation</h4>

        <p className="modal-sub">Apr 2025 – Jun 2025</p>
        <p className="modal-sub">Location: Dallas, TX (Remote)</p>

        <p className="modal-body">
          Developed and maintained React micro-frontends integrated with Node.js and Spring Boot APIs
          in a microservice-style architecture. Implemented RESTful and GraphQL APIs supporting data
          integrations and internal tooling. Applied Test Driven Development (TDD) using Jest, React
          Testing Library, and Supertest to validate features. Optimized system performance and resolved
          technical issues through debugging and architectural troubleshooting. Participated in Agile
          ceremonies and code reviews, contributing to a collaborative engineering culture.
        </p>

        <p className="modal-bottom">
          <strong>Software Tester Tools & Technologies:</strong> Docker, Jira, Jest, Supertest, AWS, Playwright
        </p>

        <p className="modal-bottom">
          <strong>Full Stack Dev Tools & Technologies:</strong> JavaScript, MongoDB, React, TypeScript,
          Node.js, GraphQL
        </p>

        {/* NEW CEO BUTTON IN MODAL */}
        <button className="ceo-btn-modal" onClick={CEO}>
          See CEO Recommendation
        </button>

      </div>
    </>
  )
}

export default Modal