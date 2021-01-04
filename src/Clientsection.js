import React from 'react'
import './Clientsection.css'

export default function Clientsection() {
    return (
        <div>
             <div className="client-say">
        <h2>What My Client Say</h2>
        <p>I am very lucky to work with many clients. I worked very hard and with all my efforts to provide them the best solutions.
        </p>
        <div className="clientbox">
        <div className="client">
            <div className="image-container second">
            <img src="assets/ram.jpg" alt=""/>
        </div>
        <div className="clientdetails">
        <h3>Ram Sapkota</h3>
            <h5>.NET Developer</h5>
            <h5>Software Engineer</h5>
        </div>
            <p>He is working for long-time as Front-End-Developer.His work is highly appreciable</p>

        </div>
        <div className="client">
                <div className="image-container second">
                        <img src="assets/madan.jpg" alt=""/>
                    </div>
                    <div className="clientdetails">
                    <h3>Madan Panthi</h3>
            <h5>Full Time Programmer</h5>
            <h5>Software Engineer</h5>
        </div>
            <p>I am very lucky to work with him.He works his work with full of efforts and care.Keep up the excellent work.Keep up the excellent work.</p>
        </div>
    </div>
    </div>
    </div>
       
    )
}
